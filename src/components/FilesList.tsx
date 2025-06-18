import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";
import {
	useAddDepartmentFileMutation,
	useGetAllFilesQuery,
	useGetDepartmentFilesQuery,
	useGetUserDepartmentsQuery,
	useRemoveDepartmentFileMutation,
} from "@/lib/graphql/__generated__/graphql";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AlertCircle, Download, FileText, Plus, X } from "lucide-react";
import { useState } from "react";

interface FilesListProps {
	refreshTrigger?: number;
}

export function FilesList({ refreshTrigger: _refreshTrigger }: FilesListProps) {
	const { nhost, session } = useAuth();
	const queryClient = useQueryClient();
	const [error, setError] = useState<string | null>(null);

	const { data: filesData, isLoading: filesLoading } = useGetAllFilesQuery(
		{},
		{
			refetchOnWindowFocus: false,
		},
	);

	const { data: departmentFilesData, isLoading: departmentFilesLoading } =
		useGetDepartmentFilesQuery(
			{},
			{
				refetchOnWindowFocus: false,
			},
		);

	const { data: departmentsData, isLoading: departmentsLoading } =
		useGetUserDepartmentsQuery(
			{},
			{
				enabled: !!session?.user?.id,
				refetchOnWindowFocus: false,
			},
		);

	const addDepartmentFileMutation = useAddDepartmentFileMutation();
	const removeDepartmentFileMutation = useRemoveDepartmentFileMutation();

	// Delete file from storage when needed
	const _deleteFileMutation = useMutation({
		mutationFn: async (fileId: string) => {
			await nhost.storage.deleteFile(fileId);
		},
		onError: (err) => {
			setError(
				err instanceof Error
					? err.message
					: "Failed to delete file from storage",
			);
		},
	});

	const handleDownload = async (fileId: string, fileName: string) => {
		try {
			const response = await nhost.storage.getFile(fileId);
			if (response.body) {
				const blob = response.body;
				const downloadUrl = URL.createObjectURL(blob);
				const link = document.createElement("a");
				link.href = downloadUrl;
				link.download = fileName;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				URL.revokeObjectURL(downloadUrl);
			}
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to download file");
		}
	};

	const handleAddToDepartment = async (
		fileId: string,
		departmentId: string,
	) => {
		try {
			setError(null);
			await addDepartmentFileMutation.mutateAsync({
				fileId,
				departmentId,
			});

			queryClient.invalidateQueries({
				queryKey: ["GetDepartmentFiles"],
			});
		} catch (err) {
			setError(
				err instanceof Error
					? err.message
					: "Failed to assign file to department",
			);
		}
	};

	const handleRemoveFromDepartment = async (
		fileId: string,
		departmentId: string,
	) => {
		try {
			setError(null);
			await removeDepartmentFileMutation.mutateAsync({
				fileId,
				departmentId,
			});

			queryClient.invalidateQueries({
				queryKey: ["GetDepartmentFiles"],
			});
		} catch (err) {
			setError(
				err instanceof Error
					? err.message
					: "Failed to remove file from department",
			);
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

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	const getFileIcon = (mimeType: string | null | undefined) => {
		if (!mimeType) {
			return <FileText className="h-6 w-6" />;
		}

		if (mimeType.startsWith("image/")) {
			return <FileText className="h-6 w-6 text-blue-500" />;
		}
		if (mimeType.includes("pdf")) {
			return <FileText className="h-6 w-6 text-red-500" />;
		}
		if (mimeType.includes("word") || mimeType.includes("document")) {
			return <FileText className="h-6 w-6 text-blue-600" />;
		}
		if (mimeType.includes("sheet") || mimeType.includes("excel")) {
			return <FileText className="h-6 w-6 text-green-600" />;
		}
		if (mimeType.includes("presentation") || mimeType.includes("powerpoint")) {
			return <FileText className="h-6 w-6 text-orange-500" />;
		}

		return <FileText className="h-6 w-6" />;
	};

	if (filesLoading || departmentFilesLoading || departmentsLoading) {
		return (
			<Card>
				<CardContent className="pt-6">
					<div className="flex items-center justify-center py-8">
						<div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
						<span className="ml-2">Loading files...</span>
					</div>
				</CardContent>
			</Card>
		);
	}

	const files = filesData?.files || [];
	const departmentFiles = departmentFilesData?.department_files || [];
	const departments = departmentsData?.departments || [];
	const userDepartments = departments.filter((dept) =>
		dept.employees.some((emp) => emp.user.id === session?.user?.id),
	);

	// Create a map of file assignments
	const fileAssignments = new Map<string, string[]>();
	for (const df of departmentFiles) {
		if (!fileAssignments.has(df.file_id)) {
			fileAssignments.set(df.file_id, []);
		}
		fileAssignments.get(df.file_id)?.push(df.department_id);
	}

	return (
		<Card>
			<CardContent className="pt-6">
				{/* Error Display */}
				{error && (
					<div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 mb-4">
						<div className="flex items-center gap-2 text-destructive">
							<AlertCircle className="h-4 w-4" />
							<span className="text-sm font-medium">Error</span>
						</div>
						<p className="text-sm text-destructive/80 mt-1">{error}</p>
					</div>
				)}

				{files.length === 0 ? (
					<div className="text-center py-8 text-muted-foreground">
						<FileText className="mx-auto h-12 w-12 mb-4 opacity-50" />
						<p>No files uploaded yet</p>
						<p className="text-sm">Upload files to share them</p>
					</div>
				) : (
					<div className="space-y-3">
						{files.map((file) => {
							const assignedDepartmentIds = fileAssignments.get(file.id) || [];
							const assignedDepartments = departments.filter((dept) =>
								assignedDepartmentIds.includes(dept.id),
							);
							const isOwned = file.uploadedByUserId === session?.user?.id;
							const availableDepartments = userDepartments.filter(
								(dept) => !assignedDepartmentIds.includes(dept.id),
							);

							return (
								<div
									key={file.id}
									className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
								>
									{/* File Icon */}
									<div className="flex-shrink-0">
										{getFileIcon(file.mimeType)}
									</div>

									{/* File Info */}
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-2 mb-1">
											<h4 className="font-medium truncate">{file.name}</h4>
											<span className="text-xs text-muted-foreground flex-shrink-0">
												{formatFileSize(file.size || 0)}
											</span>
										</div>

										{/* Department Bubbles and Owned Badge */}
										<div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
											<div className="flex items-center gap-2 flex-wrap">
												{isOwned && (
													<Badge variant="default" className="text-xs">
														Owned
													</Badge>
												)}
												{assignedDepartments.map((dept) => (
													<div
														key={dept.id}
														className="flex items-center gap-1"
													>
														<Badge variant="secondary" className="text-xs">
															{dept.name}
														</Badge>
														{(isOwned ||
															dept.employees.some(
																(emp) =>
																	emp.user.id === session?.user?.id &&
																	emp.role === "manager",
															)) && (
															<Button
																size="sm"
																variant="ghost"
																onClick={() =>
																	handleRemoveFromDepartment(file.id, dept.id)
																}
																className="h-4 w-4 p-0 hover:bg-destructive/10 hover:text-destructive"
																title="Remove from department"
															>
																<X className="h-3 w-3" />
															</Button>
														)}
													</div>
												))}
											</div>
											{/* Add to Department buttons */}
											<div className="flex items-center gap-1 flex-wrap">
												{availableDepartments.map((dept) => (
													<Button
														key={dept.id}
														size="sm"
														variant="ghost"
														onClick={() =>
															handleAddToDepartment(file.id, dept.id)
														}
														className="h-6 text-xs border-dashed border"
														title={`Add to ${dept.name}`}
													>
														<Plus className="h-3 w-3 mr-1" />
														{dept.name}
													</Button>
												))}
											</div>
										</div>

										<p className="text-xs text-muted-foreground">
											Uploaded {formatDate(file.createdAt)}
										</p>
									</div>

									{/* Actions */}
									<div className="flex items-center gap-1 flex-shrink-0">
										<Button
											size="sm"
											variant="ghost"
											onClick={() =>
												handleDownload(file.id, file.name || `file-${file.id}`)
											}
											title="Download file"
										>
											<Download className="h-4 w-4" />
										</Button>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</CardContent>
		</Card>
	);
}
