import { EditableField } from "@/components/ui/editable-field";
import { useUpdateUserDisplayNameMutation } from "@/lib/graphql/__generated__/graphql";
import { queryKeys } from "@/lib/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { User } from "lucide-react";
import { z } from "zod";

const displayNameSchema = z.object({
	displayName: z
		.string()
		.min(1, "Display name is required")
		.max(50, "Display name must be 50 characters or less")
		.trim(),
});

type DisplayNameFormData = z.infer<typeof displayNameSchema>;

interface DisplayNameEditFormProps {
	currentDisplayName: string;
	userId: string;
}

export function DisplayNameEditForm({
	currentDisplayName,
	userId,
}: DisplayNameEditFormProps) {
	const queryClient = useQueryClient();

	const updateDisplayNameMutation = useUpdateUserDisplayNameMutation({
		onSuccess: () => {
			// Update the session data in React Query cache
			queryClient.invalidateQueries({ queryKey: queryKeys.session() });
			// Invalidate user data query to refetch updated profile
			queryClient.invalidateQueries({ queryKey: ["GetCurrentUser"] });
		},
	});

	const handleSubmit = (data: DisplayNameFormData) => {
		updateDisplayNameMutation.mutate({
			userId,
			displayName: data.displayName,
		});
	};

	return (
		<EditableField
			label="Display Name"
			icon={<User className="h-4 w-4" />}
			currentValue={currentDisplayName}
			placeholder="Enter your display name"
			description="This is how others will see your name"
			editDescription="This is your public display name. It can be up to 50 characters long."
			schema={displayNameSchema}
			fieldName="displayName"
			onSubmit={handleSubmit}
			isLoading={updateDisplayNameMutation.isPending}
			error={
				updateDisplayNameMutation.isError
					? "Failed to update display name. Please try again."
					: null
			}
			ariaLabel="Edit display name"
		/>
	);
}
