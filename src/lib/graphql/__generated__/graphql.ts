import {
	type UseMutationOptions,
	type UseQueryOptions,
	useMutation,
	useQuery,
} from "@tanstack/react-query";
import { useAuthenticatedFetcher } from "../query-hooks";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	bigint: { input: number; output: number };
	bytea: { input: Buffer; output: Buffer };
	citext: { input: string; output: string };
	jsonb: { input: Record<string, any>; output: Record<string, any> };
	numeric: { input: any; output: any };
	timestamptz: { input: string; output: string };
	uuid: { input: string; output: string };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["Boolean"]["input"]>;
	_gt?: InputMaybe<Scalars["Boolean"]["input"]>;
	_gte?: InputMaybe<Scalars["Boolean"]["input"]>;
	_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	_lt?: InputMaybe<Scalars["Boolean"]["input"]>;
	_lte?: InputMaybe<Scalars["Boolean"]["input"]>;
	_neq?: InputMaybe<Scalars["Boolean"]["input"]>;
	_nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["Int"]["input"]>;
	_gt?: InputMaybe<Scalars["Int"]["input"]>;
	_gte?: InputMaybe<Scalars["Int"]["input"]>;
	_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	_lt?: InputMaybe<Scalars["Int"]["input"]>;
	_lte?: InputMaybe<Scalars["Int"]["input"]>;
	_neq?: InputMaybe<Scalars["Int"]["input"]>;
	_nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["String"]["input"]>;
	_gt?: InputMaybe<Scalars["String"]["input"]>;
	_gte?: InputMaybe<Scalars["String"]["input"]>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars["String"]["input"]>;
	_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars["String"]["input"]>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars["String"]["input"]>;
	_lt?: InputMaybe<Scalars["String"]["input"]>;
	_lte?: InputMaybe<Scalars["String"]["input"]>;
	_neq?: InputMaybe<Scalars["String"]["input"]>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars["String"]["input"]>;
	_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars["String"]["input"]>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars["String"]["input"]>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars["String"]["input"]>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars["String"]["input"]>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars["String"]["input"]>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars["String"]["input"]>;
};

export enum AuthRefreshTokenTypes_Enum {
	/** Personal access token */
	Pat = "pat",
	/** Regular refresh token */
	Regular = "regular",
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
	_eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
	_in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	_neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
	_nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
	__typename?: "authRefreshTokens";
	createdAt: Scalars["timestamptz"]["output"];
	expiresAt: Scalars["timestamptz"]["output"];
	id: Scalars["uuid"]["output"];
	metadata?: Maybe<Scalars["jsonb"]["output"]>;
	type: AuthRefreshTokenTypes_Enum;
	/** An object relationship */
	user: Users;
	userId: Scalars["uuid"]["output"];
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
	path?: InputMaybe<Scalars["String"]["input"]>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
	min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
	_and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
	_not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
	_or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
	createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
	expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	metadata?: InputMaybe<Jsonb_Comparison_Exp>;
	type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
	user?: InputMaybe<Users_Bool_Exp>;
	userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
	createdAt?: InputMaybe<Order_By>;
	expiresAt?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
	createdAt?: InputMaybe<Order_By>;
	expiresAt?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
	__typename?: "authRefreshTokens_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"]["output"];
	/** data from the rows affected by the mutation */
	returning: Array<AuthRefreshTokens>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
	createdAt?: InputMaybe<Order_By>;
	expiresAt?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	metadata?: InputMaybe<Order_By>;
	type?: InputMaybe<Order_By>;
	user?: InputMaybe<Users_Order_By>;
	userId?: InputMaybe<Order_By>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
	/** column name */
	CreatedAt = "createdAt",
	/** column name */
	ExpiresAt = "expiresAt",
	/** column name */
	Id = "id",
	/** column name */
	Metadata = "metadata",
	/** column name */
	Type = "type",
	/** column name */
	UserId = "userId",
}

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
	createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
	expiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
	type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
	userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
	__typename?: "authUserSecurityKeys";
	counter: Scalars["bigint"]["output"];
	credentialId: Scalars["String"]["output"];
	credentialPublicKey?: Maybe<Scalars["bytea"]["output"]>;
	id: Scalars["uuid"]["output"];
	nickname?: Maybe<Scalars["String"]["output"]>;
	transports: Scalars["String"]["output"];
	/** An object relationship */
	user: Users;
	userId: Scalars["uuid"]["output"];
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
	avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
	min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
	stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
	stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
	sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
	var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
	var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
	variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
	counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
	_and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
	_not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
	_or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
	counter?: InputMaybe<Bigint_Comparison_Exp>;
	credentialId?: InputMaybe<String_Comparison_Exp>;
	credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	nickname?: InputMaybe<String_Comparison_Exp>;
	transports?: InputMaybe<String_Comparison_Exp>;
	user?: InputMaybe<Users_Bool_Exp>;
	userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
	counter?: InputMaybe<Order_By>;
	credentialId?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	nickname?: InputMaybe<Order_By>;
	transports?: InputMaybe<Order_By>;
	userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
	counter?: InputMaybe<Order_By>;
	credentialId?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	nickname?: InputMaybe<Order_By>;
	transports?: InputMaybe<Order_By>;
	userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
	__typename?: "authUserSecurityKeys_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"]["output"];
	/** data from the rows affected by the mutation */
	returning: Array<AuthUserSecurityKeys>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
	counter?: InputMaybe<Order_By>;
	credentialId?: InputMaybe<Order_By>;
	credentialPublicKey?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	nickname?: InputMaybe<Order_By>;
	transports?: InputMaybe<Order_By>;
	user?: InputMaybe<Users_Order_By>;
	userId?: InputMaybe<Order_By>;
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
	/** column name */
	Counter = "counter",
	/** column name */
	CredentialId = "credentialId",
	/** column name */
	CredentialPublicKey = "credentialPublicKey",
	/** column name */
	Id = "id",
	/** column name */
	Nickname = "nickname",
	/** column name */
	Transports = "transports",
	/** column name */
	UserId = "userId",
}

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
	counter?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
	counter?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
	counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
	counter?: InputMaybe<Scalars["bigint"]["input"]>;
	credentialId?: InputMaybe<Scalars["String"]["input"]>;
	credentialPublicKey?: InputMaybe<Scalars["bytea"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	nickname?: InputMaybe<Scalars["String"]["input"]>;
	transports?: InputMaybe<Scalars["String"]["input"]>;
	userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
	counter?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
	counter?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
	counter?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
	counter?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["bigint"]["input"]>;
	_gt?: InputMaybe<Scalars["bigint"]["input"]>;
	_gte?: InputMaybe<Scalars["bigint"]["input"]>;
	_in?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	_lt?: InputMaybe<Scalars["bigint"]["input"]>;
	_lte?: InputMaybe<Scalars["bigint"]["input"]>;
	_neq?: InputMaybe<Scalars["bigint"]["input"]>;
	_nin?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["bytea"]["input"]>;
	_gt?: InputMaybe<Scalars["bytea"]["input"]>;
	_gte?: InputMaybe<Scalars["bytea"]["input"]>;
	_in?: InputMaybe<Array<Scalars["bytea"]["input"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	_lt?: InputMaybe<Scalars["bytea"]["input"]>;
	_lte?: InputMaybe<Scalars["bytea"]["input"]>;
	_neq?: InputMaybe<Scalars["bytea"]["input"]>;
	_nin?: InputMaybe<Array<Scalars["bytea"]["input"]>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["citext"]["input"]>;
	_gt?: InputMaybe<Scalars["citext"]["input"]>;
	_gte?: InputMaybe<Scalars["citext"]["input"]>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars["citext"]["input"]>;
	_in?: InputMaybe<Array<Scalars["citext"]["input"]>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars["citext"]["input"]>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars["citext"]["input"]>;
	_lt?: InputMaybe<Scalars["citext"]["input"]>;
	_lte?: InputMaybe<Scalars["citext"]["input"]>;
	_neq?: InputMaybe<Scalars["citext"]["input"]>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars["citext"]["input"]>;
	_nin?: InputMaybe<Array<Scalars["citext"]["input"]>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars["citext"]["input"]>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars["citext"]["input"]>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars["citext"]["input"]>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars["citext"]["input"]>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars["citext"]["input"]>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars["citext"]["input"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
	/** ascending ordering of the cursor */
	Asc = "ASC",
	/** descending ordering of the cursor */
	Desc = "DESC",
}

/** columns and relationships of "department_files" */
export type Department_Files = {
	__typename?: "department_files";
	/** An object relationship */
	department: Departments;
	department_id: Scalars["uuid"]["output"];
	/** An object relationship */
	file: Files;
	file_id: Scalars["uuid"]["output"];
	id: Scalars["uuid"]["output"];
};

/** order by aggregate values of table "department_files" */
export type Department_Files_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Department_Files_Max_Order_By>;
	min?: InputMaybe<Department_Files_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "department_files". All fields are combined with a logical 'AND'. */
export type Department_Files_Bool_Exp = {
	_and?: InputMaybe<Array<Department_Files_Bool_Exp>>;
	_not?: InputMaybe<Department_Files_Bool_Exp>;
	_or?: InputMaybe<Array<Department_Files_Bool_Exp>>;
	department?: InputMaybe<Departments_Bool_Exp>;
	department_id?: InputMaybe<Uuid_Comparison_Exp>;
	file?: InputMaybe<Files_Bool_Exp>;
	file_id?: InputMaybe<Uuid_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "department_files" */
export enum Department_Files_Constraint {
	/** unique or primary key constraint on columns "file_id" */
	DepartmentFilesFileIdKey = "department_files_file_id_key",
	/** unique or primary key constraint on columns "id" */
	DepartmentFilesPkey = "department_files_pkey",
}

/** input type for inserting data into table "department_files" */
export type Department_Files_Insert_Input = {
	department_id?: InputMaybe<Scalars["uuid"]["input"]>;
	file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
	file_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** order by max() on columns of table "department_files" */
export type Department_Files_Max_Order_By = {
	department_id?: InputMaybe<Order_By>;
	file_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "department_files" */
export type Department_Files_Min_Order_By = {
	department_id?: InputMaybe<Order_By>;
	file_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "department_files" */
export type Department_Files_Mutation_Response = {
	__typename?: "department_files_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"]["output"];
	/** data from the rows affected by the mutation */
	returning: Array<Department_Files>;
};

/** input type for inserting object relation for remote table "department_files" */
export type Department_Files_Obj_Rel_Insert_Input = {
	data: Department_Files_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Department_Files_On_Conflict>;
};

/** on_conflict condition type for table "department_files" */
export type Department_Files_On_Conflict = {
	constraint: Department_Files_Constraint;
	update_columns?: Array<Department_Files_Update_Column>;
	where?: InputMaybe<Department_Files_Bool_Exp>;
};

/** Ordering options when selecting data from "department_files". */
export type Department_Files_Order_By = {
	department?: InputMaybe<Departments_Order_By>;
	department_id?: InputMaybe<Order_By>;
	file?: InputMaybe<Files_Order_By>;
	file_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
};

/** select columns of table "department_files" */
export enum Department_Files_Select_Column {
	/** column name */
	DepartmentId = "department_id",
	/** column name */
	FileId = "file_id",
	/** column name */
	Id = "id",
}

/** Streaming cursor of the table "department_files" */
export type Department_Files_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Department_Files_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Department_Files_Stream_Cursor_Value_Input = {
	department_id?: InputMaybe<Scalars["uuid"]["input"]>;
	file_id?: InputMaybe<Scalars["uuid"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** placeholder for update columns of table "department_files" (current role has no relevant permissions) */
export enum Department_Files_Update_Column {
	/** placeholder (do not use) */
	Placeholder = "_PLACEHOLDER",
}

/** columns and relationships of "department_roles" */
export type Department_Roles = {
	__typename?: "department_roles";
	comment?: Maybe<Scalars["String"]["output"]>;
	value: Scalars["String"]["output"];
};

/** Boolean expression to filter rows from the table "department_roles". All fields are combined with a logical 'AND'. */
export type Department_Roles_Bool_Exp = {
	_and?: InputMaybe<Array<Department_Roles_Bool_Exp>>;
	_not?: InputMaybe<Department_Roles_Bool_Exp>;
	_or?: InputMaybe<Array<Department_Roles_Bool_Exp>>;
	comment?: InputMaybe<String_Comparison_Exp>;
	value?: InputMaybe<String_Comparison_Exp>;
};

export enum Department_Roles_Enum {
	/** Department manager */
	Manager = "manager",
	/** Regular department member */
	Member = "member",
}

/** Boolean expression to compare columns of type "department_roles_enum". All fields are combined with logical 'AND'. */
export type Department_Roles_Enum_Comparison_Exp = {
	_eq?: InputMaybe<Department_Roles_Enum>;
	_in?: InputMaybe<Array<Department_Roles_Enum>>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	_neq?: InputMaybe<Department_Roles_Enum>;
	_nin?: InputMaybe<Array<Department_Roles_Enum>>;
};

/** Ordering options when selecting data from "department_roles". */
export type Department_Roles_Order_By = {
	comment?: InputMaybe<Order_By>;
	value?: InputMaybe<Order_By>;
};

/** select columns of table "department_roles" */
export enum Department_Roles_Select_Column {
	/** column name */
	Comment = "comment",
	/** column name */
	Value = "value",
}

/** Streaming cursor of the table "department_roles" */
export type Department_Roles_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Department_Roles_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Department_Roles_Stream_Cursor_Value_Input = {
	comment?: InputMaybe<Scalars["String"]["input"]>;
	value?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "departments" */
export type Departments = {
	__typename?: "departments";
	budget?: Maybe<Scalars["numeric"]["output"]>;
	created_at: Scalars["timestamptz"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	/** An array relationship */
	employees: Array<User_Departments>;
	/** An array relationship */
	files: Array<Department_Files>;
	id: Scalars["uuid"]["output"];
	name: Scalars["String"]["output"];
	updated_at: Scalars["timestamptz"]["output"];
};

/** columns and relationships of "departments" */
export type DepartmentsEmployeesArgs = {
	distinct_on?: InputMaybe<Array<User_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<User_Departments_Order_By>>;
	where?: InputMaybe<User_Departments_Bool_Exp>;
};

/** columns and relationships of "departments" */
export type DepartmentsFilesArgs = {
	distinct_on?: InputMaybe<Array<Department_Files_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Department_Files_Order_By>>;
	where?: InputMaybe<Department_Files_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "departments". All fields are combined with a logical 'AND'. */
export type Departments_Bool_Exp = {
	_and?: InputMaybe<Array<Departments_Bool_Exp>>;
	_not?: InputMaybe<Departments_Bool_Exp>;
	_or?: InputMaybe<Array<Departments_Bool_Exp>>;
	budget?: InputMaybe<Numeric_Comparison_Exp>;
	created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	description?: InputMaybe<String_Comparison_Exp>;
	employees?: InputMaybe<User_Departments_Bool_Exp>;
	files?: InputMaybe<Department_Files_Bool_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "departments" */
export type Departments_Inc_Input = {
	budget?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** response of any mutation on the table "departments" */
export type Departments_Mutation_Response = {
	__typename?: "departments_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"]["output"];
	/** data from the rows affected by the mutation */
	returning: Array<Departments>;
};

/** Ordering options when selecting data from "departments". */
export type Departments_Order_By = {
	budget?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	description?: InputMaybe<Order_By>;
	employees_aggregate?: InputMaybe<User_Departments_Aggregate_Order_By>;
	files_aggregate?: InputMaybe<Department_Files_Aggregate_Order_By>;
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: departments */
export type Departments_Pk_Columns_Input = {
	id: Scalars["uuid"]["input"];
};

/** select columns of table "departments" */
export enum Departments_Select_Column {
	/** column name */
	Budget = "budget",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	Description = "description",
	/** column name */
	Id = "id",
	/** column name */
	Name = "name",
	/** column name */
	UpdatedAt = "updated_at",
}

/** input type for updating data in table "departments" */
export type Departments_Set_Input = {
	budget?: InputMaybe<Scalars["numeric"]["input"]>;
	created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "departments" */
export type Departments_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Departments_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Departments_Stream_Cursor_Value_Input = {
	budget?: InputMaybe<Scalars["numeric"]["input"]>;
	created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

export type Departments_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Departments_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Departments_Set_Input>;
	/** filter the rows which have to be updated */
	where: Departments_Bool_Exp;
};

/** columns and relationships of "storage.files" */
export type Files = {
	__typename?: "files";
	bucketId: Scalars["String"]["output"];
	createdAt: Scalars["timestamptz"]["output"];
	/** An object relationship */
	department_file?: Maybe<Department_Files>;
	etag?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["uuid"]["output"];
	isUploaded?: Maybe<Scalars["Boolean"]["output"]>;
	metadata?: Maybe<Scalars["jsonb"]["output"]>;
	mimeType?: Maybe<Scalars["String"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	size?: Maybe<Scalars["Int"]["output"]>;
	updatedAt: Scalars["timestamptz"]["output"];
	uploadedByUserId?: Maybe<Scalars["uuid"]["output"]>;
};

/** columns and relationships of "storage.files" */
export type FilesMetadataArgs = {
	path?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
	_and?: InputMaybe<Array<Files_Bool_Exp>>;
	_not?: InputMaybe<Files_Bool_Exp>;
	_or?: InputMaybe<Array<Files_Bool_Exp>>;
	bucketId?: InputMaybe<String_Comparison_Exp>;
	createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
	department_file?: InputMaybe<Department_Files_Bool_Exp>;
	etag?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
	metadata?: InputMaybe<Jsonb_Comparison_Exp>;
	mimeType?: InputMaybe<String_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	size?: InputMaybe<Int_Comparison_Exp>;
	updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
	uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
	/** unique or primary key constraint on columns "id" */
	FilesPkey = "files_pkey",
}

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
	bucketId?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
	department_file?: InputMaybe<Department_Files_Obj_Rel_Insert_Input>;
	etag?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	isUploaded?: InputMaybe<Scalars["Boolean"]["input"]>;
	metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	size?: InputMaybe<Scalars["Int"]["input"]>;
	updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
	__typename?: "files_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"]["output"];
	/** data from the rows affected by the mutation */
	returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
	data: Files_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
	constraint: Files_Constraint;
	update_columns?: Array<Files_Update_Column>;
	where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
	bucketId?: InputMaybe<Order_By>;
	createdAt?: InputMaybe<Order_By>;
	department_file?: InputMaybe<Department_Files_Order_By>;
	etag?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	isUploaded?: InputMaybe<Order_By>;
	metadata?: InputMaybe<Order_By>;
	mimeType?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	size?: InputMaybe<Order_By>;
	updatedAt?: InputMaybe<Order_By>;
	uploadedByUserId?: InputMaybe<Order_By>;
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
	/** column name */
	BucketId = "bucketId",
	/** column name */
	CreatedAt = "createdAt",
	/** column name */
	Etag = "etag",
	/** column name */
	Id = "id",
	/** column name */
	IsUploaded = "isUploaded",
	/** column name */
	Metadata = "metadata",
	/** column name */
	MimeType = "mimeType",
	/** column name */
	Name = "name",
	/** column name */
	Size = "size",
	/** column name */
	UpdatedAt = "updatedAt",
	/** column name */
	UploadedByUserId = "uploadedByUserId",
}

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Files_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
	bucketId?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
	etag?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	isUploaded?: InputMaybe<Scalars["Boolean"]["input"]>;
	metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	size?: InputMaybe<Scalars["Int"]["input"]>;
	updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
	uploadedByUserId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** placeholder for update columns of table "storage.files" (current role has no relevant permissions) */
export enum Files_Update_Column {
	/** placeholder (do not use) */
	Placeholder = "_PLACEHOLDER",
}

export type Jsonb_Cast_Exp = {
	String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
	_cast?: InputMaybe<Jsonb_Cast_Exp>;
	/** is the column contained in the given json value */
	_contained_in?: InputMaybe<Scalars["jsonb"]["input"]>;
	/** does the column contain the given json value at the top level */
	_contains?: InputMaybe<Scalars["jsonb"]["input"]>;
	_eq?: InputMaybe<Scalars["jsonb"]["input"]>;
	_gt?: InputMaybe<Scalars["jsonb"]["input"]>;
	_gte?: InputMaybe<Scalars["jsonb"]["input"]>;
	/** does the string exist as a top-level key in the column */
	_has_key?: InputMaybe<Scalars["String"]["input"]>;
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?: InputMaybe<Array<Scalars["String"]["input"]>>;
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?: InputMaybe<Array<Scalars["String"]["input"]>>;
	_in?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	_lt?: InputMaybe<Scalars["jsonb"]["input"]>;
	_lte?: InputMaybe<Scalars["jsonb"]["input"]>;
	_neq?: InputMaybe<Scalars["jsonb"]["input"]>;
	_nin?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
};

/** mutation root */
export type Mutation_Root = {
	__typename?: "mutation_root";
	/** delete single row from the table: "auth.refresh_tokens" */
	deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
	/** delete data from the table: "auth.refresh_tokens" */
	deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
	/** delete single row from the table: "auth.user_security_keys" */
	deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
	/** delete data from the table: "auth.user_security_keys" */
	deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
	/** delete single row from the table: "storage.files" */
	deleteFile?: Maybe<Files>;
	/** delete data from the table: "storage.files" */
	deleteFiles?: Maybe<Files_Mutation_Response>;
	/** delete data from the table: "department_files" */
	delete_department_files?: Maybe<Department_Files_Mutation_Response>;
	/** delete single row from the table: "department_files" */
	delete_department_files_by_pk?: Maybe<Department_Files>;
	/** delete data from the table: "user_departments" */
	delete_user_departments?: Maybe<User_Departments_Mutation_Response>;
	/** delete single row from the table: "user_departments" */
	delete_user_departments_by_pk?: Maybe<User_Departments>;
	/** insert a single row into the table: "storage.files" */
	insertFile?: Maybe<Files>;
	/** insert data into the table: "storage.files" */
	insertFiles?: Maybe<Files_Mutation_Response>;
	/** insert data into the table: "department_files" */
	insert_department_files?: Maybe<Department_Files_Mutation_Response>;
	/** insert a single row into the table: "department_files" */
	insert_department_files_one?: Maybe<Department_Files>;
	/** insert data into the table: "user_departments" */
	insert_user_departments?: Maybe<User_Departments_Mutation_Response>;
	/** insert a single row into the table: "user_departments" */
	insert_user_departments_one?: Maybe<User_Departments>;
	/** update single row of the table: "auth.users" */
	updateUser?: Maybe<Users>;
	/** update data of the table: "auth.users" */
	updateUsers?: Maybe<Users_Mutation_Response>;
	/** update data of the table: "departments" */
	update_departments?: Maybe<Departments_Mutation_Response>;
	/** update single row of the table: "departments" */
	update_departments_by_pk?: Maybe<Departments>;
	/** update multiples rows of table: "departments" */
	update_departments_many?: Maybe<Array<Maybe<Departments_Mutation_Response>>>;
	/** update data of the table: "user_departments" */
	update_user_departments?: Maybe<User_Departments_Mutation_Response>;
	/** update single row of the table: "user_departments" */
	update_user_departments_by_pk?: Maybe<User_Departments>;
	/** update multiples rows of table: "user_departments" */
	update_user_departments_many?: Maybe<
		Array<Maybe<User_Departments_Mutation_Response>>
	>;
	/** update multiples rows of table: "auth.users" */
	update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
	id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
	where: AuthRefreshTokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
	id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
	where: AuthUserSecurityKeys_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteFileArgs = {
	id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
	where: Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Department_FilesArgs = {
	where: Department_Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Department_Files_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_User_DepartmentsArgs = {
	where: User_Departments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Departments_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootInsertFileArgs = {
	object: Files_Insert_Input;
	on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertFilesArgs = {
	objects: Array<Files_Insert_Input>;
	on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Department_FilesArgs = {
	objects: Array<Department_Files_Insert_Input>;
	on_conflict?: InputMaybe<Department_Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Department_Files_OneArgs = {
	object: Department_Files_Insert_Input;
	on_conflict?: InputMaybe<Department_Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_DepartmentsArgs = {
	objects: Array<User_Departments_Insert_Input>;
	on_conflict?: InputMaybe<User_Departments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Departments_OneArgs = {
	object: User_Departments_Insert_Input;
	on_conflict?: InputMaybe<User_Departments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdateUserArgs = {
	_set?: InputMaybe<Users_Set_Input>;
	pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
	_set?: InputMaybe<Users_Set_Input>;
	where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_DepartmentsArgs = {
	_inc?: InputMaybe<Departments_Inc_Input>;
	_set?: InputMaybe<Departments_Set_Input>;
	where: Departments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Departments_By_PkArgs = {
	_inc?: InputMaybe<Departments_Inc_Input>;
	_set?: InputMaybe<Departments_Set_Input>;
	pk_columns: Departments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Departments_ManyArgs = {
	updates: Array<Departments_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_DepartmentsArgs = {
	_set?: InputMaybe<User_Departments_Set_Input>;
	where: User_Departments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Departments_By_PkArgs = {
	_set?: InputMaybe<User_Departments_Set_Input>;
	pk_columns: User_Departments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Departments_ManyArgs = {
	updates: Array<User_Departments_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
	updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["numeric"]["input"]>;
	_gt?: InputMaybe<Scalars["numeric"]["input"]>;
	_gte?: InputMaybe<Scalars["numeric"]["input"]>;
	_in?: InputMaybe<Array<Scalars["numeric"]["input"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	_lt?: InputMaybe<Scalars["numeric"]["input"]>;
	_lte?: InputMaybe<Scalars["numeric"]["input"]>;
	_neq?: InputMaybe<Scalars["numeric"]["input"]>;
	_nin?: InputMaybe<Array<Scalars["numeric"]["input"]>>;
};

/** column ordering options */
export enum Order_By {
	/** in ascending order, nulls last */
	Asc = "asc",
	/** in ascending order, nulls first */
	AscNullsFirst = "asc_nulls_first",
	/** in ascending order, nulls last */
	AscNullsLast = "asc_nulls_last",
	/** in descending order, nulls first */
	Desc = "desc",
	/** in descending order, nulls first */
	DescNullsFirst = "desc_nulls_first",
	/** in descending order, nulls last */
	DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
	__typename?: "query_root";
	/** fetch data from the table: "auth.refresh_tokens" using primary key columns */
	authRefreshToken?: Maybe<AuthRefreshTokens>;
	/** fetch data from the table: "auth.refresh_tokens" */
	authRefreshTokens: Array<AuthRefreshTokens>;
	/** fetch data from the table: "auth.user_security_keys" using primary key columns */
	authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
	/** fetch data from the table: "auth.user_security_keys" */
	authUserSecurityKeys: Array<AuthUserSecurityKeys>;
	/** fetch data from the table: "department_files" */
	department_files: Array<Department_Files>;
	/** fetch data from the table: "department_files" using primary key columns */
	department_files_by_pk?: Maybe<Department_Files>;
	/** fetch data from the table: "department_roles" */
	department_roles: Array<Department_Roles>;
	/** fetch data from the table: "department_roles" using primary key columns */
	department_roles_by_pk?: Maybe<Department_Roles>;
	/** fetch data from the table: "departments" */
	departments: Array<Departments>;
	/** fetch data from the table: "departments" using primary key columns */
	departments_by_pk?: Maybe<Departments>;
	/** fetch data from the table: "storage.files" using primary key columns */
	file?: Maybe<Files>;
	/** fetch data from the table: "storage.files" */
	files: Array<Files>;
	/** fetch data from the table: "auth.users" using primary key columns */
	user?: Maybe<Users>;
	/** fetch data from the table: "user_departments" */
	user_departments: Array<User_Departments>;
	/** fetch data from the table: "user_departments" using primary key columns */
	user_departments_by_pk?: Maybe<User_Departments>;
	/** fetch data from the table: "auth.users" */
	users: Array<Users>;
};

export type Query_RootAuthRefreshTokenArgs = {
	id: Scalars["uuid"]["input"];
};

export type Query_RootAuthRefreshTokensArgs = {
	distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
	where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Query_RootAuthUserSecurityKeyArgs = {
	id: Scalars["uuid"]["input"];
};

export type Query_RootAuthUserSecurityKeysArgs = {
	distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
	where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Query_RootDepartment_FilesArgs = {
	distinct_on?: InputMaybe<Array<Department_Files_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Department_Files_Order_By>>;
	where?: InputMaybe<Department_Files_Bool_Exp>;
};

export type Query_RootDepartment_Files_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

export type Query_RootDepartment_RolesArgs = {
	distinct_on?: InputMaybe<Array<Department_Roles_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Department_Roles_Order_By>>;
	where?: InputMaybe<Department_Roles_Bool_Exp>;
};

export type Query_RootDepartment_Roles_By_PkArgs = {
	value: Scalars["String"]["input"];
};

export type Query_RootDepartmentsArgs = {
	distinct_on?: InputMaybe<Array<Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Departments_Order_By>>;
	where?: InputMaybe<Departments_Bool_Exp>;
};

export type Query_RootDepartments_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

export type Query_RootFileArgs = {
	id: Scalars["uuid"]["input"];
};

export type Query_RootFilesArgs = {
	distinct_on?: InputMaybe<Array<Files_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Files_Order_By>>;
	where?: InputMaybe<Files_Bool_Exp>;
};

export type Query_RootUserArgs = {
	id: Scalars["uuid"]["input"];
};

export type Query_RootUser_DepartmentsArgs = {
	distinct_on?: InputMaybe<Array<User_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<User_Departments_Order_By>>;
	where?: InputMaybe<User_Departments_Bool_Exp>;
};

export type Query_RootUser_Departments_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

export type Query_RootUsersArgs = {
	distinct_on?: InputMaybe<Array<Users_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Users_Order_By>>;
	where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
	__typename?: "subscription_root";
	/** fetch data from the table: "auth.refresh_tokens" using primary key columns */
	authRefreshToken?: Maybe<AuthRefreshTokens>;
	/** fetch data from the table: "auth.refresh_tokens" */
	authRefreshTokens: Array<AuthRefreshTokens>;
	/** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
	authRefreshTokens_stream: Array<AuthRefreshTokens>;
	/** fetch data from the table: "auth.user_security_keys" using primary key columns */
	authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
	/** fetch data from the table: "auth.user_security_keys" */
	authUserSecurityKeys: Array<AuthUserSecurityKeys>;
	/** fetch data from the table in a streaming manner: "auth.user_security_keys" */
	authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
	/** fetch data from the table: "department_files" */
	department_files: Array<Department_Files>;
	/** fetch data from the table: "department_files" using primary key columns */
	department_files_by_pk?: Maybe<Department_Files>;
	/** fetch data from the table in a streaming manner: "department_files" */
	department_files_stream: Array<Department_Files>;
	/** fetch data from the table: "department_roles" */
	department_roles: Array<Department_Roles>;
	/** fetch data from the table: "department_roles" using primary key columns */
	department_roles_by_pk?: Maybe<Department_Roles>;
	/** fetch data from the table in a streaming manner: "department_roles" */
	department_roles_stream: Array<Department_Roles>;
	/** fetch data from the table: "departments" */
	departments: Array<Departments>;
	/** fetch data from the table: "departments" using primary key columns */
	departments_by_pk?: Maybe<Departments>;
	/** fetch data from the table in a streaming manner: "departments" */
	departments_stream: Array<Departments>;
	/** fetch data from the table: "storage.files" using primary key columns */
	file?: Maybe<Files>;
	/** fetch data from the table: "storage.files" */
	files: Array<Files>;
	/** fetch data from the table in a streaming manner: "storage.files" */
	files_stream: Array<Files>;
	/** fetch data from the table: "auth.users" using primary key columns */
	user?: Maybe<Users>;
	/** fetch data from the table: "user_departments" */
	user_departments: Array<User_Departments>;
	/** fetch data from the table: "user_departments" using primary key columns */
	user_departments_by_pk?: Maybe<User_Departments>;
	/** fetch data from the table in a streaming manner: "user_departments" */
	user_departments_stream: Array<User_Departments>;
	/** fetch data from the table: "auth.users" */
	users: Array<Users>;
	/** fetch data from the table in a streaming manner: "auth.users" */
	users_stream: Array<Users>;
};

export type Subscription_RootAuthRefreshTokenArgs = {
	id: Scalars["uuid"]["input"];
};

export type Subscription_RootAuthRefreshTokensArgs = {
	distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
	where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Subscription_RootAuthRefreshTokens_StreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
	where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Subscription_RootAuthUserSecurityKeyArgs = {
	id: Scalars["uuid"]["input"];
};

export type Subscription_RootAuthUserSecurityKeysArgs = {
	distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
	where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
	where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Subscription_RootDepartment_FilesArgs = {
	distinct_on?: InputMaybe<Array<Department_Files_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Department_Files_Order_By>>;
	where?: InputMaybe<Department_Files_Bool_Exp>;
};

export type Subscription_RootDepartment_Files_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

export type Subscription_RootDepartment_Files_StreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<Department_Files_Stream_Cursor_Input>>;
	where?: InputMaybe<Department_Files_Bool_Exp>;
};

export type Subscription_RootDepartment_RolesArgs = {
	distinct_on?: InputMaybe<Array<Department_Roles_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Department_Roles_Order_By>>;
	where?: InputMaybe<Department_Roles_Bool_Exp>;
};

export type Subscription_RootDepartment_Roles_By_PkArgs = {
	value: Scalars["String"]["input"];
};

export type Subscription_RootDepartment_Roles_StreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<Department_Roles_Stream_Cursor_Input>>;
	where?: InputMaybe<Department_Roles_Bool_Exp>;
};

export type Subscription_RootDepartmentsArgs = {
	distinct_on?: InputMaybe<Array<Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Departments_Order_By>>;
	where?: InputMaybe<Departments_Bool_Exp>;
};

export type Subscription_RootDepartments_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

export type Subscription_RootDepartments_StreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<Departments_Stream_Cursor_Input>>;
	where?: InputMaybe<Departments_Bool_Exp>;
};

export type Subscription_RootFileArgs = {
	id: Scalars["uuid"]["input"];
};

export type Subscription_RootFilesArgs = {
	distinct_on?: InputMaybe<Array<Files_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Files_Order_By>>;
	where?: InputMaybe<Files_Bool_Exp>;
};

export type Subscription_RootFiles_StreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
	where?: InputMaybe<Files_Bool_Exp>;
};

export type Subscription_RootUserArgs = {
	id: Scalars["uuid"]["input"];
};

export type Subscription_RootUser_DepartmentsArgs = {
	distinct_on?: InputMaybe<Array<User_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<User_Departments_Order_By>>;
	where?: InputMaybe<User_Departments_Bool_Exp>;
};

export type Subscription_RootUser_Departments_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

export type Subscription_RootUser_Departments_StreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<User_Departments_Stream_Cursor_Input>>;
	where?: InputMaybe<User_Departments_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
	distinct_on?: InputMaybe<Array<Users_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Users_Order_By>>;
	where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_StreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
	where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
	_gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
	_gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
	_in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	_lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
	_lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
	_neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
	_nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** columns and relationships of "user_departments" */
export type User_Departments = {
	__typename?: "user_departments";
	/** An object relationship */
	department: Departments;
	department_id: Scalars["uuid"]["output"];
	id: Scalars["uuid"]["output"];
	is_active: Scalars["Boolean"]["output"];
	joined_at: Scalars["timestamptz"]["output"];
	role?: Maybe<Department_Roles_Enum>;
	/** An object relationship */
	user: Users;
	user_id: Scalars["uuid"]["output"];
};

/** order by aggregate values of table "user_departments" */
export type User_Departments_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<User_Departments_Max_Order_By>;
	min?: InputMaybe<User_Departments_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "user_departments". All fields are combined with a logical 'AND'. */
export type User_Departments_Bool_Exp = {
	_and?: InputMaybe<Array<User_Departments_Bool_Exp>>;
	_not?: InputMaybe<User_Departments_Bool_Exp>;
	_or?: InputMaybe<Array<User_Departments_Bool_Exp>>;
	department?: InputMaybe<Departments_Bool_Exp>;
	department_id?: InputMaybe<Uuid_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	is_active?: InputMaybe<Boolean_Comparison_Exp>;
	joined_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	role?: InputMaybe<Department_Roles_Enum_Comparison_Exp>;
	user?: InputMaybe<Users_Bool_Exp>;
	user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_departments" */
export enum User_Departments_Constraint {
	/** unique or primary key constraint on columns "id" */
	UserDepartmentsPkey = "user_departments_pkey",
	/** unique or primary key constraint on columns "user_id", "department_id" */
	UserDepartmentsUserIdDepartmentIdKey = "user_departments_user_id_department_id_key",
}

/** input type for inserting data into table "user_departments" */
export type User_Departments_Insert_Input = {
	department_id?: InputMaybe<Scalars["uuid"]["input"]>;
	is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
	role?: InputMaybe<Department_Roles_Enum>;
	user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** order by max() on columns of table "user_departments" */
export type User_Departments_Max_Order_By = {
	department_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	joined_at?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "user_departments" */
export type User_Departments_Min_Order_By = {
	department_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	joined_at?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_departments" */
export type User_Departments_Mutation_Response = {
	__typename?: "user_departments_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"]["output"];
	/** data from the rows affected by the mutation */
	returning: Array<User_Departments>;
};

/** on_conflict condition type for table "user_departments" */
export type User_Departments_On_Conflict = {
	constraint: User_Departments_Constraint;
	update_columns?: Array<User_Departments_Update_Column>;
	where?: InputMaybe<User_Departments_Bool_Exp>;
};

/** Ordering options when selecting data from "user_departments". */
export type User_Departments_Order_By = {
	department?: InputMaybe<Departments_Order_By>;
	department_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	is_active?: InputMaybe<Order_By>;
	joined_at?: InputMaybe<Order_By>;
	role?: InputMaybe<Order_By>;
	user?: InputMaybe<Users_Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_departments */
export type User_Departments_Pk_Columns_Input = {
	id: Scalars["uuid"]["input"];
};

/** select columns of table "user_departments" */
export enum User_Departments_Select_Column {
	/** column name */
	DepartmentId = "department_id",
	/** column name */
	Id = "id",
	/** column name */
	IsActive = "is_active",
	/** column name */
	JoinedAt = "joined_at",
	/** column name */
	Role = "role",
	/** column name */
	UserId = "user_id",
}

/** input type for updating data in table "user_departments" */
export type User_Departments_Set_Input = {
	is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
	role?: InputMaybe<Department_Roles_Enum>;
};

/** Streaming cursor of the table "user_departments" */
export type User_Departments_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: User_Departments_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Departments_Stream_Cursor_Value_Input = {
	department_id?: InputMaybe<Scalars["uuid"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
	joined_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
	role?: InputMaybe<Department_Roles_Enum>;
	user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "user_departments" */
export enum User_Departments_Update_Column {
	/** column name */
	IsActive = "is_active",
	/** column name */
	Role = "role",
}

export type User_Departments_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<User_Departments_Set_Input>;
	/** filter the rows which have to be updated */
	where: User_Departments_Bool_Exp;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
	__typename?: "users";
	avatarUrl: Scalars["String"]["output"];
	createdAt: Scalars["timestamptz"]["output"];
	/** An array relationship */
	departments: Array<User_Departments>;
	displayName: Scalars["String"]["output"];
	email?: Maybe<Scalars["citext"]["output"]>;
	emailVerified: Scalars["Boolean"]["output"];
	id: Scalars["uuid"]["output"];
	locale: Scalars["String"]["output"];
	/** An array relationship */
	refreshTokens: Array<AuthRefreshTokens>;
	/** An array relationship */
	securityKeys: Array<AuthUserSecurityKeys>;
	updatedAt: Scalars["timestamptz"]["output"];
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersDepartmentsArgs = {
	distinct_on?: InputMaybe<Array<User_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<User_Departments_Order_By>>;
	where?: InputMaybe<User_Departments_Bool_Exp>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
	distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
	where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
	distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
	where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
	_and?: InputMaybe<Array<Users_Bool_Exp>>;
	_not?: InputMaybe<Users_Bool_Exp>;
	_or?: InputMaybe<Array<Users_Bool_Exp>>;
	avatarUrl?: InputMaybe<String_Comparison_Exp>;
	createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
	departments?: InputMaybe<User_Departments_Bool_Exp>;
	displayName?: InputMaybe<String_Comparison_Exp>;
	email?: InputMaybe<Citext_Comparison_Exp>;
	emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	locale?: InputMaybe<String_Comparison_Exp>;
	refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
	securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
	updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
	__typename?: "users_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"]["output"];
	/** data from the rows affected by the mutation */
	returning: Array<Users>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
	avatarUrl?: InputMaybe<Order_By>;
	createdAt?: InputMaybe<Order_By>;
	departments_aggregate?: InputMaybe<User_Departments_Aggregate_Order_By>;
	displayName?: InputMaybe<Order_By>;
	email?: InputMaybe<Order_By>;
	emailVerified?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	locale?: InputMaybe<Order_By>;
	refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
	securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
	updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
	id: Scalars["uuid"]["input"];
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
	/** column name */
	AvatarUrl = "avatarUrl",
	/** column name */
	CreatedAt = "createdAt",
	/** column name */
	DisplayName = "displayName",
	/** column name */
	Email = "email",
	/** column name */
	EmailVerified = "emailVerified",
	/** column name */
	Id = "id",
	/** column name */
	Locale = "locale",
	/** column name */
	UpdatedAt = "updatedAt",
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
	avatarUrl?: InputMaybe<Scalars["String"]["input"]>;
	displayName?: InputMaybe<Scalars["String"]["input"]>;
	locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Users_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
	avatarUrl?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
	displayName?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["citext"]["input"]>;
	emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	locale?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

export type Users_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Users_Set_Input>;
	/** filter the rows which have to be updated */
	where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["uuid"]["input"]>;
	_gt?: InputMaybe<Scalars["uuid"]["input"]>;
	_gte?: InputMaybe<Scalars["uuid"]["input"]>;
	_in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
	_lt?: InputMaybe<Scalars["uuid"]["input"]>;
	_lte?: InputMaybe<Scalars["uuid"]["input"]>;
	_neq?: InputMaybe<Scalars["uuid"]["input"]>;
	_nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

export type UpdateUserDisplayNameMutationVariables = Exact<{
	userId: Scalars["uuid"]["input"];
	displayName: Scalars["String"]["input"];
}>;

export type UpdateUserDisplayNameMutation = {
	__typename?: "mutation_root";
	updateUser?: {
		__typename?: "users";
		id: string;
		displayName: string;
		email?: string | null;
		avatarUrl: string;
		updatedAt: string;
	} | null;
};

export type UpdateUserAvatarUrlMutationVariables = Exact<{
	userId: Scalars["uuid"]["input"];
	avatarUrl: Scalars["String"]["input"];
}>;

export type UpdateUserAvatarUrlMutation = {
	__typename?: "mutation_root";
	updateUser?: {
		__typename?: "users";
		id: string;
		displayName: string;
		email?: string | null;
		avatarUrl: string;
		updatedAt: string;
	} | null;
};

export type GetCurrentUserQueryVariables = Exact<{
	userId: Scalars["uuid"]["input"];
}>;

export type GetCurrentUserQuery = {
	__typename?: "query_root";
	user?: {
		__typename?: "users";
		id: string;
		displayName: string;
		email?: string | null;
		avatarUrl: string;
		createdAt: string;
		securityKeys: Array<{
			__typename?: "authUserSecurityKeys";
			id: string;
			nickname?: string | null;
			credentialId: string;
			transports: string;
			counter: number;
		}>;
	} | null;
};

export type GetUserSecurityKeysQueryVariables = Exact<{
	userId: Scalars["uuid"]["input"];
}>;

export type GetUserSecurityKeysQuery = {
	__typename?: "query_root";
	authUserSecurityKeys: Array<{
		__typename?: "authUserSecurityKeys";
		id: string;
		nickname?: string | null;
		credentialId: string;
		transports: string;
		counter: number;
	}>;
};

export type DeleteSecurityKeyMutationVariables = Exact<{
	keyId: Scalars["uuid"]["input"];
}>;

export type DeleteSecurityKeyMutation = {
	__typename?: "mutation_root";
	deleteAuthUserSecurityKey?: {
		__typename?: "authUserSecurityKeys";
		id: string;
		nickname?: string | null;
	} | null;
};

export type GetUserDepartmentsQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserDepartmentsQuery = {
	__typename?: "query_root";
	departments: Array<{
		__typename?: "departments";
		id: string;
		name: string;
		description?: string | null;
		budget?: any | null;
		created_at: string;
		updated_at: string;
		employees: Array<{
			__typename?: "user_departments";
			id: string;
			role?: Department_Roles_Enum | null;
			joined_at: string;
			user: {
				__typename?: "users";
				id: string;
				displayName: string;
				email?: string | null;
				avatarUrl: string;
			};
		}>;
	}>;
};

export type GetDepartmentDetailsQueryVariables = Exact<{
	departmentId: Scalars["uuid"]["input"];
}>;

export type GetDepartmentDetailsQuery = {
	__typename?: "query_root";
	departments_by_pk?: {
		__typename?: "departments";
		id: string;
		name: string;
		description?: string | null;
		budget?: any | null;
		created_at: string;
		updated_at: string;
		employees: Array<{
			__typename?: "user_departments";
			id: string;
			role?: Department_Roles_Enum | null;
			joined_at: string;
			user: {
				__typename?: "users";
				id: string;
				displayName: string;
				email?: string | null;
				avatarUrl: string;
			};
		}>;
	} | null;
};

export type UpdateDepartmentMutationVariables = Exact<{
	departmentId: Scalars["uuid"]["input"];
	name?: InputMaybe<Scalars["String"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	budget?: InputMaybe<Scalars["numeric"]["input"]>;
}>;

export type UpdateDepartmentMutation = {
	__typename?: "mutation_root";
	update_departments_by_pk?: {
		__typename?: "departments";
		id: string;
		name: string;
		description?: string | null;
		budget?: any | null;
		updated_at: string;
	} | null;
};

export type SearchUsersQueryVariables = Exact<{
	searchName: Scalars["String"]["input"];
	searchEmail: Scalars["citext"]["input"];
}>;

export type SearchUsersQuery = {
	__typename?: "query_root";
	users: Array<{
		__typename?: "users";
		id: string;
		displayName: string;
		email?: string | null;
		avatarUrl: string;
	}>;
};

export type AddDepartmentMemberMutationVariables = Exact<{
	userId: Scalars["uuid"]["input"];
	departmentId: Scalars["uuid"]["input"];
	role: Department_Roles_Enum;
}>;

export type AddDepartmentMemberMutation = {
	__typename?: "mutation_root";
	insert_user_departments_one?: {
		__typename?: "user_departments";
		id: string;
		role?: Department_Roles_Enum | null;
		joined_at: string;
		user: {
			__typename?: "users";
			id: string;
			displayName: string;
			email?: string | null;
			avatarUrl: string;
		};
	} | null;
};

export type RemoveDepartmentMemberMutationVariables = Exact<{
	membershipId: Scalars["uuid"]["input"];
}>;

export type RemoveDepartmentMemberMutation = {
	__typename?: "mutation_root";
	update_user_departments_by_pk?: {
		__typename?: "user_departments";
		id: string;
		is_active: boolean;
	} | null;
};

export type UpdateMemberRoleMutationVariables = Exact<{
	membershipId: Scalars["uuid"]["input"];
	role: Department_Roles_Enum;
}>;

export type UpdateMemberRoleMutation = {
	__typename?: "mutation_root";
	update_user_departments_by_pk?: {
		__typename?: "user_departments";
		id: string;
		role?: Department_Roles_Enum | null;
		user: {
			__typename?: "users";
			id: string;
			displayName: string;
			email?: string | null;
			avatarUrl: string;
		};
	} | null;
};

export type GetAllFilesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllFilesQuery = {
	__typename?: "query_root";
	files: Array<{
		__typename?: "files";
		id: string;
		name?: string | null;
		size?: number | null;
		mimeType?: string | null;
		createdAt: string;
		uploadedByUserId?: string | null;
	}>;
};

export type GetDepartmentFilesQueryVariables = Exact<{ [key: string]: never }>;

export type GetDepartmentFilesQuery = {
	__typename?: "query_root";
	department_files: Array<{
		__typename?: "department_files";
		id: string;
		file_id: string;
		department_id: string;
		file: {
			__typename?: "files";
			id: string;
			name?: string | null;
			size?: number | null;
			mimeType?: string | null;
			createdAt: string;
			uploadedByUserId?: string | null;
		};
		department: { __typename?: "departments"; id: string; name: string };
	}>;
};

export type GetUserFilesQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserFilesQuery = {
	__typename?: "query_root";
	files: Array<{
		__typename?: "files";
		id: string;
		name?: string | null;
		size?: number | null;
		mimeType?: string | null;
		createdAt: string;
		uploadedByUserId?: string | null;
	}>;
};

export type AddDepartmentFileMutationVariables = Exact<{
	fileId: Scalars["uuid"]["input"];
	departmentId: Scalars["uuid"]["input"];
}>;

export type AddDepartmentFileMutation = {
	__typename?: "mutation_root";
	insert_department_files?: {
		__typename?: "department_files_mutation_response";
		affected_rows: number;
	} | null;
};

export type RemoveDepartmentFileMutationVariables = Exact<{
	fileId: Scalars["uuid"]["input"];
	departmentId: Scalars["uuid"]["input"];
}>;

export type RemoveDepartmentFileMutation = {
	__typename?: "mutation_root";
	delete_department_files?: {
		__typename?: "department_files_mutation_response";
		affected_rows: number;
	} | null;
};

export const UpdateUserDisplayNameDocument = `
    mutation UpdateUserDisplayName($userId: uuid!, $displayName: String!) {
  updateUser(pk_columns: {id: $userId}, _set: {displayName: $displayName}) {
    id
    displayName
    email
    avatarUrl
    updatedAt
  }
}
    `;

export const useUpdateUserDisplayNameMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		UpdateUserDisplayNameMutation,
		TError,
		UpdateUserDisplayNameMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		UpdateUserDisplayNameMutation,
		TError,
		UpdateUserDisplayNameMutationVariables,
		TContext
	>({
		mutationKey: ["UpdateUserDisplayName"],
		mutationFn: useAuthenticatedFetcher<
			UpdateUserDisplayNameMutation,
			UpdateUserDisplayNameMutationVariables
		>(UpdateUserDisplayNameDocument),
		...options,
	});
};

export const UpdateUserAvatarUrlDocument = `
    mutation UpdateUserAvatarUrl($userId: uuid!, $avatarUrl: String!) {
  updateUser(pk_columns: {id: $userId}, _set: {avatarUrl: $avatarUrl}) {
    id
    displayName
    email
    avatarUrl
    updatedAt
  }
}
    `;

export const useUpdateUserAvatarUrlMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		UpdateUserAvatarUrlMutation,
		TError,
		UpdateUserAvatarUrlMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		UpdateUserAvatarUrlMutation,
		TError,
		UpdateUserAvatarUrlMutationVariables,
		TContext
	>({
		mutationKey: ["UpdateUserAvatarUrl"],
		mutationFn: useAuthenticatedFetcher<
			UpdateUserAvatarUrlMutation,
			UpdateUserAvatarUrlMutationVariables
		>(UpdateUserAvatarUrlDocument),
		...options,
	});
};

export const GetCurrentUserDocument = `
    query GetCurrentUser($userId: uuid!) {
  user(id: $userId) {
    id
    displayName
    email
    avatarUrl
    createdAt
    securityKeys {
      id
      nickname
      credentialId
      transports
      counter
    }
  }
}
    `;

export const useGetCurrentUserQuery = <
	TData = GetCurrentUserQuery,
	TError = unknown,
>(
	variables: GetCurrentUserQueryVariables,
	options?: Omit<
		UseQueryOptions<GetCurrentUserQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<GetCurrentUserQuery, TError, TData>["queryKey"];
	},
) => {
	return useQuery<GetCurrentUserQuery, TError, TData>({
		queryKey: ["GetCurrentUser", variables],
		queryFn: useAuthenticatedFetcher<
			GetCurrentUserQuery,
			GetCurrentUserQueryVariables
		>(GetCurrentUserDocument).bind(null, variables),
		...options,
	});
};

useGetCurrentUserQuery.getKey = (variables: GetCurrentUserQueryVariables) => [
	"GetCurrentUser",
	variables,
];

export const GetUserSecurityKeysDocument = `
    query GetUserSecurityKeys($userId: uuid!) {
  authUserSecurityKeys(where: {userId: {_eq: $userId}}, order_by: {nickname: asc}) {
    id
    nickname
    credentialId
    transports
    counter
  }
}
    `;

export const useGetUserSecurityKeysQuery = <
	TData = GetUserSecurityKeysQuery,
	TError = unknown,
>(
	variables: GetUserSecurityKeysQueryVariables,
	options?: Omit<
		UseQueryOptions<GetUserSecurityKeysQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetUserSecurityKeysQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetUserSecurityKeysQuery, TError, TData>({
		queryKey: ["GetUserSecurityKeys", variables],
		queryFn: useAuthenticatedFetcher<
			GetUserSecurityKeysQuery,
			GetUserSecurityKeysQueryVariables
		>(GetUserSecurityKeysDocument).bind(null, variables),
		...options,
	});
};

useGetUserSecurityKeysQuery.getKey = (
	variables: GetUserSecurityKeysQueryVariables,
) => ["GetUserSecurityKeys", variables];

export const DeleteSecurityKeyDocument = `
    mutation DeleteSecurityKey($keyId: uuid!) {
  deleteAuthUserSecurityKey(id: $keyId) {
    id
    nickname
  }
}
    `;

export const useDeleteSecurityKeyMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		DeleteSecurityKeyMutation,
		TError,
		DeleteSecurityKeyMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		DeleteSecurityKeyMutation,
		TError,
		DeleteSecurityKeyMutationVariables,
		TContext
	>({
		mutationKey: ["DeleteSecurityKey"],
		mutationFn: useAuthenticatedFetcher<
			DeleteSecurityKeyMutation,
			DeleteSecurityKeyMutationVariables
		>(DeleteSecurityKeyDocument),
		...options,
	});
};

export const GetUserDepartmentsDocument = `
    query GetUserDepartments {
  departments {
    id
    name
    description
    budget
    created_at
    updated_at
    employees(where: {is_active: {_eq: true}}) {
      id
      role
      joined_at
      user {
        id
        displayName
        email
        avatarUrl
      }
    }
  }
}
    `;

export const useGetUserDepartmentsQuery = <
	TData = GetUserDepartmentsQuery,
	TError = unknown,
>(
	variables?: GetUserDepartmentsQueryVariables,
	options?: Omit<
		UseQueryOptions<GetUserDepartmentsQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetUserDepartmentsQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetUserDepartmentsQuery, TError, TData>({
		queryKey:
			variables === undefined
				? ["GetUserDepartments"]
				: ["GetUserDepartments", variables],
		queryFn: useAuthenticatedFetcher<
			GetUserDepartmentsQuery,
			GetUserDepartmentsQueryVariables
		>(GetUserDepartmentsDocument).bind(null, variables),
		...options,
	});
};

useGetUserDepartmentsQuery.getKey = (
	variables?: GetUserDepartmentsQueryVariables,
) =>
	variables === undefined
		? ["GetUserDepartments"]
		: ["GetUserDepartments", variables];

export const GetDepartmentDetailsDocument = `
    query GetDepartmentDetails($departmentId: uuid!) {
  departments_by_pk(id: $departmentId) {
    id
    name
    description
    budget
    created_at
    updated_at
    employees(
      where: {is_active: {_eq: true}}
      order_by: {role: desc, joined_at: asc}
    ) {
      id
      role
      joined_at
      user {
        id
        displayName
        email
        avatarUrl
      }
    }
  }
}
    `;

export const useGetDepartmentDetailsQuery = <
	TData = GetDepartmentDetailsQuery,
	TError = unknown,
>(
	variables: GetDepartmentDetailsQueryVariables,
	options?: Omit<
		UseQueryOptions<GetDepartmentDetailsQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetDepartmentDetailsQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetDepartmentDetailsQuery, TError, TData>({
		queryKey: ["GetDepartmentDetails", variables],
		queryFn: useAuthenticatedFetcher<
			GetDepartmentDetailsQuery,
			GetDepartmentDetailsQueryVariables
		>(GetDepartmentDetailsDocument).bind(null, variables),
		...options,
	});
};

useGetDepartmentDetailsQuery.getKey = (
	variables: GetDepartmentDetailsQueryVariables,
) => ["GetDepartmentDetails", variables];

export const UpdateDepartmentDocument = `
    mutation UpdateDepartment($departmentId: uuid!, $name: String, $description: String, $budget: numeric) {
  update_departments_by_pk(
    pk_columns: {id: $departmentId}
    _set: {name: $name, description: $description, budget: $budget}
  ) {
    id
    name
    description
    budget
    updated_at
  }
}
    `;

export const useUpdateDepartmentMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		UpdateDepartmentMutation,
		TError,
		UpdateDepartmentMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		UpdateDepartmentMutation,
		TError,
		UpdateDepartmentMutationVariables,
		TContext
	>({
		mutationKey: ["UpdateDepartment"],
		mutationFn: useAuthenticatedFetcher<
			UpdateDepartmentMutation,
			UpdateDepartmentMutationVariables
		>(UpdateDepartmentDocument),
		...options,
	});
};

export const SearchUsersDocument = `
    query SearchUsers($searchName: String!, $searchEmail: citext!) {
  users(
    where: {_or: [{displayName: {_ilike: $searchName}}, {email: {_ilike: $searchEmail}}]}
    limit: 10
  ) {
    id
    displayName
    email
    avatarUrl
  }
}
    `;

export const useSearchUsersQuery = <TData = SearchUsersQuery, TError = unknown>(
	variables: SearchUsersQueryVariables,
	options?: Omit<
		UseQueryOptions<SearchUsersQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<SearchUsersQuery, TError, TData>["queryKey"];
	},
) => {
	return useQuery<SearchUsersQuery, TError, TData>({
		queryKey: ["SearchUsers", variables],
		queryFn: useAuthenticatedFetcher<
			SearchUsersQuery,
			SearchUsersQueryVariables
		>(SearchUsersDocument).bind(null, variables),
		...options,
	});
};

useSearchUsersQuery.getKey = (variables: SearchUsersQueryVariables) => [
	"SearchUsers",
	variables,
];

export const AddDepartmentMemberDocument = `
    mutation AddDepartmentMember($userId: uuid!, $departmentId: uuid!, $role: department_roles_enum!) {
  insert_user_departments_one(
    object: {user_id: $userId, department_id: $departmentId, role: $role, is_active: true}
  ) {
    id
    role
    joined_at
    user {
      id
      displayName
      email
      avatarUrl
    }
  }
}
    `;

export const useAddDepartmentMemberMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		AddDepartmentMemberMutation,
		TError,
		AddDepartmentMemberMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		AddDepartmentMemberMutation,
		TError,
		AddDepartmentMemberMutationVariables,
		TContext
	>({
		mutationKey: ["AddDepartmentMember"],
		mutationFn: useAuthenticatedFetcher<
			AddDepartmentMemberMutation,
			AddDepartmentMemberMutationVariables
		>(AddDepartmentMemberDocument),
		...options,
	});
};

export const RemoveDepartmentMemberDocument = `
    mutation RemoveDepartmentMember($membershipId: uuid!) {
  update_user_departments_by_pk(
    pk_columns: {id: $membershipId}
    _set: {is_active: false}
  ) {
    id
    is_active
  }
}
    `;

export const useRemoveDepartmentMemberMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		RemoveDepartmentMemberMutation,
		TError,
		RemoveDepartmentMemberMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		RemoveDepartmentMemberMutation,
		TError,
		RemoveDepartmentMemberMutationVariables,
		TContext
	>({
		mutationKey: ["RemoveDepartmentMember"],
		mutationFn: useAuthenticatedFetcher<
			RemoveDepartmentMemberMutation,
			RemoveDepartmentMemberMutationVariables
		>(RemoveDepartmentMemberDocument),
		...options,
	});
};

export const UpdateMemberRoleDocument = `
    mutation UpdateMemberRole($membershipId: uuid!, $role: department_roles_enum!) {
  update_user_departments_by_pk(
    pk_columns: {id: $membershipId}
    _set: {role: $role}
  ) {
    id
    role
    user {
      id
      displayName
      email
      avatarUrl
    }
  }
}
    `;

export const useUpdateMemberRoleMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		UpdateMemberRoleMutation,
		TError,
		UpdateMemberRoleMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		UpdateMemberRoleMutation,
		TError,
		UpdateMemberRoleMutationVariables,
		TContext
	>({
		mutationKey: ["UpdateMemberRole"],
		mutationFn: useAuthenticatedFetcher<
			UpdateMemberRoleMutation,
			UpdateMemberRoleMutationVariables
		>(UpdateMemberRoleDocument),
		...options,
	});
};

export const GetAllFilesDocument = `
    query GetAllFiles {
  files(order_by: {createdAt: desc}) {
    id
    name
    size
    mimeType
    createdAt
    uploadedByUserId
  }
}
    `;

export const useGetAllFilesQuery = <TData = GetAllFilesQuery, TError = unknown>(
	variables?: GetAllFilesQueryVariables,
	options?: Omit<
		UseQueryOptions<GetAllFilesQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<GetAllFilesQuery, TError, TData>["queryKey"];
	},
) => {
	return useQuery<GetAllFilesQuery, TError, TData>({
		queryKey:
			variables === undefined ? ["GetAllFiles"] : ["GetAllFiles", variables],
		queryFn: useAuthenticatedFetcher<
			GetAllFilesQuery,
			GetAllFilesQueryVariables
		>(GetAllFilesDocument).bind(null, variables),
		...options,
	});
};

useGetAllFilesQuery.getKey = (variables?: GetAllFilesQueryVariables) =>
	variables === undefined ? ["GetAllFiles"] : ["GetAllFiles", variables];

export const GetDepartmentFilesDocument = `
    query GetDepartmentFiles {
  department_files {
    id
    file_id
    department_id
    file {
      id
      name
      size
      mimeType
      createdAt
      uploadedByUserId
    }
    department {
      id
      name
    }
  }
}
    `;

export const useGetDepartmentFilesQuery = <
	TData = GetDepartmentFilesQuery,
	TError = unknown,
>(
	variables?: GetDepartmentFilesQueryVariables,
	options?: Omit<
		UseQueryOptions<GetDepartmentFilesQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetDepartmentFilesQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetDepartmentFilesQuery, TError, TData>({
		queryKey:
			variables === undefined
				? ["GetDepartmentFiles"]
				: ["GetDepartmentFiles", variables],
		queryFn: useAuthenticatedFetcher<
			GetDepartmentFilesQuery,
			GetDepartmentFilesQueryVariables
		>(GetDepartmentFilesDocument).bind(null, variables),
		...options,
	});
};

useGetDepartmentFilesQuery.getKey = (
	variables?: GetDepartmentFilesQueryVariables,
) =>
	variables === undefined
		? ["GetDepartmentFiles"]
		: ["GetDepartmentFiles", variables];

export const GetUserFilesDocument = `
    query GetUserFiles {
  files(
    where: {uploadedByUserId: {_eq: "X-Hasura-User-Id"}}
    order_by: {createdAt: desc}
  ) {
    id
    name
    size
    mimeType
    createdAt
    uploadedByUserId
  }
}
    `;

export const useGetUserFilesQuery = <
	TData = GetUserFilesQuery,
	TError = unknown,
>(
	variables?: GetUserFilesQueryVariables,
	options?: Omit<
		UseQueryOptions<GetUserFilesQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<GetUserFilesQuery, TError, TData>["queryKey"];
	},
) => {
	return useQuery<GetUserFilesQuery, TError, TData>({
		queryKey:
			variables === undefined ? ["GetUserFiles"] : ["GetUserFiles", variables],
		queryFn: useAuthenticatedFetcher<
			GetUserFilesQuery,
			GetUserFilesQueryVariables
		>(GetUserFilesDocument).bind(null, variables),
		...options,
	});
};

useGetUserFilesQuery.getKey = (variables?: GetUserFilesQueryVariables) =>
	variables === undefined ? ["GetUserFiles"] : ["GetUserFiles", variables];

export const AddDepartmentFileDocument = `
    mutation AddDepartmentFile($fileId: uuid!, $departmentId: uuid!) {
  insert_department_files(
    objects: [{file_id: $fileId, department_id: $departmentId}]
  ) {
    affected_rows
  }
}
    `;

export const useAddDepartmentFileMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		AddDepartmentFileMutation,
		TError,
		AddDepartmentFileMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		AddDepartmentFileMutation,
		TError,
		AddDepartmentFileMutationVariables,
		TContext
	>({
		mutationKey: ["AddDepartmentFile"],
		mutationFn: useAuthenticatedFetcher<
			AddDepartmentFileMutation,
			AddDepartmentFileMutationVariables
		>(AddDepartmentFileDocument),
		...options,
	});
};

export const RemoveDepartmentFileDocument = `
    mutation RemoveDepartmentFile($fileId: uuid!, $departmentId: uuid!) {
  delete_department_files(
    where: {file_id: {_eq: $fileId}, department_id: {_eq: $departmentId}}
  ) {
    affected_rows
  }
}
    `;

export const useRemoveDepartmentFileMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		RemoveDepartmentFileMutation,
		TError,
		RemoveDepartmentFileMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		RemoveDepartmentFileMutation,
		TError,
		RemoveDepartmentFileMutationVariables,
		TContext
	>({
		mutationKey: ["RemoveDepartmentFile"],
		mutationFn: useAuthenticatedFetcher<
			RemoveDepartmentFileMutation,
			RemoveDepartmentFileMutationVariables
		>(RemoveDepartmentFileDocument),
		...options,
	});
};
