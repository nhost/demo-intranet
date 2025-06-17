import { QueryClient } from "@tanstack/react-query";

// React Query client configuration for language learning app
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// Cache data for 5 minutes by default
			staleTime: 5 * 60 * 1000,
			// Keep unused data in cache for 10 minutes
			gcTime: 10 * 60 * 1000,
			// Retry failed requests up to 3 times
			retry: 3,
			// Retry with exponential backoff
			retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
			// Refetch on window focus for fresh content
			refetchOnWindowFocus: true,
			// Don't refetch on reconnect to avoid interrupting sessions
			refetchOnReconnect: false,
		},
		mutations: {
			// Retry mutations once for network issues
			retry: 1,
			retryDelay: 1000,
		},
	},
});

// Query key factories for consistent cache management
export const queryKeys = {
	auth: ["auth"] as const,
	session: () => [...queryKeys.auth, "session"] as const,
	user: (id: string) => ["user", id] as const,
};
