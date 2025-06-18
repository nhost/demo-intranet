import "./index.css";
import { Dashboard } from "@/components/Dashboard";
import { Departments } from "@/components/Departments";
import { Files } from "@/components/Files";
import { Navigation } from "@/components/Navigation";
import { ProtectedLayout } from "@/components/ProtectedLayout";
import { SignIn } from "@/components/SignIn";
import { SignUp } from "@/components/SignUp";
import { UserProfile } from "@/components/UserProfile";
import { Card, CardContent } from "@/components/ui/card";
import { AuthProvider } from "@/lib/auth-context";
import { queryClient } from "@/lib/react-query";
import { ThemeProvider } from "@/lib/theme-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";

import logo from "./logo.svg";

function HomePage() {
	return (
		<div className="w-full p-8 text-left">
			<div className="flex justify-center items-center gap-8 mb-8">
				<img
					src={logo}
					alt="Logo"
					className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#60a5faaa] filter hover:brightness-110"
				/>
			</div>

			<Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-md border border-border/50 shadow-2xl">
				<CardContent className="pt-6">
					<h1 className="text-5xl font-bold my-4 leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
						Acme Corp Intranet
					</h1>
					<p className="text-lg text-muted-foreground mb-6">
						Intranet is a modern, secure, and user-friendly platform designed to
						enhance internal communication and collaboration within
						organizations. It provides a centralized hub for employees to access
						resources, share information, and connect with colleagues.
					</p>
					<p className="text-sm text-muted-foreground/80">
						To get started, please sign in or create a new account. If you are
						an administrator, you can manage user accounts and settings from the
						dashboard.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}

export function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="lang-learn-ui-theme">
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<Router>
						<div className="min-h-screen w-full relative">
							<Navigation />
							<div className="w-full">
								<Routes>
									<Route path="/" element={<HomePage />} />
									<Route path="/signin" element={<SignIn />} />
									<Route path="/signup" element={<SignUp />} />
									<Route element={<ProtectedLayout />}>
										<Route path="/dashboard" element={<Dashboard />} />
										<Route path="/departments" element={<Departments />} />
										<Route path="/files" element={<Files />} />
										<Route path="/user" element={<UserProfile />} />
									</Route>
									<Route
										path="*"
										element={<Navigate to="/" replace={true} />}
									/>
								</Routes>
							</div>
						</div>
					</Router>
				</AuthProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ThemeProvider>
	);
}
