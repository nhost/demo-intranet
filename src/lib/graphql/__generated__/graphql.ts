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

/** columns and relationships of "storage.files" */
export type Files = {
	__typename?: "files";
	bucketId: Scalars["String"]["output"];
	createdAt: Scalars["timestamptz"]["output"];
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
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	size?: InputMaybe<Scalars["Int"]["input"]>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
	__typename?: "files_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"]["output"];
	/** data from the rows affected by the mutation */
	returning: Array<Files>;
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
	/** insert a single row into the table: "storage.files" */
	insertFile?: Maybe<Files>;
	/** insert data into the table: "storage.files" */
	insertFiles?: Maybe<Files_Mutation_Response>;
	/** update single row of the table: "auth.users" */
	updateUser?: Maybe<Users>;
	/** update data of the table: "auth.users" */
	updateUsers?: Maybe<Users_Mutation_Response>;
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
export type Mutation_RootUpdate_Users_ManyArgs = {
	updates: Array<Users_Updates>;
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
	/** fetch data from the table: "storage.files" using primary key columns */
	file?: Maybe<Files>;
	/** fetch data from the table: "storage.files" */
	files: Array<Files>;
	/** fetch data from the table: "auth.users" using primary key columns */
	user?: Maybe<Users>;
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
	/** fetch data from the table: "storage.files" using primary key columns */
	file?: Maybe<Files>;
	/** fetch data from the table: "storage.files" */
	files: Array<Files>;
	/** fetch data from the table in a streaming manner: "storage.files" */
	files_stream: Array<Files>;
	/** fetch data from the table: "auth.users" using primary key columns */
	user?: Maybe<Users>;
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

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
	__typename?: "users";
	avatarUrl: Scalars["String"]["output"];
	createdAt: Scalars["timestamptz"]["output"];
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
