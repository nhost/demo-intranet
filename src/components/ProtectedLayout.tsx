import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";
import type { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface ProtectedLayoutProps {
	children?: ReactNode;
}

export function ProtectedLayout({ children }: ProtectedLayoutProps) {
	const { session, loading, isInitialized } = useAuth();
	const location = useLocation();

	// Show loading while session is being restored or React Query is loading
	if (loading || !isInitialized) {
		return (
			<div className="container mx-auto p-8 max-w-md">
				<Card>
					<CardContent className="pt-6">
						<p className="text-center">Loading...</p>
					</CardContent>
				</Card>
			</div>
		);
	}

	// Only redirect if we're initialized and definitely have no session
	if (isInitialized && !session) {
		// Redirect to sign in page with return url
		return <Navigate to="/signin" state={{ from: location }} replace={true} />;
	}

	// Render children if provided, otherwise use Outlet for nested routes
	return <>{children || <Outlet />}</>;
}
