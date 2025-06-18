import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import type {
	GetKnowledgeBaseEntriesQuery,
	GetUserDepartmentsQuery,
} from "@/lib/graphql/__generated__/graphql";
import {
	useCreateKnowledgeBaseEntry,
	useDeleteKnowledgeBaseEntry,
	useKnowledgeBaseEntries,
	useUpdateKnowledgeBaseEntry,
	useUserDepartments,
} from "@/lib/graphql/query-hooks";
import { useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import {
	BookOpenIcon,
	CalendarIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	EditIcon,
	PlusIcon,
	SearchIcon,
	TagIcon,
	TrashIcon,
	UserIcon,
} from "lucide-react";
import { useState } from "react";

type KnowledgeBaseEntry = GetKnowledgeBaseEntriesQuery["kb_entries"][0];
type Department = GetUserDepartmentsQuery["departments"][0];

interface KnowledgeBaseEntryProps {
	entry: KnowledgeBaseEntry;
	isEditing: boolean;
	editFormData: {
		title: string;
		summary: string;
		content: string;
	};
	onEditFormChange: (data: {
		title: string;
		summary: string;
		content: string;
	}) => void;
	onEditEntry: (entry: KnowledgeBaseEntry) => void;
	onCancelEdit: () => void;
	onUpdateEntry: (entryId: string) => void;
	onDeleteEntry: (entryId: string) => void;
	expandedEntries: Set<string>;
	onToggleExpansion: (entryId: string) => void;
	isUpdating: boolean;
}

function KnowledgeBaseEntry({
	entry,
	isEditing,
	editFormData,
	onEditFormChange,
	onEditEntry,
	onCancelEdit,
	onUpdateEntry,
	onDeleteEntry,
	expandedEntries,
	onToggleExpansion,
	isUpdating,
}: KnowledgeBaseEntryProps) {
	if (isEditing) {
		return (
			<Card className="hover:shadow-md transition-shadow">
				<CardHeader>
					<div className="space-y-4">
						<div>
							<Label htmlFor={`edit-title-${entry.id}`}>Title</Label>
							<Input
								id={`edit-title-${entry.id}`}
								value={editFormData.title}
								onChange={(e) =>
									onEditFormChange({
										...editFormData,
										title: e.target.value,
									})
								}
								placeholder="Enter a descriptive title"
							/>
						</div>
						<div>
							<Label htmlFor={`edit-summary-${entry.id}`}>
								Summary (optional)
							</Label>
							<Input
								id={`edit-summary-${entry.id}`}
								value={editFormData.summary}
								onChange={(e) =>
									onEditFormChange({
										...editFormData,
										summary: e.target.value,
									})
								}
								placeholder="Brief summary of the content"
							/>
						</div>
					</div>

					<div className="flex flex-wrap gap-2">
						{entry.kb_entry_departments.map((dept) => (
							<Badge key={dept.id} variant="secondary">
								<TagIcon className="mr-1 h-3 w-3" />
								{dept.department.name}
							</Badge>
						))}
					</div>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div>
							<Label htmlFor={`edit-content-${entry.id}`}>Content</Label>
							<Textarea
								id={`edit-content-${entry.id}`}
								value={editFormData.content}
								onChange={(e) =>
									onEditFormChange({
										...editFormData,
										content: e.target.value,
									})
								}
								placeholder="Enter the knowledge base content"
								rows={8}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-4 text-sm text-muted-foreground">
								<div className="flex items-center space-x-2">
									<UserIcon className="h-4 w-4" />
									<span>{entry.uploader.displayName}</span>
								</div>
								<div className="flex items-center space-x-2">
									<CalendarIcon className="h-4 w-4" />
									<span>
										{formatDistanceToNow(new Date(entry.created_at), {
											addSuffix: true,
										})}
									</span>
								</div>
							</div>

							<div className="flex items-center space-x-2">
								<Button variant="outline" size="sm" onClick={onCancelEdit}>
									Cancel
								</Button>
								<Button
									size="sm"
									onClick={() => onUpdateEntry(entry.id)}
									disabled={
										!editFormData.title.trim() ||
										!editFormData.content.trim() ||
										isUpdating
									}
								>
									{isUpdating ? "Updating..." : "Save"}
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="hover:shadow-md transition-shadow">
			<CardHeader>
				<div className="flex items-start justify-between">
					<div className="space-y-2 flex-1">
						<CardTitle className="text-xl">{entry.title}</CardTitle>
						{entry.summary && (
							<CardDescription className="text-base">
								{entry.summary}
							</CardDescription>
						)}
					</div>
					<div className="flex items-center space-x-2 ml-4">
						<Button
							variant="ghost"
							size="sm"
							onClick={() => onEditEntry(entry)}
						>
							<EditIcon className="h-4 w-4" />
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={() => onDeleteEntry(entry.id)}
							className="text-destructive hover:text-destructive"
						>
							<TrashIcon className="h-4 w-4" />
						</Button>
					</div>
				</div>

				<div className="flex flex-wrap gap-2">
					{entry.kb_entry_departments.map((dept) => (
						<Badge key={dept.id} variant="secondary">
							<TagIcon className="mr-1 h-3 w-3" />
							{dept.department.name}
						</Badge>
					))}
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div className="prose prose-sm max-w-none">
						<p className="text-muted-foreground whitespace-pre-wrap">
							{expandedEntries.has(entry.id) || entry.content.length <= 300
								? entry.content
								: `${entry.content.substring(0, 300)}...`}
						</p>
					</div>

					{entry.content.length > 300 && (
						<div className="flex justify-center">
							<Button
								variant="ghost"
								size="sm"
								onClick={() => onToggleExpansion(entry.id)}
								className="text-xs text-muted-foreground hover:text-foreground"
							>
								{expandedEntries.has(entry.id) ? (
									<>
										<ChevronUpIcon className="mr-1 h-3 w-3" />
										Show Less
									</>
								) : (
									<>
										<ChevronDownIcon className="mr-1 h-3 w-3" />
										Show More
									</>
								)}
							</Button>
						</div>
					)}

					<Separator />

					<div className="flex items-center justify-between text-sm text-muted-foreground">
						<div className="flex items-center space-x-4">
							<div className="flex items-center space-x-2">
								<UserIcon className="h-4 w-4" />
								<span>{entry.uploader.displayName}</span>
							</div>
							<div className="flex items-center space-x-2">
								<CalendarIcon className="h-4 w-4" />
								<span>
									{formatDistanceToNow(new Date(entry.created_at), {
										addSuffix: true,
									})}
								</span>
							</div>
						</div>
						{entry.updated_at !== entry.created_at && (
							<div className="text-xs">
								Updated{" "}
								{formatDistanceToNow(new Date(entry.updated_at), {
									addSuffix: true,
								})}
							</div>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

interface CreateEntryFormData {
	title: string;
	summary: string;
	content: string;
	departmentIds: string[];
}

export function KnowledgeBase() {
	const queryClient = useQueryClient();

	const [searchTerm, setSearchTerm] = useState("");
	const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
	const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
	const [editingEntryId, setEditingEntryId] = useState<string | null>(null);
	const [expandedEntries, setExpandedEntries] = useState<Set<string>>(
		new Set(),
	);
	const [formData, setFormData] = useState<CreateEntryFormData>({
		title: "",
		summary: "",
		content: "",
		departmentIds: [],
	});
	const [editFormData, setEditFormData] = useState<{
		title: string;
		summary: string;
		content: string;
	}>({
		title: "",
		summary: "",
		content: "",
	});

	// Fetch knowledge base entries
	const {
		data: kbEntries,
		isLoading: isLoadingEntries,
		error: entriesError,
	} = useKnowledgeBaseEntries();

	// Fetch user's departments
	const { data: departmentsData } = useUserDepartments();

	const departments = departmentsData?.departments || [];

	// Create entry mutation
	const createEntryMutation = useCreateKnowledgeBaseEntry();

	// Update entry mutation
	const updateEntryMutation = useUpdateKnowledgeBaseEntry();

	// Delete entry mutation
	const deleteEntryMutation = useDeleteKnowledgeBaseEntry();

	const resetForm = () => {
		setFormData({
			title: "",
			summary: "",
			content: "",
			departmentIds: [],
		});
	};

	const handleCreateEntry = () => {
		if (
			!formData.title.trim() ||
			!formData.content.trim() ||
			formData.departmentIds.length === 0
		) {
			return;
		}

		const departmentAssociations = formData.departmentIds.map(
			(departmentId) => ({
				// biome-ignore lint/style/useNamingConvention: GraphQL field name for database insertion
				department_id: departmentId,
			}),
		);

		createEntryMutation.mutate(
			{
				title: formData.title,
				summary: formData.summary || undefined,
				content: formData.content,
				departmentAssociations,
			},
			{
				onSuccess: () => {
					queryClient.invalidateQueries({ queryKey: ["knowledgeBaseEntries"] });
					setIsCreateDialogOpen(false);
					resetForm();
				},
			},
		);
	};

	const handleEditEntry = (entry: KnowledgeBaseEntry) => {
		setEditingEntryId(entry.id);
		setEditFormData({
			title: entry.title,
			summary: entry.summary || "",
			content: entry.content,
		});
	};

	const handleUpdateEntry = (entryId: string) => {
		if (!editFormData.title.trim() || !editFormData.content.trim()) {
			return;
		}

		updateEntryMutation.mutate(
			{
				entryId,
				title: editFormData.title,
				summary: editFormData.summary || undefined,
				content: editFormData.content,
			},
			{
				onSuccess: () => {
					queryClient.invalidateQueries({ queryKey: ["knowledgeBaseEntries"] });
					setEditingEntryId(null);
					setEditFormData({ title: "", summary: "", content: "" });
				},
			},
		);
	};

	const handleCancelEdit = () => {
		setEditingEntryId(null);
		setEditFormData({ title: "", summary: "", content: "" });
	};

	const handleDeleteEntry = (entryId: string) => {
		if (confirm("Are you sure you want to delete this knowledge base entry?")) {
			deleteEntryMutation.mutate(
				{ entryId },
				{
					onSuccess: () => {
						queryClient.invalidateQueries({
							queryKey: ["knowledgeBaseEntries"],
						});
					},
				},
			);
		}
	};

	const handleDepartmentChange = (departmentId: string, checked: boolean) => {
		setFormData((prev) => ({
			...prev,
			departmentIds: checked
				? [...prev.departmentIds, departmentId]
				: prev.departmentIds.filter((id) => id !== departmentId),
		}));
	};

	const toggleEntryExpansion = (entryId: string) => {
		setExpandedEntries((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(entryId)) {
				newSet.delete(entryId);
			} else {
				newSet.add(entryId);
			}
			return newSet;
		});
	};

	// Filter entries based on search and department
	const filteredEntries =
		kbEntries?.kb_entries?.filter((entry) => {
			const matchesSearch =
				searchTerm === "" ||
				entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				entry.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
				entry.content.toLowerCase().includes(searchTerm.toLowerCase());

			const matchesDepartment =
				selectedDepartment === "all" ||
				entry.kb_entry_departments.some(
					(dept) => dept.department.id === selectedDepartment,
				);

			return matchesSearch && matchesDepartment;
		}) || [];

	if (isLoadingEntries) {
		return (
			<div className="p-8">
				<div className="flex items-center justify-center min-h-[400px]">
					<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
				</div>
			</div>
		);
	}

	if (entriesError) {
		return (
			<div className="p-8">
				<Alert variant="destructive">
					<AlertDescription>
						Failed to load knowledge base entries. Please try again.
					</AlertDescription>
				</Alert>
			</div>
		);
	}

	return (
		<div className="p-8 space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div className="space-y-1">
					<h1 className="text-3xl font-bold tracking-tight">Knowledge Base</h1>
					<p className="text-muted-foreground">
						Share and discover knowledge across your organization
					</p>
				</div>
				<Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
					<DialogTrigger asChild={true}>
						<Button>
							<PlusIcon className="mr-2 h-4 w-4" />
							New Entry
						</Button>
					</DialogTrigger>
					<DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
						<DialogHeader>
							<DialogTitle>Create Knowledge Base Entry</DialogTitle>
							<DialogDescription>
								Share knowledge with your departments
							</DialogDescription>
						</DialogHeader>
						<div className="space-y-4">
							<div>
								<Label htmlFor="title">Title</Label>
								<Input
									id="title"
									value={formData.title}
									onChange={(e) =>
										setFormData((prev) => ({ ...prev, title: e.target.value }))
									}
									placeholder="Enter a descriptive title"
								/>
							</div>
							<div>
								<Label htmlFor="summary">Summary (optional)</Label>
								<Input
									id="summary"
									value={formData.summary}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											summary: e.target.value,
										}))
									}
									placeholder="Brief summary of the content"
								/>
							</div>
							<div>
								<Label htmlFor="content">Content</Label>
								<Textarea
									id="content"
									value={formData.content}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											content: e.target.value,
										}))
									}
									placeholder="Enter the knowledge base content"
									rows={8}
								/>
							</div>
							<div>
								<Label>Departments</Label>
								<div className="mt-2 space-y-2 max-h-32 overflow-y-auto border rounded p-2">
									{departments.map((dept: Department) => (
										<div key={dept.id} className="flex items-center space-x-2">
											<Checkbox
												id={`dept-${dept.id}`}
												checked={formData.departmentIds.includes(dept.id)}
												onCheckedChange={(checked) =>
													handleDepartmentChange(dept.id, checked as boolean)
												}
											/>
											<Label htmlFor={`dept-${dept.id}`} className="text-sm">
												{dept.name}
											</Label>
										</div>
									))}
								</div>
								{formData.departmentIds.length === 0 && (
									<p className="text-sm text-muted-foreground mt-1">
										Select at least one department
									</p>
								)}
							</div>
						</div>
						<DialogFooter>
							<Button
								variant="outline"
								onClick={() => setIsCreateDialogOpen(false)}
							>
								Cancel
							</Button>
							<Button
								onClick={handleCreateEntry}
								disabled={
									!formData.title.trim() ||
									!formData.content.trim() ||
									formData.departmentIds.length === 0 ||
									createEntryMutation.isPending
								}
							>
								{createEntryMutation.isPending ? "Creating..." : "Create Entry"}
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>

			{/* Filters */}
			<div className="flex flex-col sm:flex-row gap-4">
				<div className="relative flex-1">
					<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<Input
						placeholder="Search knowledge base..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="pl-10"
					/>
				</div>
				<Select
					value={selectedDepartment}
					onValueChange={setSelectedDepartment}
				>
					<SelectTrigger className="w-full sm:w-[200px]">
						<SelectValue placeholder="Filter by department" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Departments</SelectItem>
						{departments.map((dept: Department) => (
							<SelectItem key={dept.id} value={dept.id}>
								{dept.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			{/* Entries Grid */}
			{filteredEntries.length === 0 ? (
				<Card className="p-8">
					<div className="text-center space-y-4">
						<BookOpenIcon className="h-12 w-12 mx-auto text-muted-foreground" />
						<div>
							<h3 className="text-lg font-semibold">
								No knowledge base entries found
							</h3>
							<p className="text-muted-foreground">
								{searchTerm || selectedDepartment !== "all"
									? "Try adjusting your search or filters"
									: "Create your first knowledge base entry to get started"}
							</p>
						</div>
					</div>
				</Card>
			) : (
				<div className="grid gap-6">
					{filteredEntries.map((entry) => (
						<KnowledgeBaseEntry
							key={entry.id}
							entry={entry}
							isEditing={editingEntryId === entry.id}
							editFormData={editFormData}
							onEditFormChange={setEditFormData}
							onEditEntry={handleEditEntry}
							onCancelEdit={handleCancelEdit}
							onUpdateEntry={handleUpdateEntry}
							onDeleteEntry={handleDeleteEntry}
							expandedEntries={expandedEntries}
							onToggleExpansion={toggleEntryExpansion}
							isUpdating={updateEntryMutation.isPending}
						/>
					))}
				</div>
			)}
		</div>
	);
}
