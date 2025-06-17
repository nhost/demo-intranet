import type { NhostClient } from "@nhost/nhost-js";
import type { Session } from "@nhost/nhost-js/auth";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { nhost } from "./nhost.ts";
import { queryKeys } from "./react-query.ts";

interface AuthContextType {
	session: Session | null;
	loading: boolean;
	nhost: NhostClient;
	isInitialized: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [session, setSession] = useState<Session | null>(null);
	const [isInitialized, setIsInitialized] = useState(false);
	const queryClient = useQueryClient();

	// Use React Query to manage session state with proper initialization
	const { data: sessionData, isLoading } = useQuery({
		queryKey: queryKeys.session(),
		queryFn: async () => {
			// Wait for Nhost to restore session from storage
			const currentSession = nhost.getUserSession();

			// If no session immediately available, wait a bit for restoration
			if (!currentSession && !isInitialized) {
				await new Promise((resolve) => setTimeout(resolve, 100));
				return nhost.getUserSession();
			}

			return currentSession;
		},
		staleTime: 30 * 1000, // Session data is fresh for 30 seconds
		refetchOnWindowFocus: false,
		refetchOnReconnect: true,
		enabled: true, // Always run this query
	});

	// Calculate loading state - we're loading if React Query is loading OR we're not initialized
	const loading = isLoading || !isInitialized;

	useEffect(() => {
		// Set session from React Query data
		setSession(sessionData || null);

		// Mark as initialized once we get first response from React Query
		if (!isInitialized && !isLoading) {
			setIsInitialized(true);
		}
	}, [sessionData, isLoading, isInitialized]);

	useEffect(() => {
		// Subscribe to session changes and invalidate React Query cache
		const unsubscribe = nhost.sessionStorage.onChange((newSession) => {
			setSession(newSession);
			// Invalidate and refetch session query when session changes
			queryClient.invalidateQueries({ queryKey: queryKeys.session() });
		});

		return unsubscribe;
	}, [queryClient]);

	return (
		<AuthContext.Provider value={{ session, loading, nhost, isInitialized }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
