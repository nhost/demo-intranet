import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useAuth } from "../auth-context.tsx";
import {
	AddDepartmentMemberDocument,
	AddKnowledgeBaseToDepartmentDocument,
	CreateKnowledgeBaseEntryWithDepartmentsDocument,
	DeleteKnowledgeBaseEntryDocument,
	GetDepartmentDetailsDocument,
	GetKnowledgeBaseEntriesDocument,
	GetUserDepartmentsDocument,
	RemoveDepartmentMemberDocument,
	RemoveKnowledgeBaseFromDepartmentDocument,
	SearchUsersDocument,
	UpdateDepartmentDocument,
	UpdateKnowledgeBaseEntryDocument,
	UpdateMemberRoleDocument,
} from "./__generated__/graphql.ts";
import type {
	AddDepartmentMemberMutation,
	AddDepartmentMemberMutationVariables,
	AddKnowledgeBaseToDepartmentMutation,
	AddKnowledgeBaseToDepartmentMutationVariables,
	CreateKnowledgeBaseEntryWithDepartmentsMutation,
	CreateKnowledgeBaseEntryWithDepartmentsMutationVariables,
	DeleteKnowledgeBaseEntryMutation,
	DeleteKnowledgeBaseEntryMutationVariables,
	GetDepartmentDetailsQuery,
	GetDepartmentDetailsQueryVariables,
	GetKnowledgeBaseEntriesQuery,
	GetUserDepartmentsQuery,
	RemoveDepartmentMemberMutation,
	RemoveDepartmentMemberMutationVariables,
	RemoveKnowledgeBaseFromDepartmentMutation,
	RemoveKnowledgeBaseFromDepartmentMutationVariables,
	SearchUsersQuery,
	SearchUsersQueryVariables,
	UpdateDepartmentMutation,
	UpdateDepartmentMutationVariables,
	UpdateKnowledgeBaseEntryMutation,
	UpdateKnowledgeBaseEntryMutationVariables,
	UpdateMemberRoleMutation,
	UpdateMemberRoleMutationVariables,
} from "./__generated__/graphql.ts";

// This wrapper returns a fetcher function that uses the authenticated nhost client
export const useAuthenticatedFetcher = <TData, TVariables>(
	document: string | { query: string; variables?: TVariables },
) => {
	const { nhost } = useAuth();

	return useCallback(
		async (variables?: TVariables): Promise<TData> => {
			// Handle both string format or document object format
			const query = typeof document === "string" ? document : document.query;
			const documentVariables =
				typeof document === "object" ? document.variables : undefined;
			const mergedVariables = variables || documentVariables;

			const resp = await nhost.graphql.post<TData>({
				query,
				variables: mergedVariables as Record<string, unknown>,
			});

			if (!resp.body.data) {
				throw new Error(
					`Response does not contain data: ${JSON.stringify(resp.body)}`,
				);
			}

			return resp.body.data;
		},
		[nhost, document],
	);
};

// Department hooks
export const useUserDepartments = () => {
	const fetcher = useAuthenticatedFetcher<GetUserDepartmentsQuery, never>(
		GetUserDepartmentsDocument,
	);

	return useQuery({
		queryKey: ["departments"],
		queryFn: () => fetcher(),
		staleTime: 5 * 60 * 1000, // 5 minutes
	});
};

export const useDepartmentDetails = (departmentId: string) => {
	const fetcher = useAuthenticatedFetcher<
		GetDepartmentDetailsQuery,
		GetDepartmentDetailsQueryVariables
	>(GetDepartmentDetailsDocument);

	return useQuery({
		queryKey: ["department", departmentId],
		queryFn: () => fetcher({ departmentId }),
		enabled: !!departmentId,
		staleTime: 5 * 60 * 1000, // 5 minutes
	});
};

export const useUpdateDepartment = () => {
	const fetcher = useAuthenticatedFetcher<
		UpdateDepartmentMutation,
		UpdateDepartmentMutationVariables
	>(UpdateDepartmentDocument);

	return useMutation({
		mutationFn: (variables: UpdateDepartmentMutationVariables) =>
			fetcher(variables),
	});
};

// Member management hooks
export const useSearchUsers = (searchName: string, searchEmail: string) => {
	const fetcher = useAuthenticatedFetcher<
		SearchUsersQuery,
		SearchUsersQueryVariables
	>(SearchUsersDocument);

	return useQuery({
		queryKey: ["searchUsers", searchName, searchEmail],
		queryFn: () =>
			fetcher({
				searchName: `%${searchName}%`,
				searchEmail: `%${searchEmail}%`,
			}),
		enabled: !!(searchName.length >= 2 || searchEmail.length >= 2),
		staleTime: 30 * 1000, // 30 seconds
	});
};

export const useAddDepartmentMember = () => {
	const fetcher = useAuthenticatedFetcher<
		AddDepartmentMemberMutation,
		AddDepartmentMemberMutationVariables
	>(AddDepartmentMemberDocument);

	return useMutation({
		mutationFn: (variables: AddDepartmentMemberMutationVariables) =>
			fetcher(variables),
	});
};

export const useRemoveDepartmentMember = () => {
	const fetcher = useAuthenticatedFetcher<
		RemoveDepartmentMemberMutation,
		RemoveDepartmentMemberMutationVariables
	>(RemoveDepartmentMemberDocument);

	return useMutation({
		mutationFn: (variables: RemoveDepartmentMemberMutationVariables) =>
			fetcher(variables),
	});
};

export const useUpdateMemberRole = () => {
	const fetcher = useAuthenticatedFetcher<
		UpdateMemberRoleMutation,
		UpdateMemberRoleMutationVariables
	>(UpdateMemberRoleDocument);

	return useMutation({
		mutationFn: (variables: UpdateMemberRoleMutationVariables) =>
			fetcher(variables),
	});
};

// Knowledge base hooks
export const useKnowledgeBaseEntries = () => {
	const fetcher = useAuthenticatedFetcher<GetKnowledgeBaseEntriesQuery, never>(
		GetKnowledgeBaseEntriesDocument,
	);

	return useQuery({
		queryKey: ["knowledgeBaseEntries"],
		queryFn: () => fetcher(),
		staleTime: 5 * 60 * 1000, // 5 minutes
	});
};

export const useCreateKnowledgeBaseEntry = () => {
	const fetcher = useAuthenticatedFetcher<
		CreateKnowledgeBaseEntryWithDepartmentsMutation,
		CreateKnowledgeBaseEntryWithDepartmentsMutationVariables
	>(CreateKnowledgeBaseEntryWithDepartmentsDocument);

	return useMutation({
		mutationFn: (
			variables: CreateKnowledgeBaseEntryWithDepartmentsMutationVariables,
		) => fetcher(variables),
	});
};

export const useUpdateKnowledgeBaseEntry = () => {
	const fetcher = useAuthenticatedFetcher<
		UpdateKnowledgeBaseEntryMutation,
		UpdateKnowledgeBaseEntryMutationVariables
	>(UpdateKnowledgeBaseEntryDocument);

	return useMutation({
		mutationFn: (variables: UpdateKnowledgeBaseEntryMutationVariables) =>
			fetcher(variables),
	});
};

export const useDeleteKnowledgeBaseEntry = () => {
	const fetcher = useAuthenticatedFetcher<
		DeleteKnowledgeBaseEntryMutation,
		DeleteKnowledgeBaseEntryMutationVariables
	>(DeleteKnowledgeBaseEntryDocument);

	return useMutation({
		mutationFn: (variables: DeleteKnowledgeBaseEntryMutationVariables) =>
			fetcher(variables),
	});
};

export const useAddKnowledgeBaseToDepartment = () => {
	const fetcher = useAuthenticatedFetcher<
		AddKnowledgeBaseToDepartmentMutation,
		AddKnowledgeBaseToDepartmentMutationVariables
	>(AddKnowledgeBaseToDepartmentDocument);

	return useMutation({
		mutationFn: (variables: AddKnowledgeBaseToDepartmentMutationVariables) =>
			fetcher(variables),
	});
};

export const useRemoveKnowledgeBaseFromDepartment = () => {
	const fetcher = useAuthenticatedFetcher<
		RemoveKnowledgeBaseFromDepartmentMutation,
		RemoveKnowledgeBaseFromDepartmentMutationVariables
	>(RemoveKnowledgeBaseFromDepartmentDocument);

	return useMutation({
		mutationFn: (
			variables: RemoveKnowledgeBaseFromDepartmentMutationVariables,
		) => fetcher(variables),
	});
};
