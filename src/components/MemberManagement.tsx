import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	useAddDepartmentMember,
	useRemoveDepartmentMember,
	useSearchUsers,
	useUpdateMemberRole,
} from "@/lib/graphql/query-hooks";
import { useQueryClient } from "@tanstack/react-query";
import {
	AlertCircle,
	Check,
	Loader2,
	Plus,
	Search,
	Settings,
	UserMinus,
	UserPlus,
	X,
} from "lucide-react";
import { useState } from "react";

interface MemberManagementProps {
	departmentId: string;
	departmentName: string;
	currentMembers: Array<{
		id: string;
		role: string;
		user: {
			id: string;
			displayName: string;
			email?: string | null | undefined;
			avatarUrl: string;
		};
	}>;
	open: boolean;
	onClose: () => void;
}

interface UserSearchResult {
	id: string;
	displayName: string;
	email?: string | null | undefined;
	avatarUrl: string;
}

const DEPARTMENT_ROLES = [
	{ value: "member", label: "Member" },
	{ value: "manager", label: "Manager" },
];

export function MemberManagement({
	departmentId,
	departmentName,
	currentMembers,
	open,
	onClose,
}: MemberManagementProps) {
	const queryClient = useQueryClient();
	const [activeTab, setActiveTab] = useState<"add" | "manage">("add");
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedUser, setSelectedUser] = useState<UserSearchResult | null>(
		null,
	);
	const [selectedRole, setSelectedRole] = useState<string>("member");
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [editingMember, setEditingMember] = useState<string | null>(null);
	const [newRole, setNewRole] = useState<string>("");

	// Hooks
	const { data: searchResults, isLoading: isSearching } = useSearchUsers(
		searchTerm,
		searchTerm,
	);
	const addMember = useAddDepartmentMember();
	const removeMember = useRemoveDepartmentMember();
	const updateRole = useUpdateMemberRole();

	// Filter search results to exclude current members
	const currentMemberIds = new Set(currentMembers.map((m) => m.user.id));
	const availableUsers =
		searchResults?.users.filter((user) => !currentMemberIds.has(user.id)) || [];

	const handleAddMember = async () => {
		if (!selectedUser) {
			setErrors({ general: "Please select a user to add" });
			return;
		}

		try {
			setErrors({});
			await addMember.mutateAsync({
				userId: selectedUser.id,
				departmentId,
				role: selectedRole as any,
			});

			// Invalidate and refetch department data
			await queryClient.invalidateQueries({
				queryKey: ["department", departmentId],
			});
			await queryClient.invalidateQueries({ queryKey: ["departments"] });

			// Reset form
			setSelectedUser(null);
			setSearchTerm("");
			setSelectedRole("member");
		} catch (_error) {
			setErrors({
				general: "Failed to add member. Please try again.",
			});
		}
	};

	const handleRemoveMember = async (membershipId: string) => {
		if (
			!window.confirm(
				"Are you sure you want to remove this member from the department?",
			)
		) {
			return;
		}

		try {
			setErrors({});
			await removeMember.mutateAsync({ membershipId });

			// Invalidate and refetch department data
			await queryClient.invalidateQueries({
				queryKey: ["department", departmentId],
			});
			await queryClient.invalidateQueries({ queryKey: ["departments"] });
		} catch (_error) {
			setErrors({
				general: "Failed to remove member. Please try again.",
			});
		}
	};

	const handleRoleChange = async (membershipId: string, role: string) => {
		try {
			setErrors({});
			await updateRole.mutateAsync({
				membershipId,
				role: role as any,
			});

			// Invalidate and refetch department data
			await queryClient.invalidateQueries({
				queryKey: ["department", departmentId],
			});
			await queryClient.invalidateQueries({ queryKey: ["departments"] });

			setEditingMember(null);
			setNewRole("");
		} catch (_error) {
			setErrors({
				general: "Failed to update member role. Please try again.",
			});
		}
	};

	const startRoleEdit = (membershipId: string, currentRole: string) => {
		setEditingMember(membershipId);
		setNewRole(currentRole);
	};

	const cancelRoleEdit = () => {
		setEditingMember(null);
		setNewRole("");
	};

	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Manage Department Members</DialogTitle>
					<DialogDescription>
						Add new members or manage existing members for {departmentName}
					</DialogDescription>
				</DialogHeader>

				{/* Tab Navigation */}
				<div className="flex border-b">
					<button
						className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
							activeTab === "add"
								? "border-primary text-primary"
								: "border-transparent text-muted-foreground hover:text-foreground"
						}`}
						onClick={() => setActiveTab("add")}
					>
						<UserPlus className="h-4 w-4 inline mr-2" />
						Add Members
					</button>
					<button
						className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
							activeTab === "manage"
								? "border-primary text-primary"
								: "border-transparent text-muted-foreground hover:text-foreground"
						}`}
						onClick={() => setActiveTab("manage")}
					>
						<Settings className="h-4 w-4 inline mr-2" />
						Manage Members ({currentMembers.length})
					</button>
				</div>

				<div className="py-4">
					{/* General Error */}
					{errors.general && (
						<Card className="border-destructive bg-destructive/5 mb-4">
							<CardContent className="pt-4">
								<div className="flex items-center gap-2 text-destructive">
									<AlertCircle className="h-4 w-4" />
									<span className="text-sm">{errors.general}</span>
								</div>
							</CardContent>
						</Card>
					)}

					{/* Add Members Tab */}
					{activeTab === "add" && (
						<div className="space-y-6">
							{/* User Search */}
							<div className="space-y-2">
								<Label htmlFor="search" className="text-sm font-medium">
									Search Users
								</Label>
								<div className="relative">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
									<Input
										id="search"
										type="text"
										placeholder="Search by name or email..."
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className="pl-10"
									/>
								</div>
								<p className="text-xs text-muted-foreground">
									Type at least 2 characters to search
								</p>
							</div>

							{/* Search Results */}
							{searchTerm.length >= 2 && (
								<div className="space-y-2">
									<Label className="text-sm font-medium">Search Results</Label>
									{isSearching ? (
										<div className="flex items-center justify-center py-8">
											<Loader2 className="h-6 w-6 animate-spin" />
										</div>
									) : availableUsers.length > 0 ? (
										<div className="grid gap-2 max-h-60 overflow-y-auto">
											{availableUsers.map((user) => (
												<Card
													key={user.id}
													className={`cursor-pointer transition-colors ${
														selectedUser?.id === user.id
															? "border-primary bg-primary/5"
															: "hover:bg-muted/50"
													}`}
													onClick={() => setSelectedUser(user)}
												>
													<CardContent className="p-3">
														<div className="flex items-center gap-3">
															<Avatar className="h-8 w-8">
																<AvatarImage src={user.avatarUrl} />
																<AvatarFallback className="text-xs">
																	{user.displayName
																		.split(" ")
																		.map((n) => n[0])
																		.join("")}
																</AvatarFallback>
															</Avatar>
															<div className="flex-1">
																<p className="font-medium text-sm">
																	{user.displayName}
																</p>
																<p className="text-xs text-muted-foreground">
																	{user.email || "No email"}
																</p>
															</div>
															{selectedUser?.id === user.id && (
																<Check className="h-4 w-4 text-primary" />
															)}
														</div>
													</CardContent>
												</Card>
											))}
										</div>
									) : (
										<p className="text-sm text-muted-foreground py-4 text-center">
											No available users found. All matching users are already
											members.
										</p>
									)}
								</div>
							)}

							{/* Role Selection */}
							{selectedUser && (
								<div className="space-y-2">
									<Label htmlFor="role" className="text-sm font-medium">
										Role
									</Label>
									<Select value={selectedRole} onValueChange={setSelectedRole}>
										<SelectTrigger>
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											{DEPARTMENT_ROLES.map((role) => (
												<SelectItem key={role.value} value={role.value}>
													{role.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
							)}

							{/* Add Button */}
							{selectedUser && (
								<div className="pt-4">
									<Button
										onClick={handleAddMember}
										disabled={addMember.isPending}
										className="w-full"
									>
										{addMember.isPending ? (
											<Loader2 className="h-4 w-4 mr-2 animate-spin" />
										) : (
											<Plus className="h-4 w-4 mr-2" />
										)}
										Add {selectedUser.displayName} as {selectedRole}
									</Button>
								</div>
							)}
						</div>
					)}

					{/* Manage Members Tab */}
					{activeTab === "manage" && (
						<div className="space-y-4">
							{currentMembers.length === 0 ? (
								<p className="text-center text-muted-foreground py-8">
									No members in this department.
								</p>
							) : (
								<div className="grid gap-3">
									{currentMembers.map((member) => (
										<Card key={member.id}>
											<CardContent className="p-4">
												<div className="flex items-center justify-between">
													<div className="flex items-center gap-3">
														<Avatar>
															<AvatarImage src={member.user.avatarUrl} />
															<AvatarFallback>
																{member.user.displayName
																	.split(" ")
																	.map((n) => n[0])
																	.join("")}
															</AvatarFallback>
														</Avatar>
														<div>
															<p className="font-medium">
																{member.user.displayName}
															</p>
															<p className="text-sm text-muted-foreground">
																{member.user.email || "No email"}
															</p>
														</div>
													</div>

													<div className="flex items-center gap-2">
														{/* Role Management */}
														{editingMember === member.id ? (
															<div className="flex items-center gap-2">
																<Select
																	value={newRole}
																	onValueChange={setNewRole}
																>
																	<SelectTrigger className="w-32">
																		<SelectValue />
																	</SelectTrigger>
																	<SelectContent>
																		{DEPARTMENT_ROLES.map((role) => (
																			<SelectItem
																				key={role.value}
																				value={role.value}
																			>
																				{role.label}
																			</SelectItem>
																		))}
																	</SelectContent>
																</Select>
																<Button
																	size="sm"
																	variant="outline"
																	onClick={() =>
																		handleRoleChange(member.id, newRole)
																	}
																	disabled={updateRole.isPending}
																>
																	{updateRole.isPending ? (
																		<Loader2 className="h-3 w-3 animate-spin" />
																	) : (
																		<Check className="h-3 w-3" />
																	)}
																</Button>
																<Button
																	size="sm"
																	variant="outline"
																	onClick={cancelRoleEdit}
																>
																	<X className="h-3 w-3" />
																</Button>
															</div>
														) : (
															<div className="flex items-center gap-2">
																<Badge
																	variant={
																		member.role === "manager"
																			? "default"
																			: "secondary"
																	}
																	className="cursor-pointer"
																	onClick={() =>
																		startRoleEdit(member.id, member.role)
																	}
																>
																	{member.role}
																</Badge>
																<Button
																	size="sm"
																	variant="outline"
																	onClick={() =>
																		startRoleEdit(member.id, member.role)
																	}
																>
																	<Settings className="h-3 w-3" />
																</Button>
															</div>
														)}

														{/* Remove Member */}
														<Button
															size="sm"
															variant="destructive"
															onClick={() => handleRemoveMember(member.id)}
															disabled={removeMember.isPending}
														>
															{removeMember.isPending ? (
																<Loader2 className="h-3 w-3 animate-spin" />
															) : (
																<UserMinus className="h-3 w-3" />
															)}
														</Button>
													</div>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							)}
						</div>
					)}
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={onClose}>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
