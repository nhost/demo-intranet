import { DisplayNameEditForm } from "@/components/DisplayNameEditForm";
import { EmailEditForm } from "@/components/EmailEditForm";
import { ProfilePictureUpload } from "@/components/ProfilePictureUpload";
import { SecurityKeyManagement } from "@/components/SecurityKeyManagement";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import { useGetCurrentUserQuery } from "@/lib/graphql/__generated__/graphql";
import { useQueryClient } from "@tanstack/react-query";
import { Calendar, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function UserProfile() {
	const { session, nhost, loading: authLoading } = useAuth();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	// Fetch user data from GraphQL
	const {
		data: userData,
		isLoading: userDataLoading,
		error: userDataError,
	} = useGetCurrentUserQuery(
		{ userId: session?.user?.id || "" },
		{
			enabled: !!session?.user?.id, // Only run query if we have a user ID
		},
	);

	const loading = authLoading || userDataLoading;
	const user = userData?.user;

	const handleSignOut = async () => {
		if (session?.refreshToken) {
			await nhost.auth.signOut({ refreshToken: session.refreshToken });
		}
		// Clear React Query cache on sign out
		queryClient.clear();
		navigate("/signin");
	};

	if (loading) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
				<div className="container mx-auto max-w-2xl pt-16">
					<Card className="bg-card/80 backdrop-blur-xl border-0 shadow-2xl">
						<CardContent className="p-8">
							<div className="flex items-center justify-center space-x-2">
								<div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
								<p className="text-lg text-muted-foreground">
									Loading profile...
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}

	if (!session) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
				<div className="container mx-auto max-w-2xl pt-16">
					<Card className="bg-card/80 backdrop-blur-xl border-0 shadow-2xl">
						<CardContent className="p-8 text-center">
							<User className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
							<p className="text-lg text-destructive">
								You must be signed in to view this page.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}

	if (userDataError) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
				<div className="container mx-auto max-w-2xl pt-16">
					<Card className="bg-card/80 backdrop-blur-xl border-0 shadow-2xl">
						<CardContent className="p-8 text-center">
							<User className="mx-auto h-12 w-12 text-destructive mb-4" />
							<p className="text-lg text-destructive">
								Failed to load profile data. Please try again.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}

	if (!user) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
				<div className="container mx-auto max-w-2xl pt-16">
					<Card className="bg-card/80 backdrop-blur-xl border-0 shadow-2xl">
						<CardContent className="p-8 text-center">
							<User className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
							<p className="text-lg text-muted-foreground">
								No profile data found.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
			<div className="container mx-auto max-w-2xl pt-16">
				<Card className="bg-card/80 backdrop-blur-xl border-0 shadow-2xl">
					<CardHeader className="text-center pb-2">
						<div className="flex justify-center mb-4">
							<ProfilePictureUpload
								currentAvatarUrl={user.avatarUrl || ""}
								userId={user.id}
							/>
						</div>
						<CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
							User Profile
						</CardTitle>
						<CardDescription className="text-base">
							Manage your account information
						</CardDescription>
					</CardHeader>
					<CardContent className="p-8 pt-6">
						<div className="space-y-8">
							{/* Display Name Section */}
							<div className="space-y-4">
								<DisplayNameEditForm
									currentDisplayName={user.displayName || ""}
									userId={user.id}
								/>
							</div>

							{/* Email Section */}
							<div className="space-y-4">
								<EmailEditForm currentEmail={user.email || ""} />
							</div>

							{/* Security Keys Section */}
							<div className="space-y-4">
								<SecurityKeyManagement userId={user.id} />
							</div>

							{/* Account Created Section */}
							<div className="space-y-2">
								<Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
									<Calendar className="h-4 w-4" />
									Member Since
								</Label>
								<div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg border border-primary/20">
									<p className="text-lg font-semibold">
										{new Date(user.createdAt).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</p>
									<p className="text-sm text-muted-foreground">
										You've been part of our community for{" "}
										{Math.floor(
											(Date.now() - new Date(user.createdAt).getTime()) /
												(1000 * 60 * 60 * 24),
										)}{" "}
										days
									</p>
								</div>
							</div>

							{/* Sign Out Section */}
							<div className="pt-6 border-t border-border/50">
								<Button
									onClick={handleSignOut}
									variant="destructive"
									size="lg"
									className="w-full group"
								>
									<LogOut className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
									Sign Out
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
