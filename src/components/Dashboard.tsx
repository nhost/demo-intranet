import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";
import type {
	GetDashboardSummaryQuery,
	GetUserFilesStatsQuery,
	GetUserKnowledgeBaseStatsQuery,
} from "@/lib/graphql/__generated__/graphql";
import {
	useDashboardSummary,
	useUserFilesStats,
	useUserKnowledgeBaseStats,
} from "@/lib/graphql/query-hooks";
import { formatDistanceToNow } from "date-fns";
import {
	BookOpen,
	Building2,
	Database,
	FileText,
	FolderOpen,
	TrendingUp,
	Upload,
} from "lucide-react";
import type React from "react";

// Type definitions
type DashboardStats = {
	userFiles: number;
	userFileSize: number;
	userKbEntries: number;
	accessibleDepartmentFiles: number;
	accessibleKbEntries: number;
	recentFiles: number;
	departmentCount: number;
	totalAccessibleFiles: number;
};

// Helper function to format file sizes
function formatBytes(bytes: number, decimals = 2) {
	if (bytes === 0) {
		return "0 Bytes";
	}
	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

// Statistics card component
function StatCard({
	title,
	value,
	subtitle,
	icon: Icon,
	trend,
}: {
	title: string;
	value: string | number;
	subtitle?: string;
	icon: React.ComponentType<{ className?: string }>;
	trend?: "up" | "down" | "neutral";
}) {
	return (
		<Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium text-muted-foreground">
					{title}
				</CardTitle>
				<Icon className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{value}</div>
				{subtitle && (
					<p className="text-xs text-muted-foreground flex items-center gap-1">
						{trend && (
							<TrendingUp
								className={`h-3 w-3 ${
									trend === "up"
										? "text-green-500"
										: trend === "down"
											? "text-red-500"
											: "text-muted-foreground"
								}`}
							/>
						)}
						{subtitle}
					</p>
				)}
			</CardContent>
		</Card>
	);
}

// Skeleton loader component
function SkeletonLoader({
	count,
	height = "h-12",
}: {
	count: number;
	height?: string;
}) {
	return (
		<div className="space-y-3">
			{Array.from({ length: count }, (_, i) => (
				<div
					key={`skeleton-${Date.now()}-${i}`}
					className={`${height} bg-muted/50 rounded animate-pulse`}
				/>
			))}
		</div>
	);
}

// Welcome section component
function WelcomeSection({ userName }: { userName: string }) {
	return (
		<Card className="mb-8 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 backdrop-blur-md border border-border/50 shadow-lg">
			<CardContent className="pt-6">
				<h1 className="text-4xl font-bold mb-4 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
					Welcome back, {userName}!
				</h1>
				<p className="text-lg text-muted-foreground mb-6">
					Here's your personalized overview of the intranet system.
				</p>
			</CardContent>
		</Card>
	);
}

// Activity summary section component
function ActivitySummary({
	stats,
	isLoading,
}: {
	stats: DashboardStats;
	isLoading: boolean;
}) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
			<Card className="bg-gradient-to-br from-emerald-50/80 to-green-50/40 dark:from-emerald-900/20 dark:to-green-900/10 border-emerald-200/50 dark:border-emerald-800/50">
				<CardContent className="pt-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
								Total Activity
							</p>
							<p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300">
								{isLoading
									? "..."
									: stats.userFiles +
										stats.userKbEntries +
										stats.accessibleDepartmentFiles}
							</p>
							<p className="text-xs text-emerald-600/70 dark:text-emerald-400/70">
								Files + KB entries + accessible content
							</p>
						</div>
						<TrendingUp className="h-8 w-8 text-emerald-500" />
					</div>
				</CardContent>
			</Card>

			<Card className="bg-gradient-to-br from-blue-50/80 to-indigo-50/40 dark:from-blue-900/20 dark:to-indigo-900/10 border-blue-200/50 dark:border-blue-800/50">
				<CardContent className="pt-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-blue-600 dark:text-blue-400">
								Storage Usage
							</p>
							<p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
								{isLoading ? "..." : formatBytes(stats.userFileSize)}
							</p>
							<p className="text-xs text-blue-600/70 dark:text-blue-400/70">
								Your uploaded files
							</p>
						</div>
						<Database className="h-8 w-8 text-blue-500" />
					</div>
				</CardContent>
			</Card>

			<Card className="bg-gradient-to-br from-violet-50/80 to-purple-50/40 dark:from-violet-900/20 dark:to-purple-900/10 border-violet-200/50 dark:border-violet-800/50">
				<CardContent className="pt-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-violet-600 dark:text-violet-400">
								Department Access
							</p>
							<p className="text-3xl font-bold text-violet-700 dark:text-violet-300">
								{isLoading ? "..." : stats.departmentCount}
							</p>
							<p className="text-xs text-violet-600/70 dark:text-violet-400/70">
								Active memberships
							</p>
						</div>
						<Building2 className="h-8 w-8 text-violet-500" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

// Quick stats grid component
function QuickStatsGrid({
	stats,
	isLoading,
}: {
	stats: DashboardStats;
	isLoading: boolean;
}) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<StatCard
				title="Your Departments"
				value={isLoading ? "..." : stats.departmentCount}
				subtitle="Active memberships"
				icon={Building2}
				trend="neutral"
			/>
			<StatCard
				title="Your Files"
				value={isLoading ? "..." : stats.userFiles}
				subtitle={isLoading ? "Loading..." : formatBytes(stats.userFileSize)}
				icon={Upload}
				trend="up"
			/>
			<StatCard
				title="Your KB Entries"
				value={isLoading ? "..." : stats.userKbEntries}
				subtitle={
					isLoading ? "Loading..." : `${stats.accessibleKbEntries} accessible`
				}
				icon={BookOpen}
				trend="up"
			/>
			<StatCard
				title="Total Accessible Files"
				value={isLoading ? "..." : stats.totalAccessibleFiles}
				subtitle="Your files + department files"
				icon={FolderOpen}
				trend="neutral"
			/>
		</div>
	);
}

// Departments section component
function DepartmentsSection({
	departments,
	isLoading,
}: {
	departments: GetDashboardSummaryQuery["user_departments"] | undefined;
	isLoading: boolean;
}) {
	return (
		<Card className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Building2 className="h-5 w-5" />
					Your Departments
				</CardTitle>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<SkeletonLoader count={3} height="h-16" />
				) : (
					<div className="space-y-4">
						{departments?.slice(0, 5).map((dept) => (
							<div
								key={dept.id}
								className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
							>
								<div>
									<h4 className="font-medium">{dept.name}</h4>
									<p className="text-sm text-muted-foreground truncate max-w-48">
										{dept.description || "No description"}
									</p>
								</div>
								<div className="text-right text-sm">
									<div className="font-medium">
										{dept.employees_aggregate?.aggregate?.count || 0} members
									</div>
									<div className="text-muted-foreground">
										{dept.files_aggregate?.aggregate?.count || 0} files
									</div>
								</div>
							</div>
						))}
						{(departments?.length || 0) === 0 && (
							<p className="text-muted-foreground text-center py-8">
								You are not a member of any departments yet.
							</p>
						)}
					</div>
				)}
			</CardContent>
		</Card>
	);
}

// System overview section component
function SystemOverview({
	stats,
	isLoading,
}: {
	stats: DashboardStats;
	isLoading: boolean;
}) {
	return (
		<Card className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Database className="h-5 w-5" />
					System Overview
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="text-center p-4 rounded-lg bg-blue-50/50 dark:bg-blue-900/20">
							<div className="text-2xl font-bold text-blue-600">
								{isLoading ? "..." : stats.userFiles}
							</div>
							<div className="text-sm text-muted-foreground">Your Files</div>
						</div>
						<div className="text-center p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20">
							<div className="text-2xl font-bold text-green-600">
								{isLoading ? "..." : stats.accessibleDepartmentFiles}
							</div>
							<div className="text-sm text-muted-foreground">
								Department Files
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="text-center p-4 rounded-lg bg-purple-50/50 dark:bg-purple-900/20">
							<div className="text-2xl font-bold text-purple-600">
								{isLoading ? "..." : stats.userKbEntries}
							</div>
							<div className="text-sm text-muted-foreground">
								Your KB Entries
							</div>
						</div>
						<div className="text-center p-4 rounded-lg bg-orange-50/50 dark:bg-orange-900/20">
							<div className="text-2xl font-bold text-orange-600">
								{isLoading ? "..." : formatBytes(stats.userFileSize)}
							</div>
							<div className="text-sm text-muted-foreground">Your Storage</div>
						</div>
					</div>
					<div className="text-center p-4 rounded-lg bg-indigo-50/50 dark:bg-indigo-900/20">
						<div className="text-2xl font-bold text-indigo-600">
							{isLoading ? "..." : stats.accessibleKbEntries}
						</div>
						<div className="text-sm text-muted-foreground">
							Accessible KB Entries
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

// User files section component
function UserFilesSection({
	userFiles,
	isLoading,
}: {
	userFiles: GetUserFilesStatsQuery["user_files"] | undefined;
	isLoading: boolean;
}) {
	return (
		<Card className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Upload className="h-5 w-5" />
					Your Files
				</CardTitle>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<SkeletonLoader count={5} />
				) : (
					<div className="space-y-3">
						{userFiles?.slice(0, 5).map((file) => (
							<div
								key={file.id}
								className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
							>
								<div className="flex items-center gap-3">
									<FileText className="h-4 w-4 text-muted-foreground" />
									<div>
										<div className="font-medium truncate max-w-32">
											{file.name}
										</div>
										<div className="text-sm text-muted-foreground">
											{formatBytes(file.size || 0)}
										</div>
									</div>
								</div>
								<div className="text-xs text-muted-foreground">
									{formatDistanceToNow(new Date(file.createdAt), {
										addSuffix: true,
									})}
								</div>
							</div>
						))}
						{(userFiles?.length || 0) === 0 && !isLoading && (
							<p className="text-muted-foreground text-center py-8">
								No files uploaded yet.
							</p>
						)}
					</div>
				)}
			</CardContent>
		</Card>
	);
}

// Department files section component
function DepartmentFilesSection({
	departmentFiles,
	isLoading,
}: {
	departmentFiles:
		| GetUserFilesStatsQuery["accessible_department_files"]
		| undefined;
	isLoading: boolean;
}) {
	return (
		<Card className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<FolderOpen className="h-5 w-5" />
					Department Files
				</CardTitle>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<SkeletonLoader count={5} />
				) : (
					<div className="space-y-3">
						{departmentFiles?.slice(0, 5).map((departmentFile) => (
							<div
								key={departmentFile.id}
								className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
							>
								<div className="flex items-center gap-3">
									<FileText className="h-4 w-4 text-blue-500" />
									<div>
										<div className="font-medium truncate max-w-32">
											{departmentFile.file.name}
										</div>
										<div className="text-xs text-muted-foreground">
											{departmentFile.department.name} •{" "}
											{formatBytes(departmentFile.file.size || 0)}
										</div>
									</div>
								</div>
								<div className="text-xs text-muted-foreground">
									{formatDistanceToNow(
										new Date(departmentFile.file.createdAt),
										{
											addSuffix: true,
										},
									)}
								</div>
							</div>
						))}
						{(departmentFiles?.length || 0) === 0 && !isLoading && (
							<p className="text-muted-foreground text-center py-8">
								No department files found.
							</p>
						)}
					</div>
				)}
			</CardContent>
		</Card>
	);
}

// Knowledge base section component
function KnowledgeBaseSection({
	kbEntries,
	isLoading,
}: {
	kbEntries:
		| GetUserKnowledgeBaseStatsQuery["accessible_kb_entries"]
		| undefined;
	isLoading: boolean;
}) {
	return (
		<Card className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<BookOpen className="h-5 w-5" />
					Knowledge Base
				</CardTitle>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<SkeletonLoader count={5} height="h-16" />
				) : (
					<div className="space-y-3">
						{kbEntries?.slice(0, 5).map((entry) => (
							<div
								key={entry.id}
								className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
							>
								<div className="font-medium truncate">{entry.title}</div>
								<div className="text-sm text-muted-foreground mt-1 line-clamp-2">
									{entry.summary || "No summary available"}
								</div>
								<div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
									<span className="truncate max-w-24">
										{entry.uploader?.displayName || entry.uploader?.email}
									</span>
									<span>
										{formatDistanceToNow(new Date(entry.created_at), {
											addSuffix: true,
										})}
									</span>
								</div>
							</div>
						))}
						{(kbEntries?.length || 0) === 0 && !isLoading && (
							<p className="text-muted-foreground text-center py-8">
								No accessible knowledge base entries found.
							</p>
						)}
					</div>
				)}
			</CardContent>
		</Card>
	);
}

export function Dashboard() {
	const { session } = useAuth();
	const { data: dashboardSummary, isLoading: isDashboardLoading } =
		useDashboardSummary();
	const { data: userFilesStats, isLoading: isFilesLoading } =
		useUserFilesStats();
	const { data: userKbStats, isLoading: isKbLoading } =
		useUserKnowledgeBaseStats();

	const isLoading = isDashboardLoading || isFilesLoading || isKbLoading;

	// Calculate stats from the dashboard data
	const stats = {
		userFiles: userFilesStats?.user_files_aggregate?.aggregate?.count || 0,
		userFileSize:
			userFilesStats?.user_files_aggregate?.aggregate?.sum?.size || 0,
		userKbEntries:
			userKbStats?.user_kb_entries_aggregate?.aggregate?.count || 0,
		accessibleDepartmentFiles:
			userFilesStats?.accessible_department_files?.length || 0,
		accessibleKbEntries: userKbStats?.accessible_kb_entries?.length || 0,
		recentFiles: userFilesStats?.recent_files?.length || 0,
		departmentCount: dashboardSummary?.user_departments?.length || 0,
		totalAccessibleFiles:
			(userFilesStats?.accessible_department_files?.length || 0) +
			(userFilesStats?.user_files?.length || 0),
	};

	const userName = session?.user?.displayName || session?.user?.email || "User";

	return (
		<div className="w-full p-8">
			<div className="max-w-7xl mx-auto space-y-8">
				<WelcomeSection userName={userName} />
				<ActivitySummary stats={stats} isLoading={isLoading} />
				<QuickStatsGrid stats={stats} isLoading={isLoading} />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<DepartmentsSection
						departments={dashboardSummary?.user_departments}
						isLoading={isLoading}
					/>
					<SystemOverview stats={stats} isLoading={isLoading} />
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<UserFilesSection
						userFiles={userFilesStats?.user_files}
						isLoading={isLoading}
					/>
					<DepartmentFilesSection
						departmentFiles={userFilesStats?.accessible_department_files}
						isLoading={isLoading}
					/>
					<KnowledgeBaseSection
						kbEntries={userKbStats?.accessible_kb_entries}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</div>
	);
}
