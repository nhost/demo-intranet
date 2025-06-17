import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { useUpdateUserAvatarUrlMutation } from "@/lib/graphql/__generated__/graphql";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AlertCircle, Camera, X } from "lucide-react";
import type React from "react";
import { useRef, useState } from "react";

interface ProfilePictureUploadProps {
	currentAvatarUrl?: string;
	userId: string;
}

export function ProfilePictureUpload({
	currentAvatarUrl,
	userId,
}: ProfilePictureUploadProps) {
	const { nhost } = useAuth();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [isUploading, setIsUploading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const queryClient = useQueryClient();

	const updateAvatarMutation = useUpdateUserAvatarUrlMutation();

	// Upload file to Nhost storage
	const uploadMutation = useMutation({
		mutationFn: async (file: File) => {
			setError(null);

			// Upload to Nhost storage using uploadFiles API
			const response = await nhost.storage.uploadFiles({
				"file[]": [file],
				"bucket-id": "profile_pics",
				"metadata[]": [
					{
						name: `avatar-${userId}-${Date.now()}.${file.name.split(".").pop()}`,
						metadata: {
							userId,
							type: "avatar",
							originalName: file.name,
						},
					},
				],
			});

			const fileData = response.body?.processedFiles?.[0];
			if (!fileData) {
				throw new Error("No processed files in response");
			}

			return fileData;
		},
		onSuccess: async (fileData) => {
			try {
				// Update user's avatarUrl with the file URL
				const avatarUrl = `${nhost.storage.baseURL}/files/${fileData.id}`;

				await updateAvatarMutation.mutateAsync({
					userId,
					avatarUrl,
				});

				// Clear file input and invalidate queries
				if (fileInputRef.current) {
					fileInputRef.current.value = "";
				}
				queryClient.invalidateQueries({
					queryKey: ["GetCurrentUser", { userId }],
				});
				setError(null);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "Failed to update avatar URL",
				);
			}
		},
		onError: (err) => {
			setError(err instanceof Error ? err.message : "Upload failed");
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}
		},
		onSettled: () => {
			setIsUploading(false);
		},
	});

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) {
			return;
		}

		// Clear previous errors
		setError(null);

		// Validate file type
		if (!file.type.startsWith("image/")) {
			setError("Please select an image file");
			return;
		}

		// Validate file size (max 5MB)
		if (file.size > 5 * 1024 * 1024) {
			setError("File size must be less than 5MB");
			return;
		}

		// Auto-upload the file
		setIsUploading(true);
		uploadMutation.mutate(file);
	};

	const handleRemoveAvatar = async () => {
		try {
			setError(null);
			await updateAvatarMutation.mutateAsync({
				userId,
				avatarUrl: "",
			});

			queryClient.invalidateQueries({
				queryKey: ["GetCurrentUser", { userId }],
			});
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to remove avatar");
		}
	};

	return (
		<div className="space-y-4">
			{/* Hidden file input */}
			<input
				ref={fileInputRef}
				type="file"
				accept="image/*"
				onChange={handleFileSelect}
				className="hidden"
			/>

			{/* Clickable Avatar */}
			<div className="relative group">
				<button
					type="button"
					className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					onClick={() => fileInputRef.current?.click()}
					aria-label="Click to upload profile picture"
					disabled={isUploading}
				>
					{currentAvatarUrl ? (
						<img
							src={currentAvatarUrl}
							alt="Current avatar"
							className="h-full w-full object-cover"
						/>
					) : (
						<Camera className="h-8 w-8 text-primary-foreground" />
					)}
					{/* Hover overlay */}
					<div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
						{isUploading ? (
							<div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
						) : (
							<Camera className="h-6 w-6 text-white" />
						)}
					</div>
				</button>

				{/* Remove avatar button */}
				{currentAvatarUrl && (
					<Button
						onClick={handleRemoveAvatar}
						variant="destructive"
						size="sm"
						className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
						disabled={updateAvatarMutation.isPending || isUploading}
					>
						<X className="h-3 w-3" />
					</Button>
				)}
			</div>

			{/* Error Display */}
			{error && (
				<div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
					<div className="flex items-center gap-2 text-destructive">
						<AlertCircle className="h-4 w-4" />
						<span className="text-sm font-medium">Upload Error</span>
					</div>
					<p className="text-sm text-destructive/80 mt-1">{error}</p>
				</div>
			)}
		</div>
	);
}
