import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AlertCircle, Upload, X } from "lucide-react";
import type React from "react";
import { useRef, useState } from "react";

interface FileUploadProps {
	onUploadSuccess?: (fileId: string, fileName: string) => void;
}

export function FileUpload({ onUploadSuccess }: FileUploadProps) {
	const { nhost } = useAuth();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [isUploading, setIsUploading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const queryClient = useQueryClient();

	// Upload file to Nhost storage without department assignment
	const uploadMutation = useMutation({
		mutationFn: async (file: File) => {
			setError(null);

			// Upload to Nhost storage using uploadFiles API
			const response = await nhost.storage.uploadFiles({
				"file[]": [file],
				"bucket-id": "default",
				"metadata[]": [
					{
						name: file.name,
						metadata: {
							originalName: file.name,
						},
					},
				],
			});

			const fileData = response.body?.processedFiles?.[0];
			if (!fileData || !fileData.id) {
				throw new Error("No processed files in response or missing file ID");
			}

			return fileData;
		},
		onSuccess: (fileData) => {
			try {
				// Clear form
				setSelectedFile(null);
				if (fileInputRef.current) {
					fileInputRef.current.value = "";
				}

				// Invalidate relevant queries
				queryClient.invalidateQueries({
					queryKey: ["GetUserFiles"],
				});
				queryClient.invalidateQueries({
					queryKey: ["GetAllFiles"],
				});

				setError(null);
				if (fileData.id) {
					onUploadSuccess?.(
						fileData.id,
						fileData.name || selectedFile?.name || "Unknown file",
					);
				}
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "Failed to process upload",
				);
			}
		},
		onError: (err) => {
			setError(err instanceof Error ? err.message : "Upload failed");
		},
		onSettled: () => {
			setIsUploading(false);
		},
	});

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) {
			setSelectedFile(null);
			return;
		}

		// Clear previous errors
		setError(null);

		// Validate file size (max 50MB)
		if (file.size > 50 * 1024 * 1024) {
			setError("File size must be less than 50MB");
			setSelectedFile(null);
			return;
		}

		setSelectedFile(file);
	};

	const handleUpload = () => {
		if (!selectedFile) {
			setError("Please select a file to upload");
			return;
		}

		setIsUploading(true);
		uploadMutation.mutate(selectedFile);
	};

	const handleCancel = () => {
		setSelectedFile(null);
		setError(null);
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const formatFileSize = (bytes: number) => {
		if (bytes === 0) {
			return "0 Bytes";
		}
		const k = 1024;
		const sizes = ["Bytes", "KB", "MB", "GB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return `${Number.parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
	};

	return (
		<div className="space-y-4 p-4 border border-border rounded-lg bg-card">
			<div className="flex items-center gap-2">
				<Upload className="h-5 w-5 text-primary" />
				<h3 className="text-lg font-semibold">Upload File</h3>
			</div>

			{/* File Selection */}
			<div className="space-y-2">
				<Label htmlFor="file-upload">Select File</Label>
				<Input
					id="file-upload"
					ref={fileInputRef}
					type="file"
					onChange={handleFileSelect}
					disabled={isUploading}
					className="cursor-pointer"
				/>
			</div>

			{/* Selected File Preview */}
			{selectedFile && (
				<div className="bg-muted p-3 rounded-lg">
					<div className="flex items-center justify-between">
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium truncate">
								{selectedFile.name}
							</p>
							<p className="text-xs text-muted-foreground">
								{formatFileSize(selectedFile.size)} •{" "}
								{selectedFile.type || "Unknown type"}
							</p>
						</div>
						<Button
							variant="ghost"
							size="sm"
							onClick={handleCancel}
							disabled={isUploading}
							className="h-8 w-8 p-0"
						>
							<X className="h-4 w-4" />
						</Button>
					</div>
				</div>
			)}

			{/* Upload Button */}
			<div className="flex gap-2">
				<Button
					onClick={handleUpload}
					disabled={!selectedFile || isUploading}
					className="flex-1"
				>
					{isUploading ? (
						<>
							<div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
							Uploading...
						</>
					) : (
						<>
							<Upload className="mr-2 h-4 w-4" />
							Upload File
						</>
					)}
				</Button>
				{selectedFile && (
					<Button
						variant="outline"
						onClick={handleCancel}
						disabled={isUploading}
					>
						Cancel
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
