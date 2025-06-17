import { EditableField } from "@/components/ui/editable-field";
import { useAuth } from "@/lib/auth-context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const emailSchema = z.object({
	email: z
		.string()
		.min(1, "Email is required")
		.email("Please enter a valid email address")
		.trim(),
});

type EmailFormData = z.infer<typeof emailSchema>;

interface EmailEditFormProps {
	currentEmail: string;
}

export function EmailEditForm({ currentEmail }: EmailEditFormProps) {
	const [success, setSuccess] = useState<string | null>(null);

	const { nhost } = useAuth();
	const queryClient = useQueryClient();

	const changeEmailMutation = useMutation({
		mutationFn: async (newEmail: string) => {
			const result = await nhost.auth.changeUserEmail({
				newEmail,
			});

			return result;
		},
		onSuccess: () => {
			setSuccess(
				"Email change request sent! Please check your new email for a confirmation link.",
			);
			// Invalidate user data query to potentially refetch updated profile
			queryClient.invalidateQueries({ queryKey: ["GetCurrentUser"] });
		},
	});

	const handleSubmit = (data: EmailFormData) => {
		changeEmailMutation.mutate(data.email);
	};

	return (
		<EditableField
			label="Email"
			icon={<Mail className="h-4 w-4" />}
			currentValue={currentEmail}
			placeholder="Enter your email address"
			description="Your account email address"
			editDescription="Changing your email will send a confirmation link to the new address. Your email won't change until you confirm it."
			schema={emailSchema}
			fieldName="email"
			inputType="email"
			onSubmit={handleSubmit}
			isLoading={changeEmailMutation.isPending}
			error={
				changeEmailMutation.isError
					? changeEmailMutation.error?.message ||
						"Failed to change email. Please try again."
					: null
			}
			successMessage={success}
			ariaLabel="Edit email"
		/>
	);
}
