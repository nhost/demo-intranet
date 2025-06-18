import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useAuth } from "@/lib/auth-context";
import {
  useDepartmentDetails,
  useUserDepartments,
} from "@/lib/graphql/query-hooks";
import {
  Building2,
  Calendar,
  DollarSign,
  Edit3,
  Eye,
  UserCog,
  Users,
} from "lucide-react";
import { useState } from "react";
import { DepartmentEditDialog } from "./DepartmentEditDialog.tsx";
import { MemberManagement } from "./MemberManagement.tsx";

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

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
}

export function Departments() {
  const { session } = useAuth();
  const { data: departments, isLoading, error } = useUserDepartments();
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<
    string | null
  >(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  // Parse department claims from session by decoding the JWT access token
  let claims = {};
  if (session?.accessToken) {
    const decodedToken = JSON.parse(atob(session.accessToken.split(".")[1]));
    claims = decodedToken["https://hasura.io/jwt/claims"] || {};
  }

  const { memberDepartments, managerDepartments } =
    parseDepartmentClaims(claims);

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Building2 className="h-8 w-8" />
              Departments
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage and view department information and members.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted rounded w-full" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                    <div className="h-8 bg-muted rounded w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">
                Error Loading Departments
              </CardTitle>
              <CardDescription>
                Failed to load department information. Please try again later.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  const accessibleDepartments =
    departments?.departments.filter(
      (dept) =>
        memberDepartments.includes(dept.id) ||
        managerDepartments.includes(dept.id),
    ) || [];

  const canManageDepartment = (departmentId: string) =>
    managerDepartments.includes(departmentId);

  const getUserRole = (departmentId: string) => {
    if (managerDepartments.includes(departmentId)) {
      return "manager";
    }
    if (memberDepartments.includes(departmentId)) {
      return "member";
    }
    return null;
  };

  const handleEditDepartment = (departmentId: string) => {
    setSelectedDepartmentId(departmentId);
    setIsEditDialogOpen(true);
  };

  const handleViewDepartment = (departmentId: string) => {
    setSelectedDepartmentId(departmentId);
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Building2 className="h-8 w-8" />
            Departments
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage and view department information and members.
          </p>
        </div>

        {accessibleDepartments.length === 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>No Departments</CardTitle>
              <CardDescription>
                You are not currently assigned to any departments.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {accessibleDepartments.map((department) => {
              const userRole = getUserRole(department.id);
              const canManage = canManageDepartment(department.id);

							return (
								<Card
									key={department.id}
									className="hover:shadow-lg transition-shadow"
								>
									<CardHeader>
										<div className="flex items-start justify-between">
											<div className="flex-1">
												<CardTitle className="text-xl">
													{department.name}
												</CardTitle>
												<CardDescription className="mt-2">
													{department.description}
												</CardDescription>
											</div>
											<Badge
												variant={
													userRole === "manager" ? "default" : "secondary"
												}
												className="ml-2"
											>
												{userRole}
											</Badge>
										</div>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="grid grid-cols-2 gap-4 text-sm">
											<div className="flex items-center gap-2">
												<DollarSign className="h-4 w-4 text-muted-foreground" />
												<span>
													{department.budget
														? formatCurrency(Number(department.budget))
														: "N/A"}
												</span>
											</div>
											<div className="flex items-center gap-2">
												<Users className="h-4 w-4 text-muted-foreground" />
												<span>{department.employees.length} members</span>
											</div>
										</div>

										{department.employees.length > 0 && (
											<div>
												<div className="flex items-center gap-2 mb-3">
													<p className="text-sm font-medium">Team Members</p>
													<Badge variant="outline" className="text-xs">
														{department.employees.length}
													</Badge>
												</div>
												<div className="space-y-2 max-h-32 overflow-y-auto">
													{department.employees.slice(0, 4).map((emp) => (
														<div
															key={emp.id}
															className="flex items-center justify-between p-2 border rounded-md hover:bg-muted/50 transition-colors"
														>
															<div className="flex items-center gap-2 flex-1 min-w-0">
																<Avatar className="h-6 w-6 flex-shrink-0">
																	<AvatarImage src={emp.user.avatarUrl} />
																	<AvatarFallback className="text-xs">
																		{emp.user.displayName
																			.split(" ")
																			.map((n) => n[0])
																			.join("")}
																	</AvatarFallback>
																</Avatar>
																<span className="text-sm truncate">
																	{emp.user.displayName}
																</span>
															</div>
															<Badge
																variant={
																	emp.role === "manager"
																		? "default"
																		: "secondary"
																}
																className="text-xs flex-shrink-0"
															>
																{emp.role}
															</Badge>
														</div>
													))}
													{department.employees.length > 4 && (
														<div className="text-xs text-muted-foreground text-center py-1">
															+{department.employees.length - 4} more members
														</div>
													)}
												</div>
											</div>
										)}

                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewDepartment(department.id)}
                        className="flex-1"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      {canManage && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditDepartment(department.id)}
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Created {formatDate(department.created_at)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Department Detail View */}
        {selectedDepartmentId && !isEditDialogOpen && (
          <DepartmentDetailView
            departmentId={selectedDepartmentId}
            onClose={() => setSelectedDepartmentId(null)}
            canEdit={canManageDepartment(selectedDepartmentId)}
            onEdit={() => handleEditDepartment(selectedDepartmentId)}
          />
        )}

        {/* Edit Dialog */}
        {isEditDialogOpen && selectedDepartmentId && (
          <DepartmentEditDialog
            departmentId={selectedDepartmentId}
            open={isEditDialogOpen}
            onClose={() => {
              setIsEditDialogOpen(false);
              setSelectedDepartmentId(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

// Department Detail View Component
function DepartmentDetailView({
  departmentId,
  onClose,
  canEdit,
  onEdit,
}: {
  departmentId: string;
  onClose: () => void;
  canEdit: boolean;
  onEdit: () => void;
}) {
  const { data: department, isLoading } = useDepartmentDetails(departmentId);
  const [showMemberManagement, setShowMemberManagement] = useState(false);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
          <CardHeader>
            <div className="h-8 bg-muted rounded w-1/2 mb-2" />
            <div className="h-4 bg-muted rounded w-full" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 bg-muted rounded w-full" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!department?.departments_by_pk) {
    return null;
  }

  const dept = department.departments_by_pk;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{dept.name}</CardTitle>
              <CardDescription className="mt-2">
                {dept.description}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              {canEdit && (
                <Button variant="outline" onClick={onEdit}>
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              )}
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Overview Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Budget
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    {dept.budget ? formatCurrency(Number(dept.budget)) : "N/A"}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Total Members
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{dept.employees.length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Created
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{formatDate(dept.created_at)}</p>
                  <p className="text-xs text-muted-foreground">
                    Updated {formatDate(dept.updated_at)}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Members Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team Members ({dept.employees.length})
              </h3>
              {canEdit && (
                <Button onClick={() => setShowMemberManagement(true)}>
                  <UserCog className="h-4 w-4 mr-2" />
                  Manage Members
                </Button>
              )}
            </div>

						{dept.employees.length === 0 ? (
							<Card>
								<CardContent className="text-center py-8">
									<Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
									<p className="text-muted-foreground">
										No active members in this department.
									</p>
								</CardContent>
							</Card>
						) : (
							<div className="space-y-2">
								{dept.employees.map((emp) => (
									<div
										key={emp.id}
										className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
									>
										<div className="flex items-center gap-3">
											<Avatar className="h-10 w-10">
												<AvatarImage src={emp.user.avatarUrl} />
												<AvatarFallback>
													{emp.user.displayName
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</AvatarFallback>
											</Avatar>
											<div>
												<p className="font-medium">{emp.user.displayName}</p>
												<p className="text-sm text-muted-foreground">
													{emp.user.email}
												</p>
											</div>
										</div>
										<Badge
											variant={emp.role === "manager" ? "default" : "secondary"}
										>
											{emp.role}
										</Badge>
									</div>
								))}
							</div>
						)}
					</div>
				</CardContent>
			</Card>

      {/* Member Management Dialog */}
      {canEdit && (
        <MemberManagement
          departmentId={departmentId}
          departmentName={dept.name}
          currentMembers={dept.employees.map((emp) => ({
            id: emp.id,
            role: emp.role || "member",
            user: {
              id: emp.user.id,
              displayName: emp.user.displayName,
              email: emp.user.email || "",
              avatarUrl: emp.user.avatarUrl,
            },
          }))}
          open={showMemberManagement}
          onClose={() => setShowMemberManagement(false)}
        />
      )}
    </div>
  );
}
