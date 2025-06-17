import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";

export function Dashboard() {
	const { session } = useAuth();

	return (
		<div className="w-full p-8">
			<div className="max-w-6xl mx-auto">
				{/* Welcome Section */}
				<Card className="mb-8 bg-card/50 backdrop-blur-md border border-border/50 shadow-2xl">
					<CardContent className="pt-6">
						<h1 className="text-4xl font-bold mb-4 leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
							Welcome back, {session?.user?.displayName || session?.user?.email}
							!
						</h1>
						<p className="text-lg text-muted-foreground mb-6">
							Continue your language learning journey
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
