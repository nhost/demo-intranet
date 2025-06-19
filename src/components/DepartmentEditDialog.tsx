import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import {
	useDepartmentDetails,
	useUpdateDepartment,
} from "@/lib/graphql/query-hooks";
import { useQueryClient } from "@tanstack/react-query";
import { AlertCircle, Loader2, Save, X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

interface DepartmentEditDialogProps {
	departmentId: string;
	open: boolean;
	onClose: () => void;
}

interface FormData {
	name: string;
	description: string;
	budget: string;
}

interface FormErrors {
	name?: string;
	description?: string;
	budget?: string;
	submit?: string;
}

interface UpdateDepartmentData {
	departmentId: string;
	name: string;
	description: string | null;
	budget: number | null;
}

interface DepartmentClaims {
	memberDepartments: string[];
	managerDepartments: string[];
}

function parseDepartmentClaims(
	claims: Record<string, string>,
): DepartmentClaims {
	const memberIds = claims["x-hasura-departments"];
	const managerIds = claims["x-hasura-department-manager"];

	// Parse PostgreSQL array format: {item1,item2,item3}
	// The format is like: "{\"id1\",\"id2\",\"id3\"}"
	const parsePostgresArray = (arrayString: string): string[] => {
		if (!arrayString) {
			return [];
		}

		// Remove outer curly braces and split by comma
		const cleaned = arrayString.replace(/^{|}$/g, "");
		if (!cleaned) {
			return [];
		}

		return cleaned
			.split(",")
			.map((item) => item.replace(/"/g, "").trim())
			.filter(Boolean);
	};

	const memberDepartments = parsePostgresArray(memberIds || "");
	const managerDepartments = parsePostgresArray(managerIds || "");

	return { memberDepartments, managerDepartments };
}

function validateForm(data: FormData): FormErrors {
	const errors: FormErrors = {};

	if (!data.name.trim()) {
		errors.name = "Department name is required";
	} else if (data.name.trim().length < 2) {
		errors.name = "Department name must be at least 2 characters";
	} else if (data.name.trim().length > 100) {
		errors.name = "Department name must be less than 100 characters";
	}

	if (data.description.trim().length > 500) {
		errors.description = "Description must be less than 500 characters";
	}

	if (data.budget.trim()) {
		const budgetValue = Number(data.budget);
		if (Number.isNaN(budgetValue)) {
			errors.budget = "Budget must be a valid number";
		} else if (budgetValue < 0) {
			errors.budget = "Budget cannot be negative";
		} else if (budgetValue > 999999999) {
			errors.budget = "Budget is too large";
		}
	}

	return errors;
}

export function DepartmentEditDialog({
	departmentId,
	open,
	onClose,
}: DepartmentEditDialogProps) {
	const { session } = useAuth();
	const queryClient = useQueryClient();
	const { data: department, isLoading: isLoadingDepartment } =
		useDepartmentDetails(departmentId);
	const updateDepartment = useUpdateDepartment();

	// Parse department claims for permission checks
	let claims = {};
	if (session?.accessToken) {
		const decodedToken = JSON.parse(atob(session.accessToken.split(".")[1]));
		claims = decodedToken["https://hasura.io/jwt/claims"] || {};
	}
	const departmentClaims = parseDepartmentClaims(claims);

	// Check if user can manage this department
	const canManageDepartment =
		departmentClaims.managerDepartments.includes(departmentId);

	const [formData, setFormData] = useState<FormData>({
		name: "",
		description: "",
		budget: "",
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [hasChanges, setHasChanges] = useState(false);

	// Load department data into form when available
	useEffect(() => {
		if (department?.departments_by_pk) {
			const dept = department.departments_by_pk;
			const newFormData = {
				name: dept.name,
				description: dept.description || "",
				budget: dept.budget ? String(dept.budget) : "",
			};
			setFormData(newFormData);
			setHasChanges(false);
		}
	}, [department]);

	// Reset form when dialog closes
	useEffect(() => {
		if (!open) {
			setErrors({});
			setHasChanges(false);
		}
	}, [open]);

	const handleInputChange = (field: keyof FormData, value: string) => {
		const newFormData = { ...formData, [field]: value };
		setFormData(newFormData);

		// Check if there are changes compared to original data
		if (department?.departments_by_pk) {
			const original = department.departments_by_pk;
			const hasFormChanges =
				newFormData.name !== original.name ||
				newFormData.description !== (original.description || "") ||
				newFormData.budget !== (original.budget ? String(original.budget) : "");
			setHasChanges(hasFormChanges);
		}

		// Clear field-specific error when user starts typing
		if (errors[field]) {
			setErrors({ ...errors, [field]: undefined });
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validate form
		const formErrors = validateForm(formData);
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}

		try {
			setErrors({});

			// Prepare update data
			const updateData: UpdateDepartmentData = {
				departmentId,
				name: formData.name.trim(),
				description: formData.description.trim() || null,
				budget: formData.budget.trim() ? Number(formData.budget.trim()) : null,
			};

			await updateDepartment.mutateAsync(updateData);

			// Invalidate and refetch queries
			await queryClient.invalidateQueries({ queryKey: ["departments"] });
			await queryClient.invalidateQueries({
				queryKey: ["department", departmentId],
			});

			onClose();
		} catch (_error) {
			setErrors({
				submit: "Failed to update department. Please try again.",
			});
		}
	};

	const handleCancel = () => {
		if (hasChanges) {
			if (
				window.confirm(
					"You have unsaved changes. Are you sure you want to close without saving?",
				)
			) {
				onClose();
			}
		} else {
			onClose();
		}
	};

	if (isLoadingDepartment) {
		return (
			<Dialog open={open} onOpenChange={onClose}>
				<DialogContent className="max-w-md">
					<div className="flex items-center justify-center py-8">
						<Loader2 className="h-8 w-8 animate-spin" />
					</div>
				</DialogContent>
			</Dialog>
		);
	}

	if (!department?.departments_by_pk) {
		return (
			<Dialog open={open} onOpenChange={onClose}>
				<DialogContent className="max-w-md">
					<DialogHeader>
						<DialogTitle>Error</DialogTitle>
						<DialogDescription>
							Department not found or you don't have permission to edit it.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button onClick={onClose}>Close</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	}

	// Check if user has permission to edit this department
	if (!canManageDepartment) {
		return (
			<Dialog open={open} onOpenChange={onClose}>
				<DialogContent className="max-w-md">
					<DialogHeader>
						<DialogTitle>Access Denied</DialogTitle>
						<DialogDescription>
							You don't have permission to edit this department. Only department
							managers can modify department details.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button onClick={onClose}>Close</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Dialog open={open} onOpenChange={handleCancel}>
			<DialogContent className="max-w-2xl">
				<DialogHeader>
					<DialogTitle>Edit Department</DialogTitle>
					<DialogDescription>
						Update the department information. Only managers can edit department
						details.
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit}>
					<div className="space-y-6 py-4">
						{/* General Error */}
						{errors.submit && (
							<Card className="border-destructive bg-destructive/5">
								<CardContent className="pt-4">
									<div className="flex items-center gap-2 text-destructive">
										<AlertCircle className="h-4 w-4" />
										<span className="text-sm">{errors.submit}</span>
									</div>
								</CardContent>
							</Card>
						)}

						{/* Department Name */}
						<div className="space-y-2">
							<Label htmlFor="name" className="text-sm font-medium">
								Department Name *
							</Label>
							<Input
								id="name"
								type="text"
								value={formData.name}
								onChange={(e) => handleInputChange("name", e.target.value)}
								placeholder="Enter department name"
								className={errors.name ? "border-destructive" : ""}
							/>
							{errors.name && (
								<p className="text-sm text-destructive">{errors.name}</p>
							)}
						</div>

						{/* Description */}
						<div className="space-y-2">
							<Label htmlFor="description" className="text-sm font-medium">
								Description
							</Label>
							<textarea
								id="description"
								value={formData.description}
								onChange={(e) =>
									handleInputChange("description", e.target.value)
								}
								placeholder="Enter department description (optional)"
								className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
									errors.description ? "border-destructive" : ""
								}`}
								rows={3}
							/>
							<div className="flex justify-between items-center">
								{errors.description && (
									<p className="text-sm text-destructive">
										{errors.description}
									</p>
								)}
								<p className="text-xs text-muted-foreground ml-auto">
									{formData.description.length}/500 characters
								</p>
							</div>
						</div>

						{/* Budget */}
						<div className="space-y-2">
							<Label htmlFor="budget" className="text-sm font-medium">
								Annual Budget
							</Label>
							<div className="relative">
								<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
									$
								</span>
								<Input
									id="budget"
									type="text"
									value={formData.budget}
									onChange={(e) => {
										// Only allow numbers and decimal points
										const value = e.target.value.replace(/[^0-9.]/g, "");
										// Prevent multiple decimal points
										const decimalCount = (value.match(/\./g) || []).length;
										if (decimalCount <= 1) {
											handleInputChange("budget", value);
										}
									}}
									placeholder="0"
									className={`pl-8 ${errors.budget ? "border-destructive" : ""}`}
								/>
							</div>
							{errors.budget && (
								<p className="text-sm text-destructive">{errors.budget}</p>
							)}
							<p className="text-xs text-muted-foreground">
								Leave empty if no budget is set
							</p>
						</div>
					</div>

					<DialogFooter className="gap-2">
						<Button type="button" variant="outline" onClick={handleCancel}>
							<X className="h-4 w-4 mr-2" />
							Cancel
						</Button>
						<Button
							type="submit"
							disabled={!hasChanges || updateDepartment.isPending}
						>
							{updateDepartment.isPending ? (
								<Loader2 className="h-4 w-4 mr-2 animate-spin" />
							) : (
								<Save className="h-4 w-4 mr-2" />
							)}
							Save Changes
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
