import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
	const { session, nhost } = useAuth();
	const location = useLocation();

	const handleSignOut = async () => {
		if (session?.refreshToken) {
			await nhost.auth.signOut({ refreshToken: session.refreshToken });
		}
	};

	const isActive = (path: string) => {
		return location.pathname === path;
	};

	return (
		<nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 py-3">
				<div className="flex items-center justify-between">
					{/* Logo/Brand */}
					<Link to="/" className="flex items-center space-x-2">
						<div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
							Intranet
						</div>
					</Link>

					{/* Navigation Links */}
					<div className="flex items-center space-x-4">
						{session ? (
							// Authenticated user menu
							<div className="flex items-center space-x-4">
								<Link to="/dashboard">
									<Button
										variant={isActive("/dashboard") ? "default" : "ghost"}
										size="sm"
									>
										Dashboard
									</Button>
								</Link>
								<Link to="/departments">
									<Button
										variant={isActive("/departments") ? "default" : "ghost"}
										size="sm"
									>
										Departments
									</Button>
								</Link>
								<Link to="/files">
									<Button
										variant={isActive("/files") ? "default" : "ghost"}
										size="sm"
									>
										Files
									</Button>
								</Link>
								<Link to="/knowledge">
									<Button
										variant={isActive("/knowledge") ? "default" : "ghost"}
										size="sm"
									>
										Knowledge
									</Button>
								</Link>
								<Link to="/user">
									<Button
										variant={isActive("/user") ? "default" : "ghost"}
										size="sm"
									>
										Profile
									</Button>
								</Link>
								<div className="flex items-center space-x-2 text-sm text-muted-foreground">
									<span>Welcome, {session.user?.displayName}</span>
								</div>
								<ThemeToggle />
								<Button variant="outline" size="sm" onClick={handleSignOut}>
									Sign Out
								</Button>
							</div>
						) : (
							// Guest user menu
							<div className="flex items-center space-x-2">
								<ThemeToggle />
								<Link to="/signin">
									<Button
										variant={isActive("/signin") ? "default" : "ghost"}
										size="sm"
									>
										Sign In
									</Button>
								</Link>
								<Link to="/signup">
									<Button
										variant={isActive("/signup") ? "default" : "outline"}
										size="sm"
									>
										Sign Up
									</Button>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}
