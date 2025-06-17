import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatusMessage } from "@/components/ui/status-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Edit, X } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import type { DefaultValues, FieldValues, Path } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { z } from "zod";

interface EditableFieldProps<T extends FieldValues> {
	label: string;
	icon: ReactNode;
	currentValue: string;
	placeholder: string;
	description: string;
	editDescription: string;
	schema: z.ZodSchema<T>;
	fieldName: Path<T>;
	inputType?: "text" | "email";
	onSubmit: (data: T) => void;
	isLoading: boolean;
	error?: string | null;
	successMessage?: string | null;
	isDisabled?: (
		value: string,
		currentValue: string,
		isValid: boolean,
	) => boolean;
	ariaLabel?: string;
}

export function EditableField<T extends FieldValues>({
	label,
	icon,
	currentValue,
	placeholder,
	description,
	editDescription,
	schema,
	fieldName,
	inputType = "text",
	onSubmit,
	isLoading,
	error,
	successMessage,
	isDisabled,
	ariaLabel,
}: EditableFieldProps<T>) {
	const [isEditing, setIsEditing] = useState(false);

	const form = useForm<T>({
		resolver: zodResolver(schema),
		defaultValues: {
			[fieldName]: currentValue,
		} as DefaultValues<T>,
	});

	const handleSubmit = (data: T) => {
		onSubmit(data);
	};

	const handleCancel = () => {
		form.reset({ [fieldName]: currentValue } as DefaultValues<T>);
		setIsEditing(false);
	};

	const handleEdit = () => {
		setIsEditing(true);
		// Focus the input when entering edit mode
		setTimeout(() => {
			const input = document.getElementById(`${String(fieldName)}-input`);
			input?.focus();
		}, 0);
	};

	// Show success message if provided
	if (successMessage) {
		return (
			<div className="space-y-4">
				<Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
					{icon}
					{label}
				</Label>
				<StatusMessage
					variant="success"
					title="Success"
					description={successMessage}
				/>
			</div>
		);
	}

	// Non-editing view
	if (!isEditing) {
		return (
			<div className="group relative">
				<Label className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-3">
					{icon}
					{label}
				</Label>
				<div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg border border-primary/20 hover:border-primary/30 transition-all duration-200 relative">
					<div className="flex items-center justify-between">
						<div className="flex-1">
							<p className="text-lg font-semibold text-foreground">
								{currentValue || "Not set"}
							</p>
							<p className="text-sm text-muted-foreground mt-1">
								{description}
							</p>
						</div>
						<Button
							variant="ghost"
							size="sm"
							onClick={handleEdit}
							className="h-9 w-9 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/10"
							aria-label={ariaLabel || `Edit ${label.toLowerCase()}`}
						>
							<Edit className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		);
	}

	// Editing view
	return (
		<div className="space-y-4">
			<Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
				{icon}
				{label}
			</Label>
			<div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg border border-primary/20">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						className="space-y-4"
					>
						<FormField
							control={form.control}
							name={fieldName}
							render={({ field }) => (
								<FormItem>
									<div className="flex gap-2">
										<FormControl>
											<Input
												id={`${String(fieldName)}-input`}
												type={inputType}
												placeholder={placeholder}
												{...field}
												disabled={isLoading}
												className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary/20"
											/>
										</FormControl>
										<div className="flex gap-1">
											<Button
												type="submit"
												size="sm"
												disabled={
													isLoading ||
													!form.formState.isValid ||
													(isDisabled
														? isDisabled(
																field.value,
																currentValue,
																form.formState.isValid,
															)
														: field.value === currentValue)
												}
												className="h-10 w-10 p-0 bg-primary hover:bg-primary/90"
												aria-label={`Save ${label.toLowerCase()}`}
											>
												{isLoading ? (
													<div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
												) : (
													<Check className="h-4 w-4" />
												)}
											</Button>
											<Button
												type="button"
												variant="ghost"
												size="sm"
												onClick={handleCancel}
												disabled={isLoading}
												className="h-10 w-10 p-0 hover:bg-destructive/10 hover:text-destructive"
												aria-label="Cancel editing"
											>
												<X className="h-4 w-4" />
											</Button>
										</div>
									</div>
									<FormDescription className="text-xs text-muted-foreground">
										{editDescription}
									</FormDescription>
									<FormMessage />
									{error && (
										<StatusMessage
											variant="error"
											title="Update Failed"
											description={error}
											className="mt-2"
										/>
									)}
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</div>
		</div>
	);
}
