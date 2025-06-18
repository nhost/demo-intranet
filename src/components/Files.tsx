import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AlertCircle, Upload } from "lucide-react";
import type React from "react";
import { useCallback, useRef, useState } from "react";
import { FilesList } from "./FilesList.tsx";

export function Files() {
	const { session, nhost } = useAuth();
	const [refreshTrigger, setRefreshTrigger] = useState(0);
	const [isDragOver, setIsDragOver] = useState(false);
	const [isUploading, setIsUploading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const queryClient = useQueryClient();

	const uploadMutation = useMutation({
		mutationFn: async (file: File) => {
			setError(null);

			// Upload to Nhost storage
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
		onSuccess: () => {
			setRefreshTrigger((prev) => prev + 1);
			queryClient.invalidateQueries({
				queryKey: ["GetUserFiles"],
			});
			queryClient.invalidateQueries({
				queryKey: ["GetAllFiles"],
			});
			setError(null);
		},
		onError: (err) => {
			setError(err instanceof Error ? err.message : "Upload failed");
		},
		onSettled: () => {
			setIsUploading(false);
		},
	});

	const handleFileUpload = useCallback(
		(file: File) => {
			// Validate file size (max 50MB)
			if (file.size > 50 * 1024 * 1024) {
				setError("File size must be less than 50MB");
				return;
			}

			setIsUploading(true);
			uploadMutation.mutate(file);
		},
		[uploadMutation],
	);

	const handleDragOver = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(true);
	}, []);

	const handleDragLeave = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);
	}, []);

	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			setIsDragOver(false);

			const files = Array.from(e.dataTransfer.files);
			if (files.length > 0) {
				handleFileUpload(files[0]);
			}
		},
		[handleFileUpload],
	);

	const handleFileSelect = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0];
			if (file) {
				handleFileUpload(file);
			}
			// Reset input value to allow selecting the same file again
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}
		},
		[handleFileUpload],
	);

	const handleUploadClick = useCallback(() => {
		fileInputRef.current?.click();
	}, []);

	if (!session?.user?.id) {
		return (
			<div className="container mx-auto py-8">
				<Card>
					<CardHeader>
						<CardTitle>Files</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-center py-8 text-muted-foreground">
							<p>Please sign in to access files.</p>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<div className="container mx-auto py-8 space-y-6">
			<h1 className="text-3xl font-bold">Files</h1>

			{/* Upload Box */}
			<div className="relative">
				<button
					type="button"
					className={`
						border-2 border-dashed rounded-lg p-6 transition-colors cursor-pointer w-full
						${
							isDragOver
								? "border-primary bg-primary/20 border-solid"
								: "border-muted-foreground/30 hover:border-primary hover:bg-primary/10"
						}
						${isUploading ? "opacity-50 pointer-events-none" : ""}
					`}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
					onClick={handleUploadClick}
					disabled={isUploading}
					aria-label="Upload files"
				>
					<div className="flex flex-col items-center gap-2 text-center">
						{isUploading ? (
							<>
								<div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
								<p className="text-sm text-muted-foreground">Uploading...</p>
							</>
						) : (
							<>
								<Upload className="h-8 w-8 text-muted-foreground" />
								<div>
									<p className="text-sm font-medium">Drop files here</p>
									<p className="text-xs text-muted-foreground">
										or click to browse (max 50MB)
									</p>
								</div>
							</>
						)}
					</div>
				</button>

				<input
					ref={fileInputRef}
					type="file"
					onChange={handleFileSelect}
					className="hidden"
					disabled={isUploading}
				/>
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

			{/* Files List */}
			<FilesList key={refreshTrigger} refreshTrigger={refreshTrigger} />
		</div>
	);
}
