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
import {
	useDeleteSecurityKeyMutation,
	useGetUserSecurityKeysQuery,
} from "@/lib/graphql/__generated__/graphql";
import { queryKeys } from "@/lib/react-query";
import {
	getWebAuthnErrorMessage,
	isWebAuthnSupported,
} from "@/lib/webauthn-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { startRegistration } from "@simplewebauthn/browser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
	AlertCircle,
	Fingerprint,
	Key,
	Plus,
	Shield,
	Trash2,
	Usb,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SecurityKeyManagementProps {
	userId: string;
}

const addSecurityKeySchema = z.object({
	nickname: z
		.string()
		.min(1, "Nickname is required")
		.max(50, "Nickname must be less than 50 characters"),
});

type AddSecurityKeyFormData = z.infer<typeof addSecurityKeySchema>;

export function SecurityKeyManagement({ userId }: SecurityKeyManagementProps) {
	const { nhost } = useAuth();
	const queryClient = useQueryClient();
	const [isWebAuthnAvailable, setIsWebAuthnAvailable] = useState(false);
	const [error, setError] = useState("");
	const [showAddForm, setShowAddForm] = useState(false);

	// Check WebAuthn availability
	useEffect(() => {
		setIsWebAuthnAvailable(isWebAuthnSupported());
	}, []);

	const addKeyForm = useForm<AddSecurityKeyFormData>({
		resolver: zodResolver(addSecurityKeySchema),
	});

	// Query for user's security keys
	const {
		data: securityKeysData,
		isLoading: keysLoading,
		error: keysError,
		refetch: refetchKeys,
	} = useGetUserSecurityKeysQuery(
		{ userId },
		{
			enabled: !!userId,
		},
	);

	// Delete security key mutation
	const deleteKeyMutation = useDeleteSecurityKeyMutation({
		onSuccess: () => {
			refetchKeys();
			// Also invalidate the user query to update the security keys count
			queryClient.invalidateQueries({ queryKey: queryKeys.session() });
		},
		onError: (err: unknown) => {
			const errorMessage =
				err instanceof Error ? err.message : "Failed to delete security key";
			setError(errorMessage);
		},
	});

	// Add security key mutation
	const addKeyMutation = useMutation({
		mutationFn: async (nickname: string) => {
			// Step 1: Request WebAuthn challenge for adding security key
			const challengeResponse = await nhost.auth.addSecurityKey();

			if (!challengeResponse.body) {
				throw new Error("Failed to get WebAuthn challenge for security key");
			}

			// Step 2: Use the browser to create credentials
			const credential = await startRegistration({
				optionsJSON: challengeResponse.body,
			});

			// Step 3: Verify the credential with Nhost
			const verifyResponse = await nhost.auth.verifyAddSecurityKey({
				credential,
				nickname,
			});

			return verifyResponse;
		},
		onSuccess: () => {
			refetchKeys();
			setShowAddForm(false);
			addKeyForm.reset();
			setError("");
			// Also invalidate the user query to update the security keys count
			queryClient.invalidateQueries({ queryKey: queryKeys.session() });
		},
		onError: (err: unknown) => {
			const errorMessage = getWebAuthnErrorMessage(err);
			setError(errorMessage);
		},
	});

	const handleAddSecurityKey = (data: AddSecurityKeyFormData) => {
		setError("");
		addKeyMutation.mutate(data.nickname);
	};

	const handleDeleteKey = (keyId: string, nickname: string) => {
		if (
			window.confirm(
				`Are you sure you want to remove the security key "${nickname}"? This action cannot be undone.`,
			)
		) {
			deleteKeyMutation.mutate({ keyId });
		}
	};

	const securityKeys = securityKeysData?.authUserSecurityKeys || [];

	const getKeyIcon = (transports: string) => {
		if (transports.includes("usb")) {
			return <Usb className="h-5 w-5" />;
		}
		if (transports.includes("internal")) {
			return <Fingerprint className="h-5 w-5" />;
		}
		return <Key className="h-5 w-5" />;
	};

	const getKeyTypeDescription = (transports: string) => {
		if (transports.includes("internal")) {
			return "Built-in authenticator (Touch ID, Face ID, Windows Hello)";
		}
		if (transports.includes("usb")) {
			return "USB security key";
		}
		if (transports.includes("nfc")) {
			return "NFC security key";
		}
		if (transports.includes("ble")) {
			return "Bluetooth security key";
		}
		return "Security key";
	};

	if (!isWebAuthnAvailable) {
		return (
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Shield className="h-5 w-5" />
						Security Keys
					</CardTitle>
					<CardDescription>
						Manage your WebAuthn security keys and passkeys
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
						<AlertCircle className="h-5 w-5 text-muted-foreground" />
						<div>
							<p className="font-medium">WebAuthn Not Supported</p>
							<p className="text-sm text-muted-foreground">
								Your browser doesn't support WebAuthn security keys. Please use
								a modern browser to manage security keys.
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		);
	}

	if (keysLoading) {
		return (
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Shield className="h-5 w-5" />
						Security Keys
					</CardTitle>
					<CardDescription>
						Manage your WebAuthn security keys and passkeys
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center justify-center p-8">
						<div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
						<span className="ml-2">Loading security keys...</span>
					</div>
				</CardContent>
			</Card>
		);
	}

	if (keysError) {
		return (
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Shield className="h-5 w-5" />
						Security Keys
					</CardTitle>
					<CardDescription>
						Manage your WebAuthn security keys and passkeys
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-lg">
						<AlertCircle className="h-5 w-5 text-destructive" />
						<div>
							<p className="font-medium text-destructive">
								Failed to load security keys
							</p>
							<p className="text-sm text-muted-foreground">
								{keysError instanceof Error
									? keysError.message
									: "An error occurred"}
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Shield className="h-5 w-5" />
					Security Keys
				</CardTitle>
				<CardDescription>
					Manage your WebAuthn security keys and passkeys for secure
					authentication
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Security Keys List */}
				{securityKeys.length > 0 ? (
					<div className="space-y-3">
						{securityKeys.map((key) => (
							<div
								key={key.id}
								className="flex items-center justify-between p-4 border rounded-lg bg-card/50"
							>
								<div className="flex items-center gap-3">
									<div className="p-2 bg-primary/10 rounded-lg">
										{getKeyIcon(key.transports)}
									</div>
									<div>
										<p className="font-medium">
											{key.nickname || "Unnamed Key"}
										</p>
										<p className="text-sm text-muted-foreground">
											{getKeyTypeDescription(key.transports)}
										</p>
										<p className="text-xs text-muted-foreground">
											ID: {key.credentialId.slice(0, 16)}...
										</p>
									</div>
								</div>
								<Button
									onClick={() => handleDeleteKey(key.id, key.nickname || "key")}
									variant="outline"
									size="sm"
									disabled={deleteKeyMutation.isPending}
									className="text-destructive hover:text-destructive"
								>
									<Trash2 className="h-4 w-4" />
								</Button>
							</div>
						))}
					</div>
				) : (
					<div className="text-center py-8">
						<Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
						<p className="text-lg font-medium">No security keys registered</p>
						<p className="text-sm text-muted-foreground">
							Add a security key or passkey for enhanced account security
						</p>
					</div>
				)}

				{/* Add New Security Key */}
				{showAddForm ? (
					<form
						onSubmit={addKeyForm.handleSubmit(handleAddSecurityKey)}
						className="space-y-4 p-4 border rounded-lg bg-muted/30"
					>
						<div className="space-y-2">
							<Label htmlFor="nickname">Security Key Nickname</Label>
							<Input
								id="nickname"
								placeholder="e.g., My YubiKey, Touch ID, etc."
								{...addKeyForm.register("nickname")}
								disabled={addKeyMutation.isPending}
							/>
							{addKeyForm.formState.errors.nickname && (
								<p className="text-sm text-destructive">
									{addKeyForm.formState.errors.nickname.message}
								</p>
							)}
						</div>

						{error && (
							<div className="flex items-center gap-2 p-3 bg-destructive/10 rounded-lg">
								<AlertCircle className="h-4 w-4 text-destructive" />
								<p className="text-sm text-destructive">{error}</p>
							</div>
						)}

						<div className="flex gap-2">
							<Button
								type="submit"
								disabled={addKeyMutation.isPending}
								className="flex-1"
							>
								<Fingerprint className="h-4 w-4 mr-2" />
								{addKeyMutation.isPending ? "Adding Key..." : "Add Key"}
							</Button>
							<Button
								type="button"
								variant="outline"
								onClick={() => {
									setShowAddForm(false);
									addKeyForm.reset();
									setError("");
								}}
								disabled={addKeyMutation.isPending}
							>
								Cancel
							</Button>
						</div>

						<p className="text-xs text-muted-foreground">
							You'll be prompted to use your authenticator (Touch ID, security
							key, etc.) to register the new security key.
						</p>
					</form>
				) : (
					<Button
						onClick={() => setShowAddForm(true)}
						variant="outline"
						className="w-full"
						disabled={addKeyMutation.isPending}
					>
						<Plus className="h-4 w-4 mr-2" />
						Add Security Key
					</Button>
				)}

				{/* Security Key Information */}
				<div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
					<h4 className="font-medium mb-2 flex items-center gap-2">
						<Shield className="h-4 w-4" />
						About Security Keys
					</h4>
					<ul className="text-sm text-muted-foreground space-y-1">
						<li>• Passkeys enable passwordless sign-in with biometrics</li>
						<li>• Keys are tied to this device and cannot be transferred</li>
						<li>• You can have multiple security keys for backup access</li>
					</ul>
				</div>
			</CardContent>
		</Card>
	);
}
