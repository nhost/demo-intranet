import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import { queryKeys } from "@/lib/react-query";
import {
	getWebAuthnErrorMessage,
	isWebAuthnSupported,
} from "@/lib/webauthn-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { startAuthentication } from "@simplewebauthn/browser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Fingerprint } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const emailSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
});

const otpSchema = z.object({
	otp: z
		.string()
		.min(6, "OTP must be at least 6 characters")
		.max(10, "OTP must be at most 10 characters"),
});

type EmailFormData = z.infer<typeof emailSchema>;
type OtpFormData = z.infer<typeof otpSchema>;

export function SignIn() {
	const { nhost } = useAuth();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [step, setStep] = useState<"email" | "otp">("email");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [isWebAuthnAvailable, setIsWebAuthnAvailable] = useState(false);

	const emailForm = useForm<EmailFormData>({
		resolver: zodResolver(emailSchema),
	});

	const otpForm = useForm<OtpFormData>({
		resolver: zodResolver(otpSchema),
	});

	// Check WebAuthn availability on component mount
	useEffect(() => {
		setIsWebAuthnAvailable(isWebAuthnSupported());
	}, []);

	const emailMutation = useMutation({
		mutationFn: (email: string) => {
			return nhost.auth.signInOTPEmail({ email });
		},
		onSuccess: (_data, email) => {
			setEmail(email);
			setStep("otp");
			setError("");
		},
		onError: (err: unknown) => {
			const errorMessage =
				err instanceof Error
					? err.message
					: "An unexpected error occurred. Please try again.";
			setError(errorMessage);
		},
	});

	const handleEmailSubmit = (data: EmailFormData) => {
		emailMutation.mutate(data.email);
	};

	const otpMutation = useMutation({
		mutationFn: (otp: string) => {
			return nhost.auth.verifySignInOTPEmail({
				email,
				otp,
			});
		},
		onSuccess: () => {
			// Invalidate session query to refresh auth state
			queryClient.invalidateQueries({ queryKey: queryKeys.session() });
			// Redirect to user page after successful signin
			navigate("/dashboard");
		},
		onError: (err: unknown) => {
			const errorMessage =
				err instanceof Error
					? err.message
					: "Failed to verify OTP. Please check your email and try again.";
			setError(errorMessage);
		},
	});

	const handleOtpSubmit = (data: OtpFormData) => {
		otpMutation.mutate(data.otp);
	};

	const handleBackToEmail = () => {
		setStep("email");
	};

	const webAuthnMutation = useMutation({
		mutationFn: async (email?: string) => {
			// Step 1: Request WebAuthn challenge
			const challengeResponse = await nhost.auth.signInWebauthn({
				email,
			});

			if (!challengeResponse.body) {
				throw new Error("Failed to get WebAuthn challenge");
			}

			// Step 2: Use the browser to authenticate
			const credential = await startAuthentication({
				optionsJSON: challengeResponse.body,
			});

			// Step 3: Verify the credential with Nhost
			const verifyResponse = await nhost.auth.verifySignInWebauthn({
				credential,
				email,
			});

			return verifyResponse;
		},
		onSuccess: () => {
			// Invalidate session query to refresh auth state
			queryClient.invalidateQueries({ queryKey: queryKeys.session() });
			// Redirect to dashboard after successful signin
			navigate("/dashboard");
		},
		onError: (err: unknown) => {
			const errorMessage = getWebAuthnErrorMessage(err);
			setError(errorMessage);
		},
	});

	const handleWebAuthnSignIn = () => {
		webAuthnMutation.mutate(undefined);
	};

	return (
		<div className="container mx-auto p-8 max-w-md animate-fade-in">
			<Card className="bg-card/50 backdrop-blur-md border border-border/50 shadow-2xl">
				<CardHeader className="text-center">
					<CardTitle className="text-2xl">Sign In</CardTitle>
					<CardDescription>
						{step === "email"
							? "We'll send you a secure one-time password to sign in"
							: "Check your email for a 6-digit verification code"}
					</CardDescription>
				</CardHeader>
				<CardContent>
					{step === "email" ? (
						<form
							key={step}
							onSubmit={emailForm.handleSubmit(handleEmailSubmit)}
							className="space-y-4"
						>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="Enter your email"
									{...emailForm.register("email")}
									disabled={emailMutation.isPending}
								/>
								{emailForm.formState.errors.email && (
									<p className="text-sm text-destructive">
										{emailForm.formState.errors.email.message}
									</p>
								)}
							</div>

							{error && <p className="text-sm text-destructive">{error}</p>}

							<Button
								type="submit"
								className="w-full"
								disabled={emailMutation.isPending}
							>
								{emailMutation.isPending
									? "Sending verification code..."
									: "Send verification code"}
							</Button>

							{isWebAuthnAvailable && (
								<>
									<div className="relative">
										<div className="absolute inset-0 flex items-center">
											<span className="w-full border-t" />
										</div>
										<div className="relative flex justify-center text-xs uppercase">
											<span className="bg-background px-2 text-muted-foreground">
												Or
											</span>
										</div>
									</div>

									<Button
										type="button"
										variant="outline"
										className="w-full"
										onClick={handleWebAuthnSignIn}
										disabled={webAuthnMutation.isPending}
									>
										<Fingerprint className="mr-2 h-4 w-4" />
										{webAuthnMutation.isPending
											? "Authenticating..."
											: "Sign in with Passkey"}
									</Button>
								</>
							)}

							<p className="text-sm text-center text-muted-foreground">
								Don't have an account?{" "}
								<Link
									to="/signup"
									className="text-primary hover:text-primary/80 hover:underline transition-colors"
								>
									Sign up here
								</Link>
							</p>
						</form>
					) : (
						<form
							onSubmit={otpForm.handleSubmit(handleOtpSubmit)}
							className="space-y-4"
						>
							<div className="space-y-2">
								<Label htmlFor="otp">Verification Code</Label>
								<Input
									id="otp"
									type="text"
									placeholder="Enter 6-digit code"
									{...otpForm.register("otp")}
									disabled={otpMutation.isPending}
								/>
								{otpForm.formState.errors.otp && (
									<p className="text-sm text-destructive">
										{otpForm.formState.errors.otp.message}
									</p>
								)}
							</div>

							<div className="space-y-2 text-sm text-muted-foreground">
								<p>
									Verification code sent to: <strong>{email}</strong>
								</p>
								<p className="text-xs">
									Don't see the email? Check your spam folder or wait a moment
									for delivery.
								</p>
							</div>

							{error && <p className="text-sm text-destructive">{error}</p>}

							<div className="space-y-2">
								<Button
									type="submit"
									className="w-full"
									disabled={otpMutation.isPending}
								>
									{otpMutation.isPending ? "Verifying..." : "Verify OTP"}
								</Button>

								<Button
									type="button"
									variant="outline"
									className="w-full"
									onClick={handleBackToEmail}
									disabled={otpMutation.isPending}
								>
									Back to Email
								</Button>
							</div>
						</form>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
