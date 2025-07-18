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
	float8: { input: any; output: any };
	jsonb: { input: Record<string, any>; output: Record<string, any> };
	numeric: { input: any; output: any };
	timestamptz: { input: string; output: string };
	timestampz: { input: any; output: any };
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

/** columns and relationships of "graphite.assistants" */
export type _GraphiteAssistants = {
	__typename?: "_graphiteAssistants";
	assistantID?: Maybe<Scalars["String"]["output"]>;
	createdAt: Scalars["timestamptz"]["output"];
	data?: Maybe<Scalars["jsonb"]["output"]>;
	id: Scalars["uuid"]["output"];
	updatedAt: Scalars["timestamptz"]["output"];
	user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** columns and relationships of "graphite.assistants" */
export type _GraphiteAssistantsDataArgs = {
	path?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression to filter rows from the table "graphite.assistants". All fields are combined with a logical 'AND'. */
export type _GraphiteAssistants_Bool_Exp = {
	_and?: InputMaybe<Array<_GraphiteAssistants_Bool_Exp>>;
	_not?: InputMaybe<_GraphiteAssistants_Bool_Exp>;
	_or?: InputMaybe<Array<_GraphiteAssistants_Bool_Exp>>;
	assistantID?: InputMaybe<String_Comparison_Exp>;
	createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
	data?: InputMaybe<Jsonb_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
	user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** Ordering options when selecting data from "graphite.assistants". */
export type _GraphiteAssistants_Order_By = {
	assistantID?: InputMaybe<Order_By>;
	createdAt?: InputMaybe<Order_By>;
	data?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	updatedAt?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** select columns of table "graphite.assistants" */
export enum _GraphiteAssistants_Select_Column {
	/** column name */
	AssistantId = "assistantID",
	/** column name */
	CreatedAt = "createdAt",
	/** column name */
	Data = "data",
	/** column name */
	Id = "id",
	/** column name */
	UpdatedAt = "updatedAt",
	/** column name */
	UserId = "user_id",
}

/** Streaming cursor of the table "_graphiteAssistants" */
export type _GraphiteAssistants_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: _GraphiteAssistants_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _GraphiteAssistants_Stream_Cursor_Value_Input = {
	assistantID?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
	data?: InputMaybe<Scalars["jsonb"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
	user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** columns and relationships of "graphite.sessions" */
export type _GraphiteSessions = {
	__typename?: "_graphiteSessions";
	assistantID?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["uuid"]["output"];
	sessionID?: Maybe<Scalars["String"]["output"]>;
};

/** Boolean expression to filter rows from the table "graphite.sessions". All fields are combined with a logical 'AND'. */
export type _GraphiteSessions_Bool_Exp = {
	_and?: InputMaybe<Array<_GraphiteSessions_Bool_Exp>>;
	_not?: InputMaybe<_GraphiteSessions_Bool_Exp>;
	_or?: InputMaybe<Array<_GraphiteSessions_Bool_Exp>>;
	assistantID?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	sessionID?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "graphite.sessions" */
export enum _GraphiteSessions_Constraint {
	/** unique or primary key constraint on columns "id" */
	SessionsPkey = "sessions_pkey",
	/** unique or primary key constraint on columns "session_id" */
	SessionsSessionIdKey = "sessions_session_id_key",
}

/** input type for inserting data into table "graphite.sessions" */
export type _GraphiteSessions_Insert_Input = {
	assistantID?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	userID?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** response of any mutation on the table "graphite.sessions" */
export type _GraphiteSessions_Mutation_Response = {
	__typename?: "_graphiteSessions_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"]["output"];
	/** data from the rows affected by the mutation */
	returning: Array<_GraphiteSessions>;
};

/** on_conflict condition type for table "graphite.sessions" */
export type _GraphiteSessions_On_Conflict = {
	constraint: _GraphiteSessions_Constraint;
	update_columns?: Array<_GraphiteSessions_Update_Column>;
	where?: InputMaybe<_GraphiteSessions_Bool_Exp>;
};

/** Ordering options when selecting data from "graphite.sessions". */
export type _GraphiteSessions_Order_By = {
	assistantID?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	sessionID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: graphite.sessions */
export type _GraphiteSessions_Pk_Columns_Input = {
	id: Scalars["uuid"]["input"];
};

/** select columns of table "graphite.sessions" */
export enum _GraphiteSessions_Select_Column {
	/** column name */
	AssistantId = "assistantID",
	/** column name */
	Id = "id",
	/** column name */
	SessionId = "sessionID",
}

/** input type for updating data in table "graphite.sessions" */
export type _GraphiteSessions_Set_Input = {
	updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "_graphiteSessions" */
export type _GraphiteSessions_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: _GraphiteSessions_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _GraphiteSessions_Stream_Cursor_Value_Input = {
	assistantID?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	sessionID?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "graphite.sessions" */
export enum _GraphiteSessions_Update_Column {
	/** column name */
	UpdatedAt = "updatedAt",
}

export type _GraphiteSessions_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<_GraphiteSessions_Set_Input>;
	/** filter the rows which have to be updated */
	where: _GraphiteSessions_Bool_Exp;
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

/** aggregated selection of "department_files" */
export type Department_Files_Aggregate = {
	__typename?: "department_files_aggregate";
	aggregate?: Maybe<Department_Files_Aggregate_Fields>;
	nodes: Array<Department_Files>;
};

export type Department_Files_Aggregate_Bool_Exp = {
	count?: InputMaybe<Department_Files_Aggregate_Bool_Exp_Count>;
};

export type Department_Files_Aggregate_Bool_Exp_Count = {
	arguments?: InputMaybe<Array<Department_Files_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	filter?: InputMaybe<Department_Files_Bool_Exp>;
	predicate: Int_Comparison_Exp;
};

/** aggregate fields of "department_files" */
export type Department_Files_Aggregate_Fields = {
	__typename?: "department_files_aggregate_fields";
	count: Scalars["Int"]["output"];
	max?: Maybe<Department_Files_Max_Fields>;
	min?: Maybe<Department_Files_Min_Fields>;
};

/** aggregate fields of "department_files" */
export type Department_Files_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Department_Files_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
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
	/** unique or primary key constraint on columns "id" */
	DepartmentFilesPkey = "department_files_pkey",
}

/** input type for inserting data into table "department_files" */
export type Department_Files_Insert_Input = {
	department_id?: InputMaybe<Scalars["uuid"]["input"]>;
	file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
	file_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Department_Files_Max_Fields = {
	__typename?: "department_files_max_fields";
	department_id?: Maybe<Scalars["uuid"]["output"]>;
	file_id?: Maybe<Scalars["uuid"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "department_files" */
export type Department_Files_Max_Order_By = {
	department_id?: InputMaybe<Order_By>;
	file_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Department_Files_Min_Fields = {
	__typename?: "department_files_min_fields";
	department_id?: Maybe<Scalars["uuid"]["output"]>;
	file_id?: Maybe<Scalars["uuid"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
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
	/** An aggregate relationship */
	employees_aggregate: User_Departments_Aggregate;
	/** An array relationship */
	files: Array<Department_Files>;
	/** An aggregate relationship */
	files_aggregate: Department_Files_Aggregate;
	id: Scalars["uuid"]["output"];
	/** An array relationship */
	kb_entry_departments: Array<Kb_Entry_Departments>;
	/** An aggregate relationship */
	kb_entry_departments_aggregate: Kb_Entry_Departments_Aggregate;
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
export type DepartmentsEmployees_AggregateArgs = {
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

/** columns and relationships of "departments" */
export type DepartmentsFiles_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Department_Files_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Department_Files_Order_By>>;
	where?: InputMaybe<Department_Files_Bool_Exp>;
};

/** columns and relationships of "departments" */
export type DepartmentsKb_Entry_DepartmentsArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entry_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entry_Departments_Order_By>>;
	where?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
};

/** columns and relationships of "departments" */
export type DepartmentsKb_Entry_Departments_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entry_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entry_Departments_Order_By>>;
	where?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
};

/** aggregated selection of "departments" */
export type Departments_Aggregate = {
	__typename?: "departments_aggregate";
	aggregate?: Maybe<Departments_Aggregate_Fields>;
	nodes: Array<Departments>;
};

/** aggregate fields of "departments" */
export type Departments_Aggregate_Fields = {
	__typename?: "departments_aggregate_fields";
	avg?: Maybe<Departments_Avg_Fields>;
	count: Scalars["Int"]["output"];
	max?: Maybe<Departments_Max_Fields>;
	min?: Maybe<Departments_Min_Fields>;
	stddev?: Maybe<Departments_Stddev_Fields>;
	stddev_pop?: Maybe<Departments_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Departments_Stddev_Samp_Fields>;
	sum?: Maybe<Departments_Sum_Fields>;
	var_pop?: Maybe<Departments_Var_Pop_Fields>;
	var_samp?: Maybe<Departments_Var_Samp_Fields>;
	variance?: Maybe<Departments_Variance_Fields>;
};

/** aggregate fields of "departments" */
export type Departments_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Departments_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Departments_Avg_Fields = {
	__typename?: "departments_avg_fields";
	budget?: Maybe<Scalars["Float"]["output"]>;
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
	employees_aggregate?: InputMaybe<User_Departments_Aggregate_Bool_Exp>;
	files?: InputMaybe<Department_Files_Bool_Exp>;
	files_aggregate?: InputMaybe<Department_Files_Aggregate_Bool_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	kb_entry_departments?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
	kb_entry_departments_aggregate?: InputMaybe<Kb_Entry_Departments_Aggregate_Bool_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "departments" */
export type Departments_Inc_Input = {
	budget?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** aggregate max on columns */
export type Departments_Max_Fields = {
	__typename?: "departments_max_fields";
	budget?: Maybe<Scalars["numeric"]["output"]>;
	created_at?: Maybe<Scalars["timestamptz"]["output"]>;
	description?: Maybe<Scalars["String"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Departments_Min_Fields = {
	__typename?: "departments_min_fields";
	budget?: Maybe<Scalars["numeric"]["output"]>;
	created_at?: Maybe<Scalars["timestamptz"]["output"]>;
	description?: Maybe<Scalars["String"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
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
	kb_entry_departments_aggregate?: InputMaybe<Kb_Entry_Departments_Aggregate_Order_By>;
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

/** aggregate stddev on columns */
export type Departments_Stddev_Fields = {
	__typename?: "departments_stddev_fields";
	budget?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Departments_Stddev_Pop_Fields = {
	__typename?: "departments_stddev_pop_fields";
	budget?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Departments_Stddev_Samp_Fields = {
	__typename?: "departments_stddev_samp_fields";
	budget?: Maybe<Scalars["Float"]["output"]>;
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

/** aggregate sum on columns */
export type Departments_Sum_Fields = {
	__typename?: "departments_sum_fields";
	budget?: Maybe<Scalars["numeric"]["output"]>;
};

export type Departments_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Departments_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Departments_Set_Input>;
	/** filter the rows which have to be updated */
	where: Departments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Departments_Var_Pop_Fields = {
	__typename?: "departments_var_pop_fields";
	budget?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Departments_Var_Samp_Fields = {
	__typename?: "departments_var_samp_fields";
	budget?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Departments_Variance_Fields = {
	__typename?: "departments_variance_fields";
	budget?: Maybe<Scalars["Float"]["output"]>;
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

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
	__typename?: "files_aggregate";
	aggregate?: Maybe<Files_Aggregate_Fields>;
	nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
	__typename?: "files_aggregate_fields";
	avg?: Maybe<Files_Avg_Fields>;
	count: Scalars["Int"]["output"];
	max?: Maybe<Files_Max_Fields>;
	min?: Maybe<Files_Min_Fields>;
	stddev?: Maybe<Files_Stddev_Fields>;
	stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
	sum?: Maybe<Files_Sum_Fields>;
	var_pop?: Maybe<Files_Var_Pop_Fields>;
	var_samp?: Maybe<Files_Var_Samp_Fields>;
	variance?: Maybe<Files_Variance_Fields>;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Files_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
	__typename?: "files_avg_fields";
	size?: Maybe<Scalars["Float"]["output"]>;
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

/** aggregate max on columns */
export type Files_Max_Fields = {
	__typename?: "files_max_fields";
	bucketId?: Maybe<Scalars["String"]["output"]>;
	createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
	etag?: Maybe<Scalars["String"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	mimeType?: Maybe<Scalars["String"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	size?: Maybe<Scalars["Int"]["output"]>;
	updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
	uploadedByUserId?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
	__typename?: "files_min_fields";
	bucketId?: Maybe<Scalars["String"]["output"]>;
	createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
	etag?: Maybe<Scalars["String"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	mimeType?: Maybe<Scalars["String"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	size?: Maybe<Scalars["Int"]["output"]>;
	updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
	uploadedByUserId?: Maybe<Scalars["uuid"]["output"]>;
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

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
	__typename?: "files_stddev_fields";
	size?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
	__typename?: "files_stddev_pop_fields";
	size?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
	__typename?: "files_stddev_samp_fields";
	size?: Maybe<Scalars["Float"]["output"]>;
};

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

/** aggregate sum on columns */
export type Files_Sum_Fields = {
	__typename?: "files_sum_fields";
	size?: Maybe<Scalars["Int"]["output"]>;
};

/** placeholder for update columns of table "storage.files" (current role has no relevant permissions) */
export enum Files_Update_Column {
	/** placeholder (do not use) */
	Placeholder = "_PLACEHOLDER",
}

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
	__typename?: "files_var_pop_fields";
	size?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
	__typename?: "files_var_samp_fields";
	size?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
	__typename?: "files_variance_fields";
	size?: Maybe<Scalars["Float"]["output"]>;
};

export type GraphiteAssistant = {
	__typename?: "graphiteAssistant";
	/** ID of the assistant */
	assistantID: Scalars["String"]["output"];
	/** Description of the assistant */
	description: Scalars["String"]["output"];
	/** File Stores the assistant has access to */
	fileStores?: Maybe<Array<Scalars["uuid"]["output"]>>;
	/** GraphQL data sources and tools. Run against the project's GraphQL API */
	graphql?: Maybe<Array<GraphiteAssistantToolGraphQl>>;
	/**
	 * Instructions for the assistant. This is used to instruct the AI assistant
	 * on how to behave and respond to the user
	 */
	instructions: Scalars["String"]["output"];
	/** Model to use for the assistant. */
	model: Scalars["String"]["output"];
	/** Name of the assistant */
	name: Scalars["String"]["output"];
	/** Webhook data sources and tools */
	webhooks?: Maybe<Array<GraphiteAssistantToolWebhook>>;
};

export type GraphiteAssistantInput = {
	/** Description of the assistant */
	description: Scalars["String"]["input"];
	/** File Stores this assistant has access to */
	fileStores?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
	/** GraphQL data sources. Run against the project's GraphQL API */
	graphql?: InputMaybe<Array<InputMaybe<GraphiteAssistantToolGraphQlInput>>>;
	/**
	 * Instructions for the assistant. This is used to instruct the AI assistant
	 * on how to behave and respond to the user
	 */
	instructions: Scalars["String"]["input"];
	/** Model to use for the assistant. */
	model: Scalars["String"]["input"];
	/** Name of the assistant */
	name: Scalars["String"]["input"];
	/** Webhook data sources */
	webhooks?: InputMaybe<Array<InputMaybe<GraphiteAssistantToolWebhookInput>>>;
};

export type GraphiteAssistantToolArgument = {
	__typename?: "graphiteAssistantToolArgument";
	description: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	required: Scalars["Boolean"]["output"];
	type: Scalars["String"]["output"];
};

export type GraphiteAssistantToolArgumentInput = {
	/** Description of the argument. Be as clear and concise as possible. */
	description: Scalars["String"]["input"];
	/** Name of the argument */
	name: Scalars["String"]["input"];
	/** Whether or not the argument is required */
	required: Scalars["Boolean"]["input"];
	/** Type of the argument */
	type: Scalars["String"]["input"];
};

export type GraphiteAssistantToolGraphQl = {
	__typename?: "graphiteAssistantToolGraphQL";
	/** Arguments to pass to the GraphQL query */
	arguments: Array<GraphiteAssistantToolArgument>;
	/** Description of the data source */
	description: Scalars["String"]["output"];
	/** Name of the data source */
	name: Scalars["String"]["output"];
	/** GraphQL query to run against the project's GraphQL API. */
	query: Scalars["String"]["output"];
};

export type GraphiteAssistantToolGraphQlInput = {
	/** Arguments to pass to the GraphQL query */
	arguments: Array<GraphiteAssistantToolArgumentInput>;
	/**
	 * Description of the data source. Be as clear and concise as possible.
	 * This is used to help the AI assistant understand when and how
	 * external data sources should be used.
	 */
	description: Scalars["String"]["input"];
	/** Name of the data source. Use a descriptive name */
	name: Scalars["String"]["input"];
	/** GraphQL query to run against the project's GraphQL API. */
	query: Scalars["String"]["input"];
};

export type GraphiteAssistantToolWebhook = {
	__typename?: "graphiteAssistantToolWebhook";
	/** URL of the webhook */
	URL: Scalars["String"]["output"];
	/** Arguments to pass to the webhook */
	arguments: Array<GraphiteAssistantToolArgument>;
	/** Description of the data source */
	description: Scalars["String"]["output"];
	/** Name of the data source */
	name: Scalars["String"]["output"];
};

export type GraphiteAssistantToolWebhookInput = {
	/** URL of the webhook */
	URL: Scalars["String"]["input"];
	/** Arguments to pass to the webhook */
	arguments: Array<GraphiteAssistantToolArgumentInput>;
	/**
	 * Description of the data source. Be as clear and concise as possible.
	 * This is used to help the AI assistant understand when and how
	 * external data sources should be used.
	 */
	description: Scalars["String"]["input"];
	/** Name of the data source. Use a descriptive name */
	name: Scalars["String"]["input"];
};

export type GraphiteFileStore = {
	__typename?: "graphiteFileStore";
	/** IDs of the storage buckets */
	buckets: Array<Scalars["String"]["output"]>;
	/** ID of the File Store */
	id: Scalars["uuid"]["output"];
	/**
	 * The last time files in storage were synced with the vector store
	 * Null means the store hasn't been synced yet
	 */
	last_synced_at: Scalars["timestampz"]["output"];
	/** Name of the File Store */
	name: Scalars["String"]["output"];
	/** ID of the vector store */
	vectorStoreID: Scalars["String"]["output"];
};

export type GraphiteFileStoreInput = {
	/** IDs of the storage buckets */
	buckets: Array<Scalars["String"]["input"]>;
	/** Name of the File Store */
	name: Scalars["String"]["input"];
};

export type GraphiteMessage = {
	__typename?: "graphiteMessage";
	/** Timestamp of when the message was sent */
	createdAt: Scalars["timestampz"]["output"];
	/** ID of the message */
	id: Scalars["String"]["output"];
	/** Message content */
	message: Scalars["String"]["output"];
	/** Role of the message. Either "user" or "assistant" */
	role: Scalars["String"]["output"];
};

export type GraphiteMessageResponse = {
	__typename?: "graphiteMessageResponse";
	/** Messages in this session */
	messages: Array<GraphiteMessage>;
	/** ID of the session */
	sessionID: Scalars["String"]["output"];
};

export type GraphiteMutation = {
	__typename?: "graphiteMutation";
	/**
	 * Delete an assistant
	 *
	 * ## Permissions needed
	 *
	 * select (assistants):
	 * - assistant_id
	 * delete (assistants):
	 */
	deleteAssistant: Scalars["Boolean"]["output"];
	/**
	 * Delete a File Store
	 *
	 * ## Permissions needed
	 *
	 * select (file_stores):
	 * - vector_store_id
	 * delete (file_stores):
	 */
	deleteFileStore: Scalars["Boolean"]["output"];
	/**
	 * Delete a session
	 *
	 * ## Permissions needed
	 *
	 * select (sessions):
	 * - assistant_id
	 * delete (sessions):
	 */
	deleteSession: Scalars["Boolean"]["output"];
	/**
	 * Create an assistant
	 *
	 * ## Permissions needed
	 *
	 * select (assistants):
	 * - id
	 * insert (assistants):
	 * - user_id
	 * update (assistants):
	 * - assistant_id
	 * - data
	 */
	insertAssistant: GraphiteAssistant;
	/**
	 * Create a File Store
	 *
	 * ## Permissions needed
	 *
	 * select (file_stores):
	 * - id
	 * insert (file_stores):
	 * - user_id
	 */
	insertFileStore: GraphiteFileStore;
	/**
	 * Send a message to a developer session.
	 * If prevMessageID is `""`, return all messages in the session.
	 * If prevMessageID is not `""`, return all messages after prevMessageID.
	 *
	 * ## Permissions needed
	 *
	 * Only admins can send messages to developer sessions
	 */
	sendDevMessage: GraphiteMessageResponse;
	/**
	 * Send a message to a session.
	 * If prevMessageID is "", return all messages in the session.
	 * If prevMessageID is not "", return all messages after prevMessageID.
	 *
	 * ## Permissions needed
	 *
	 * select (sessions):
	 * - id
	 * - session_id
	 * - assistant_id
	 * update (sessions):
	 * - update_at
	 * select (assistants):
	 * - id
	 * - data
	 */
	sendMessage: GraphiteMessageResponse;
	/**
	 * Create a developer session
	 *
	 * ## Permissions needed
	 *
	 * Only admins can create developer sessions
	 */
	startDevSession: GraphiteSession;
	/**
	 * Create a session with a given assistant
	 *
	 * ## Permissions needed
	 *
	 * select (sessions):
	 * - id
	 * insert (sessions):
	 * - user_id
	 * - assistant_id
	 *
	 * select (assistants):
	 * - id
	 * - data
	 */
	startSession: GraphiteSession;
	/**
	 * Update an assistant
	 *
	 * ## Permissions needed
	 *
	 * select (assistants):
	 * - assistant_id
	 * update (assistants):
	 * - update_at
	 * - data
	 */
	updateAssistant: GraphiteAssistant;
	/**
	 * Update a File Store
	 *
	 * ## Permissions needed
	 *
	 * select (file_stores):
	 * - id
	 * update (file_stores):
	 * - updated_at
	 * - name
	 */
	updateFileStore: GraphiteFileStore;
};

export type GraphiteMutationDeleteAssistantArgs = {
	assistantID: Scalars["String"]["input"];
};

export type GraphiteMutationDeleteFileStoreArgs = {
	id: Scalars["uuid"]["input"];
};

export type GraphiteMutationDeleteSessionArgs = {
	sessionID: Scalars["String"]["input"];
};

export type GraphiteMutationInsertAssistantArgs = {
	object: GraphiteAssistantInput;
};

export type GraphiteMutationInsertFileStoreArgs = {
	object: GraphiteFileStoreInput;
};

export type GraphiteMutationSendDevMessageArgs = {
	message: Scalars["String"]["input"];
	prevMessageID: Scalars["String"]["input"];
	sessionID: Scalars["String"]["input"];
};

export type GraphiteMutationSendMessageArgs = {
	message: Scalars["String"]["input"];
	prevMessageID: Scalars["String"]["input"];
	sessionID: Scalars["String"]["input"];
};

export type GraphiteMutationStartSessionArgs = {
	assistantID: Scalars["String"]["input"];
};

export type GraphiteMutationUpdateAssistantArgs = {
	assistantID: Scalars["String"]["input"];
	object: GraphiteAssistantInput;
};

export type GraphiteMutationUpdateFileStoreArgs = {
	id: Scalars["uuid"]["input"];
	object: GraphiteFileStoreInput;
};

export type GraphiteQuery = {
	__typename?: "graphiteQuery";
	/**
	 * Retrieve an assistant
	 *
	 * ## Permissions needed
	 *
	 * select (assistants):
	 * - id
	 * - assistantID
	 * - data
	 */
	assistant?: Maybe<GraphiteAssistant>;
	/**
	 * Retrieve all assistants
	 *
	 * ## Permissions needed
	 *
	 * select (assistants):
	 * - id
	 * - assistant_id
	 * - data
	 */
	assistants: Array<GraphiteAssistant>;
	/**
	 * Retrieve all File Stores
	 *
	 * ## Permissions needed
	 *
	 * select (file_stores):
	 * - id
	 * - fileStoreID
	 * - bucketID
	 * - name
	 * - last_synced_at
	 */
	fileStores: Array<GraphiteFileStore>;
	/**
	 * Retrieve a session
	 *
	 * ## Permissions needed
	 *
	 * select (sessions):
	 * - id
	 * - assistant_id
	 * - session_id
	 * - user_id
	 */
	session?: Maybe<GraphiteSession>;
	/**
	 * Retrieve all messages for a session
	 *
	 * ## Permissions needed
	 *
	 * select (sessions):
	 * - id
	 * - assistant_id
	 * - session_id
	 * - user_id
	 */
	sessionMessages?: Maybe<GraphiteMessageResponse>;
	/**
	 * Retrieve all sessions
	 *
	 * ## Permissions needed
	 *
	 * select (sessions):
	 * - id
	 * - assistant_id
	 * - session_id
	 * - user_id
	 */
	sessions: Array<GraphiteSession>;
};

export type GraphiteQueryAssistantArgs = {
	assistantID: Scalars["String"]["input"];
};

export type GraphiteQuerySessionArgs = {
	sessionID: Scalars["String"]["input"];
};

export type GraphiteQuerySessionMessagesArgs = {
	sessionID: Scalars["String"]["input"];
};

export type GraphiteSession = {
	__typename?: "graphiteSession";
	/** ID of the assistant used in this session */
	assistantID: Scalars["String"]["output"];
	/** Messages in this session */
	createdAt: Scalars["timestampz"]["output"];
	/** ID of the session */
	sessionID: Scalars["String"]["output"];
	/** ID of the user who started this session */
	userID: Scalars["uuid"]["output"];
};

export type Graphite_Search_Kb_Entries_Args = {
	amount?: InputMaybe<Scalars["Int"]["input"]>;
	maxdistance?: InputMaybe<Scalars["float8"]["input"]>;
	query?: InputMaybe<Scalars["String"]["input"]>;
};

export type Graphite_Similar_Kb_Entries_Args = {
	amount?: InputMaybe<Scalars["Int"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	maxdistance?: InputMaybe<Scalars["float8"]["input"]>;
};

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

/** columns and relationships of "kb_entries" */
export type Kb_Entries = {
	__typename?: "kb_entries";
	content: Scalars["String"]["output"];
	created_at: Scalars["timestamptz"]["output"];
	id: Scalars["uuid"]["output"];
	/** An array relationship */
	kb_entry_departments: Array<Kb_Entry_Departments>;
	/** An aggregate relationship */
	kb_entry_departments_aggregate: Kb_Entry_Departments_Aggregate;
	summary?: Maybe<Scalars["String"]["output"]>;
	title: Scalars["String"]["output"];
	updated_at: Scalars["timestamptz"]["output"];
	/** An object relationship */
	uploader: Users;
	uploader_id: Scalars["uuid"]["output"];
};

/** columns and relationships of "kb_entries" */
export type Kb_EntriesKb_Entry_DepartmentsArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entry_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entry_Departments_Order_By>>;
	where?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
};

/** columns and relationships of "kb_entries" */
export type Kb_EntriesKb_Entry_Departments_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entry_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entry_Departments_Order_By>>;
	where?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
};

export type Kb_Entries_Aggregate = {
	__typename?: "kb_entries_aggregate";
	aggregate?: Maybe<Kb_Entries_Aggregate_Fields>;
	nodes: Array<Kb_Entries>;
};

/** aggregate fields of "kb_entries" */
export type Kb_Entries_Aggregate_Fields = {
	__typename?: "kb_entries_aggregate_fields";
	count: Scalars["Int"]["output"];
	max?: Maybe<Kb_Entries_Max_Fields>;
	min?: Maybe<Kb_Entries_Min_Fields>;
};

/** aggregate fields of "kb_entries" */
export type Kb_Entries_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "kb_entries". All fields are combined with a logical 'AND'. */
export type Kb_Entries_Bool_Exp = {
	_and?: InputMaybe<Array<Kb_Entries_Bool_Exp>>;
	_not?: InputMaybe<Kb_Entries_Bool_Exp>;
	_or?: InputMaybe<Array<Kb_Entries_Bool_Exp>>;
	content?: InputMaybe<String_Comparison_Exp>;
	created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	kb_entry_departments?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
	kb_entry_departments_aggregate?: InputMaybe<Kb_Entry_Departments_Aggregate_Bool_Exp>;
	summary?: InputMaybe<String_Comparison_Exp>;
	title?: InputMaybe<String_Comparison_Exp>;
	updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	uploader?: InputMaybe<Users_Bool_Exp>;
	uploader_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "kb_entries" */
export enum Kb_Entries_Constraint {
	/** unique or primary key constraint on columns "id" */
	KbEntriesPkey = "kb_entries_pkey",
}

/** input type for inserting data into table "kb_entries" */
export type Kb_Entries_Insert_Input = {
	content?: InputMaybe<Scalars["String"]["input"]>;
	kb_entry_departments?: InputMaybe<Kb_Entry_Departments_Arr_Rel_Insert_Input>;
	summary?: InputMaybe<Scalars["String"]["input"]>;
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Kb_Entries_Max_Fields = {
	__typename?: "kb_entries_max_fields";
	content?: Maybe<Scalars["String"]["output"]>;
	created_at?: Maybe<Scalars["timestamptz"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	summary?: Maybe<Scalars["String"]["output"]>;
	title?: Maybe<Scalars["String"]["output"]>;
	updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
	uploader_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type Kb_Entries_Min_Fields = {
	__typename?: "kb_entries_min_fields";
	content?: Maybe<Scalars["String"]["output"]>;
	created_at?: Maybe<Scalars["timestamptz"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	summary?: Maybe<Scalars["String"]["output"]>;
	title?: Maybe<Scalars["String"]["output"]>;
	updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
	uploader_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "kb_entries" */
export type Kb_Entries_Mutation_Response = {
	__typename?: "kb_entries_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"]["output"];
	/** data from the rows affected by the mutation */
	returning: Array<Kb_Entries>;
};

/** input type for inserting object relation for remote table "kb_entries" */
export type Kb_Entries_Obj_Rel_Insert_Input = {
	data: Kb_Entries_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Kb_Entries_On_Conflict>;
};

/** on_conflict condition type for table "kb_entries" */
export type Kb_Entries_On_Conflict = {
	constraint: Kb_Entries_Constraint;
	update_columns?: Array<Kb_Entries_Update_Column>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

/** Ordering options when selecting data from "kb_entries". */
export type Kb_Entries_Order_By = {
	content?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	kb_entry_departments_aggregate?: InputMaybe<Kb_Entry_Departments_Aggregate_Order_By>;
	summary?: InputMaybe<Order_By>;
	title?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	uploader?: InputMaybe<Users_Order_By>;
	uploader_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kb_entries */
export type Kb_Entries_Pk_Columns_Input = {
	id: Scalars["uuid"]["input"];
};

/** select columns of table "kb_entries" */
export enum Kb_Entries_Select_Column {
	/** column name */
	Content = "content",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	Id = "id",
	/** column name */
	Summary = "summary",
	/** column name */
	Title = "title",
	/** column name */
	UpdatedAt = "updated_at",
	/** column name */
	UploaderId = "uploader_id",
}

/** input type for updating data in table "kb_entries" */
export type Kb_Entries_Set_Input = {
	content?: InputMaybe<Scalars["String"]["input"]>;
	summary?: InputMaybe<Scalars["String"]["input"]>;
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "kb_entries" */
export type Kb_Entries_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Kb_Entries_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kb_Entries_Stream_Cursor_Value_Input = {
	content?: InputMaybe<Scalars["String"]["input"]>;
	created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	summary?: InputMaybe<Scalars["String"]["input"]>;
	title?: InputMaybe<Scalars["String"]["input"]>;
	updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
	uploader_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "kb_entries" */
export enum Kb_Entries_Update_Column {
	/** column name */
	Content = "content",
	/** column name */
	Summary = "summary",
	/** column name */
	Title = "title",
}

export type Kb_Entries_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Kb_Entries_Set_Input>;
	/** filter the rows which have to be updated */
	where: Kb_Entries_Bool_Exp;
};

/** columns and relationships of "kb_entry_departments" */
export type Kb_Entry_Departments = {
	__typename?: "kb_entry_departments";
	/** An object relationship */
	department: Departments;
	department_id: Scalars["uuid"]["output"];
	id: Scalars["uuid"]["output"];
	/** An object relationship */
	kb_entry: Kb_Entries;
	kb_entry_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "kb_entry_departments" */
export type Kb_Entry_Departments_Aggregate = {
	__typename?: "kb_entry_departments_aggregate";
	aggregate?: Maybe<Kb_Entry_Departments_Aggregate_Fields>;
	nodes: Array<Kb_Entry_Departments>;
};

export type Kb_Entry_Departments_Aggregate_Bool_Exp = {
	count?: InputMaybe<Kb_Entry_Departments_Aggregate_Bool_Exp_Count>;
};

export type Kb_Entry_Departments_Aggregate_Bool_Exp_Count = {
	arguments?: InputMaybe<Array<Kb_Entry_Departments_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	filter?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
	predicate: Int_Comparison_Exp;
};

/** aggregate fields of "kb_entry_departments" */
export type Kb_Entry_Departments_Aggregate_Fields = {
	__typename?: "kb_entry_departments_aggregate_fields";
	count: Scalars["Int"]["output"];
	max?: Maybe<Kb_Entry_Departments_Max_Fields>;
	min?: Maybe<Kb_Entry_Departments_Min_Fields>;
};

/** aggregate fields of "kb_entry_departments" */
export type Kb_Entry_Departments_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Kb_Entry_Departments_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "kb_entry_departments" */
export type Kb_Entry_Departments_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Kb_Entry_Departments_Max_Order_By>;
	min?: InputMaybe<Kb_Entry_Departments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "kb_entry_departments" */
export type Kb_Entry_Departments_Arr_Rel_Insert_Input = {
	data: Array<Kb_Entry_Departments_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Kb_Entry_Departments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "kb_entry_departments". All fields are combined with a logical 'AND'. */
export type Kb_Entry_Departments_Bool_Exp = {
	_and?: InputMaybe<Array<Kb_Entry_Departments_Bool_Exp>>;
	_not?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
	_or?: InputMaybe<Array<Kb_Entry_Departments_Bool_Exp>>;
	department?: InputMaybe<Departments_Bool_Exp>;
	department_id?: InputMaybe<Uuid_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	kb_entry?: InputMaybe<Kb_Entries_Bool_Exp>;
	kb_entry_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "kb_entry_departments" */
export enum Kb_Entry_Departments_Constraint {
	/** unique or primary key constraint on columns "kb_entry_id", "department_id" */
	KbEntryDepartmentsKbEntryIdDepartmentIdKey = "kb_entry_departments_kb_entry_id_department_id_key",
	/** unique or primary key constraint on columns "id" */
	KbEntryDepartmentsPkey = "kb_entry_departments_pkey",
}

/** input type for inserting data into table "kb_entry_departments" */
export type Kb_Entry_Departments_Insert_Input = {
	department_id?: InputMaybe<Scalars["uuid"]["input"]>;
	kb_entry?: InputMaybe<Kb_Entries_Obj_Rel_Insert_Input>;
	kb_entry_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Kb_Entry_Departments_Max_Fields = {
	__typename?: "kb_entry_departments_max_fields";
	department_id?: Maybe<Scalars["uuid"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	kb_entry_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "kb_entry_departments" */
export type Kb_Entry_Departments_Max_Order_By = {
	department_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	kb_entry_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kb_Entry_Departments_Min_Fields = {
	__typename?: "kb_entry_departments_min_fields";
	department_id?: Maybe<Scalars["uuid"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	kb_entry_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "kb_entry_departments" */
export type Kb_Entry_Departments_Min_Order_By = {
	department_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	kb_entry_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "kb_entry_departments" */
export type Kb_Entry_Departments_Mutation_Response = {
	__typename?: "kb_entry_departments_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"]["output"];
	/** data from the rows affected by the mutation */
	returning: Array<Kb_Entry_Departments>;
};

/** on_conflict condition type for table "kb_entry_departments" */
export type Kb_Entry_Departments_On_Conflict = {
	constraint: Kb_Entry_Departments_Constraint;
	update_columns?: Array<Kb_Entry_Departments_Update_Column>;
	where?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
};

/** Ordering options when selecting data from "kb_entry_departments". */
export type Kb_Entry_Departments_Order_By = {
	department?: InputMaybe<Departments_Order_By>;
	department_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	kb_entry?: InputMaybe<Kb_Entries_Order_By>;
	kb_entry_id?: InputMaybe<Order_By>;
};

/** select columns of table "kb_entry_departments" */
export enum Kb_Entry_Departments_Select_Column {
	/** column name */
	DepartmentId = "department_id",
	/** column name */
	Id = "id",
	/** column name */
	KbEntryId = "kb_entry_id",
}

/** Streaming cursor of the table "kb_entry_departments" */
export type Kb_Entry_Departments_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Kb_Entry_Departments_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kb_Entry_Departments_Stream_Cursor_Value_Input = {
	department_id?: InputMaybe<Scalars["uuid"]["input"]>;
	id?: InputMaybe<Scalars["uuid"]["input"]>;
	kb_entry_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** placeholder for update columns of table "kb_entry_departments" (current role has no relevant permissions) */
export enum Kb_Entry_Departments_Update_Column {
	/** placeholder (do not use) */
	Placeholder = "_PLACEHOLDER",
}

/** mutation root */
export type Mutation_Root = {
	__typename?: "mutation_root";
	/** insert a single row into the table: "graphite.sessions" */
	_insertGraphiteSession?: Maybe<_GraphiteSessions>;
	/** insert data into the table: "graphite.sessions" */
	_insertGraphiteSessions?: Maybe<_GraphiteSessions_Mutation_Response>;
	/** update single row of the table: "graphite.sessions" */
	_updateGraphiteSession?: Maybe<_GraphiteSessions>;
	/** update data of the table: "graphite.sessions" */
	_updateGraphiteSessions?: Maybe<_GraphiteSessions_Mutation_Response>;
	/** update multiples rows of table: "graphite.sessions" */
	_updateManyGraphiteSessions?: Maybe<
		Array<Maybe<_GraphiteSessions_Mutation_Response>>
	>;
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
	/** delete data from the table: "kb_entries" */
	delete_kb_entries?: Maybe<Kb_Entries_Mutation_Response>;
	/** delete single row from the table: "kb_entries" */
	delete_kb_entries_by_pk?: Maybe<Kb_Entries>;
	/** delete data from the table: "kb_entry_departments" */
	delete_kb_entry_departments?: Maybe<Kb_Entry_Departments_Mutation_Response>;
	/** delete single row from the table: "kb_entry_departments" */
	delete_kb_entry_departments_by_pk?: Maybe<Kb_Entry_Departments>;
	/** delete data from the table: "user_departments" */
	delete_user_departments?: Maybe<User_Departments_Mutation_Response>;
	/** delete single row from the table: "user_departments" */
	delete_user_departments_by_pk?: Maybe<User_Departments>;
	graphite?: Maybe<GraphiteMutation>;
	/** insert a single row into the table: "storage.files" */
	insertFile?: Maybe<Files>;
	/** insert data into the table: "storage.files" */
	insertFiles?: Maybe<Files_Mutation_Response>;
	/** insert data into the table: "department_files" */
	insert_department_files?: Maybe<Department_Files_Mutation_Response>;
	/** insert a single row into the table: "department_files" */
	insert_department_files_one?: Maybe<Department_Files>;
	/** insert data into the table: "kb_entries" */
	insert_kb_entries?: Maybe<Kb_Entries_Mutation_Response>;
	/** insert a single row into the table: "kb_entries" */
	insert_kb_entries_one?: Maybe<Kb_Entries>;
	/** insert data into the table: "kb_entry_departments" */
	insert_kb_entry_departments?: Maybe<Kb_Entry_Departments_Mutation_Response>;
	/** insert a single row into the table: "kb_entry_departments" */
	insert_kb_entry_departments_one?: Maybe<Kb_Entry_Departments>;
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
	/** update data of the table: "kb_entries" */
	update_kb_entries?: Maybe<Kb_Entries_Mutation_Response>;
	/** update single row of the table: "kb_entries" */
	update_kb_entries_by_pk?: Maybe<Kb_Entries>;
	/** update multiples rows of table: "kb_entries" */
	update_kb_entries_many?: Maybe<Array<Maybe<Kb_Entries_Mutation_Response>>>;
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
export type Mutation_Root_InsertGraphiteSessionArgs = {
	object: _GraphiteSessions_Insert_Input;
	on_conflict?: InputMaybe<_GraphiteSessions_On_Conflict>;
};

/** mutation root */
export type Mutation_Root_InsertGraphiteSessionsArgs = {
	objects: Array<_GraphiteSessions_Insert_Input>;
	on_conflict?: InputMaybe<_GraphiteSessions_On_Conflict>;
};

/** mutation root */
export type Mutation_Root_UpdateGraphiteSessionArgs = {
	_set?: InputMaybe<_GraphiteSessions_Set_Input>;
	pk_columns: _GraphiteSessions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_Root_UpdateGraphiteSessionsArgs = {
	_set?: InputMaybe<_GraphiteSessions_Set_Input>;
	where: _GraphiteSessions_Bool_Exp;
};

/** mutation root */
export type Mutation_Root_UpdateManyGraphiteSessionsArgs = {
	updates: Array<_GraphiteSessions_Updates>;
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
export type Mutation_RootDelete_Kb_EntriesArgs = {
	where: Kb_Entries_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Kb_Entries_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Kb_Entry_DepartmentsArgs = {
	where: Kb_Entry_Departments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Kb_Entry_Departments_By_PkArgs = {
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
export type Mutation_RootInsert_Kb_EntriesArgs = {
	objects: Array<Kb_Entries_Insert_Input>;
	on_conflict?: InputMaybe<Kb_Entries_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Kb_Entries_OneArgs = {
	object: Kb_Entries_Insert_Input;
	on_conflict?: InputMaybe<Kb_Entries_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Kb_Entry_DepartmentsArgs = {
	objects: Array<Kb_Entry_Departments_Insert_Input>;
	on_conflict?: InputMaybe<Kb_Entry_Departments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Kb_Entry_Departments_OneArgs = {
	object: Kb_Entry_Departments_Insert_Input;
	on_conflict?: InputMaybe<Kb_Entry_Departments_On_Conflict>;
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
export type Mutation_RootUpdate_Kb_EntriesArgs = {
	_set?: InputMaybe<Kb_Entries_Set_Input>;
	where: Kb_Entries_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Kb_Entries_By_PkArgs = {
	_set?: InputMaybe<Kb_Entries_Set_Input>;
	pk_columns: Kb_Entries_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Kb_Entries_ManyArgs = {
	updates: Array<Kb_Entries_Updates>;
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
	/** fetch data from the table: "graphite.assistants" using primary key columns */
	_graphiteAssistant?: Maybe<_GraphiteAssistants>;
	/** fetch data from the table: "graphite.assistants" */
	_graphiteAssistants: Array<_GraphiteAssistants>;
	/** fetch data from the table: "graphite.sessions" using primary key columns */
	_graphiteSession?: Maybe<_GraphiteSessions>;
	/** fetch data from the table: "graphite.sessions" */
	_graphiteSessions: Array<_GraphiteSessions>;
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
	/** fetch aggregated fields from the table: "department_files" */
	department_files_aggregate: Department_Files_Aggregate;
	/** fetch data from the table: "department_files" using primary key columns */
	department_files_by_pk?: Maybe<Department_Files>;
	/** fetch data from the table: "department_roles" */
	department_roles: Array<Department_Roles>;
	/** fetch data from the table: "department_roles" using primary key columns */
	department_roles_by_pk?: Maybe<Department_Roles>;
	/** fetch data from the table: "departments" */
	departments: Array<Departments>;
	/** fetch aggregated fields from the table: "departments" */
	departments_aggregate: Departments_Aggregate;
	/** fetch data from the table: "departments" using primary key columns */
	departments_by_pk?: Maybe<Departments>;
	/** fetch data from the table: "storage.files" using primary key columns */
	file?: Maybe<Files>;
	/** fetch data from the table: "storage.files" */
	files: Array<Files>;
	/** fetch aggregated fields from the table: "storage.files" */
	filesAggregate: Files_Aggregate;
	graphite?: Maybe<GraphiteQuery>;
	/** execute function "graphite_search_kb_entries" which returns "kb_entries" */
	graphiteSearchKbEntries: Array<Kb_Entries>;
	/** execute function "graphite_search_kb_entries" and query aggregates on result of table type "kb_entries" */
	graphiteSearchKbEntriesAggregate: Kb_Entries_Aggregate;
	/** execute function "graphite_similar_kb_entries" which returns "kb_entries" */
	graphiteSimilarKbEntries: Array<Kb_Entries>;
	/** execute function "graphite_similar_kb_entries" and query aggregates on result of table type "kb_entries" */
	graphiteSimilarKbEntriesAggregate: Kb_Entries_Aggregate;
	/** fetch data from the table: "kb_entries" */
	kb_entries: Array<Kb_Entries>;
	/** fetch aggregated fields from the table: "kb_entries" */
	kb_entries_aggregate: Kb_Entries_Aggregate;
	/** fetch data from the table: "kb_entries" using primary key columns */
	kb_entries_by_pk?: Maybe<Kb_Entries>;
	/** An array relationship */
	kb_entry_departments: Array<Kb_Entry_Departments>;
	/** An aggregate relationship */
	kb_entry_departments_aggregate: Kb_Entry_Departments_Aggregate;
	/** fetch data from the table: "kb_entry_departments" using primary key columns */
	kb_entry_departments_by_pk?: Maybe<Kb_Entry_Departments>;
	/** fetch data from the table: "auth.users" using primary key columns */
	user?: Maybe<Users>;
	/** fetch data from the table: "user_departments" */
	user_departments: Array<User_Departments>;
	/** fetch aggregated fields from the table: "user_departments" */
	user_departments_aggregate: User_Departments_Aggregate;
	/** fetch data from the table: "user_departments" using primary key columns */
	user_departments_by_pk?: Maybe<User_Departments>;
	/** fetch data from the table: "auth.users" */
	users: Array<Users>;
	/** fetch aggregated fields from the table: "auth.users" */
	usersAggregate: Users_Aggregate;
};

export type Query_Root_GraphiteAssistantArgs = {
	id: Scalars["uuid"]["input"];
};

export type Query_Root_GraphiteAssistantsArgs = {
	distinct_on?: InputMaybe<Array<_GraphiteAssistants_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<_GraphiteAssistants_Order_By>>;
	where?: InputMaybe<_GraphiteAssistants_Bool_Exp>;
};

export type Query_Root_GraphiteSessionArgs = {
	id: Scalars["uuid"]["input"];
};

export type Query_Root_GraphiteSessionsArgs = {
	distinct_on?: InputMaybe<Array<_GraphiteSessions_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<_GraphiteSessions_Order_By>>;
	where?: InputMaybe<_GraphiteSessions_Bool_Exp>;
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

export type Query_RootDepartment_Files_AggregateArgs = {
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

export type Query_RootDepartments_AggregateArgs = {
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

export type Query_RootFilesAggregateArgs = {
	distinct_on?: InputMaybe<Array<Files_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Files_Order_By>>;
	where?: InputMaybe<Files_Bool_Exp>;
};

export type Query_RootGraphiteSearchKbEntriesArgs = {
	args: Graphite_Search_Kb_Entries_Args;
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Query_RootGraphiteSearchKbEntriesAggregateArgs = {
	args: Graphite_Search_Kb_Entries_Args;
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Query_RootGraphiteSimilarKbEntriesArgs = {
	args: Graphite_Similar_Kb_Entries_Args;
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Query_RootGraphiteSimilarKbEntriesAggregateArgs = {
	args: Graphite_Similar_Kb_Entries_Args;
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Query_RootKb_EntriesArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Query_RootKb_Entries_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Query_RootKb_Entries_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

export type Query_RootKb_Entry_DepartmentsArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entry_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entry_Departments_Order_By>>;
	where?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
};

export type Query_RootKb_Entry_Departments_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entry_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entry_Departments_Order_By>>;
	where?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
};

export type Query_RootKb_Entry_Departments_By_PkArgs = {
	id: Scalars["uuid"]["input"];
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

export type Query_RootUser_Departments_AggregateArgs = {
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

export type Query_RootUsersAggregateArgs = {
	distinct_on?: InputMaybe<Array<Users_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Users_Order_By>>;
	where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
	__typename?: "subscription_root";
	/** fetch data from the table: "graphite.assistants" using primary key columns */
	_graphiteAssistant?: Maybe<_GraphiteAssistants>;
	/** fetch data from the table in a streaming manner: "graphite.assistants" */
	_graphiteAssistantStream: Array<_GraphiteAssistants>;
	/** fetch data from the table: "graphite.assistants" */
	_graphiteAssistants: Array<_GraphiteAssistants>;
	/** fetch data from the table: "graphite.sessions" using primary key columns */
	_graphiteSession?: Maybe<_GraphiteSessions>;
	/** fetch data from the table in a streaming manner: "graphite.sessions" */
	_graphiteSessionStream: Array<_GraphiteSessions>;
	/** fetch data from the table: "graphite.sessions" */
	_graphiteSessions: Array<_GraphiteSessions>;
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
	/** fetch aggregated fields from the table: "department_files" */
	department_files_aggregate: Department_Files_Aggregate;
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
	/** fetch aggregated fields from the table: "departments" */
	departments_aggregate: Departments_Aggregate;
	/** fetch data from the table: "departments" using primary key columns */
	departments_by_pk?: Maybe<Departments>;
	/** fetch data from the table in a streaming manner: "departments" */
	departments_stream: Array<Departments>;
	/** fetch data from the table: "storage.files" using primary key columns */
	file?: Maybe<Files>;
	/** fetch data from the table: "storage.files" */
	files: Array<Files>;
	/** fetch aggregated fields from the table: "storage.files" */
	filesAggregate: Files_Aggregate;
	/** fetch data from the table in a streaming manner: "storage.files" */
	files_stream: Array<Files>;
	/** execute function "graphite_search_kb_entries" which returns "kb_entries" */
	graphiteSearchKbEntries: Array<Kb_Entries>;
	/** execute function "graphite_search_kb_entries" and query aggregates on result of table type "kb_entries" */
	graphiteSearchKbEntriesAggregate: Kb_Entries_Aggregate;
	/** execute function "graphite_similar_kb_entries" which returns "kb_entries" */
	graphiteSimilarKbEntries: Array<Kb_Entries>;
	/** execute function "graphite_similar_kb_entries" and query aggregates on result of table type "kb_entries" */
	graphiteSimilarKbEntriesAggregate: Kb_Entries_Aggregate;
	/** fetch data from the table: "kb_entries" */
	kb_entries: Array<Kb_Entries>;
	/** fetch aggregated fields from the table: "kb_entries" */
	kb_entries_aggregate: Kb_Entries_Aggregate;
	/** fetch data from the table: "kb_entries" using primary key columns */
	kb_entries_by_pk?: Maybe<Kb_Entries>;
	/** fetch data from the table in a streaming manner: "kb_entries" */
	kb_entries_stream: Array<Kb_Entries>;
	/** An array relationship */
	kb_entry_departments: Array<Kb_Entry_Departments>;
	/** An aggregate relationship */
	kb_entry_departments_aggregate: Kb_Entry_Departments_Aggregate;
	/** fetch data from the table: "kb_entry_departments" using primary key columns */
	kb_entry_departments_by_pk?: Maybe<Kb_Entry_Departments>;
	/** fetch data from the table in a streaming manner: "kb_entry_departments" */
	kb_entry_departments_stream: Array<Kb_Entry_Departments>;
	/** fetch data from the table: "auth.users" using primary key columns */
	user?: Maybe<Users>;
	/** fetch data from the table: "user_departments" */
	user_departments: Array<User_Departments>;
	/** fetch aggregated fields from the table: "user_departments" */
	user_departments_aggregate: User_Departments_Aggregate;
	/** fetch data from the table: "user_departments" using primary key columns */
	user_departments_by_pk?: Maybe<User_Departments>;
	/** fetch data from the table in a streaming manner: "user_departments" */
	user_departments_stream: Array<User_Departments>;
	/** fetch data from the table: "auth.users" */
	users: Array<Users>;
	/** fetch aggregated fields from the table: "auth.users" */
	usersAggregate: Users_Aggregate;
	/** fetch data from the table in a streaming manner: "auth.users" */
	users_stream: Array<Users>;
};

export type Subscription_Root_GraphiteAssistantArgs = {
	id: Scalars["uuid"]["input"];
};

export type Subscription_Root_GraphiteAssistantStreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<_GraphiteAssistants_Stream_Cursor_Input>>;
	where?: InputMaybe<_GraphiteAssistants_Bool_Exp>;
};

export type Subscription_Root_GraphiteAssistantsArgs = {
	distinct_on?: InputMaybe<Array<_GraphiteAssistants_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<_GraphiteAssistants_Order_By>>;
	where?: InputMaybe<_GraphiteAssistants_Bool_Exp>;
};

export type Subscription_Root_GraphiteSessionArgs = {
	id: Scalars["uuid"]["input"];
};

export type Subscription_Root_GraphiteSessionStreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<_GraphiteSessions_Stream_Cursor_Input>>;
	where?: InputMaybe<_GraphiteSessions_Bool_Exp>;
};

export type Subscription_Root_GraphiteSessionsArgs = {
	distinct_on?: InputMaybe<Array<_GraphiteSessions_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<_GraphiteSessions_Order_By>>;
	where?: InputMaybe<_GraphiteSessions_Bool_Exp>;
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

export type Subscription_RootDepartment_Files_AggregateArgs = {
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

export type Subscription_RootDepartments_AggregateArgs = {
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

export type Subscription_RootFilesAggregateArgs = {
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

export type Subscription_RootGraphiteSearchKbEntriesArgs = {
	args: Graphite_Search_Kb_Entries_Args;
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Subscription_RootGraphiteSearchKbEntriesAggregateArgs = {
	args: Graphite_Search_Kb_Entries_Args;
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Subscription_RootGraphiteSimilarKbEntriesArgs = {
	args: Graphite_Similar_Kb_Entries_Args;
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Subscription_RootGraphiteSimilarKbEntriesAggregateArgs = {
	args: Graphite_Similar_Kb_Entries_Args;
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Subscription_RootKb_EntriesArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Subscription_RootKb_Entries_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entries_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entries_Order_By>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Subscription_RootKb_Entries_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

export type Subscription_RootKb_Entries_StreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<Kb_Entries_Stream_Cursor_Input>>;
	where?: InputMaybe<Kb_Entries_Bool_Exp>;
};

export type Subscription_RootKb_Entry_DepartmentsArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entry_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entry_Departments_Order_By>>;
	where?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
};

export type Subscription_RootKb_Entry_Departments_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Kb_Entry_Departments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	order_by?: InputMaybe<Array<Kb_Entry_Departments_Order_By>>;
	where?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
};

export type Subscription_RootKb_Entry_Departments_By_PkArgs = {
	id: Scalars["uuid"]["input"];
};

export type Subscription_RootKb_Entry_Departments_StreamArgs = {
	batch_size: Scalars["Int"]["input"];
	cursor: Array<InputMaybe<Kb_Entry_Departments_Stream_Cursor_Input>>;
	where?: InputMaybe<Kb_Entry_Departments_Bool_Exp>;
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

export type Subscription_RootUser_Departments_AggregateArgs = {
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

export type Subscription_RootUsersAggregateArgs = {
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

/** aggregated selection of "user_departments" */
export type User_Departments_Aggregate = {
	__typename?: "user_departments_aggregate";
	aggregate?: Maybe<User_Departments_Aggregate_Fields>;
	nodes: Array<User_Departments>;
};

export type User_Departments_Aggregate_Bool_Exp = {
	bool_and?: InputMaybe<User_Departments_Aggregate_Bool_Exp_Bool_And>;
	bool_or?: InputMaybe<User_Departments_Aggregate_Bool_Exp_Bool_Or>;
	count?: InputMaybe<User_Departments_Aggregate_Bool_Exp_Count>;
};

export type User_Departments_Aggregate_Bool_Exp_Bool_And = {
	arguments: User_Departments_Select_Column_User_Departments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	filter?: InputMaybe<User_Departments_Bool_Exp>;
	predicate: Boolean_Comparison_Exp;
};

export type User_Departments_Aggregate_Bool_Exp_Bool_Or = {
	arguments: User_Departments_Select_Column_User_Departments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	filter?: InputMaybe<User_Departments_Bool_Exp>;
	predicate: Boolean_Comparison_Exp;
};

export type User_Departments_Aggregate_Bool_Exp_Count = {
	arguments?: InputMaybe<Array<User_Departments_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	filter?: InputMaybe<User_Departments_Bool_Exp>;
	predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_departments" */
export type User_Departments_Aggregate_Fields = {
	__typename?: "user_departments_aggregate_fields";
	count: Scalars["Int"]["output"];
	max?: Maybe<User_Departments_Max_Fields>;
	min?: Maybe<User_Departments_Min_Fields>;
};

/** aggregate fields of "user_departments" */
export type User_Departments_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<User_Departments_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
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

/** aggregate max on columns */
export type User_Departments_Max_Fields = {
	__typename?: "user_departments_max_fields";
	department_id?: Maybe<Scalars["uuid"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	joined_at?: Maybe<Scalars["timestamptz"]["output"]>;
	user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "user_departments" */
export type User_Departments_Max_Order_By = {
	department_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	joined_at?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Departments_Min_Fields = {
	__typename?: "user_departments_min_fields";
	department_id?: Maybe<Scalars["uuid"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	joined_at?: Maybe<Scalars["timestamptz"]["output"]>;
	user_id?: Maybe<Scalars["uuid"]["output"]>;
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

/** select "user_departments_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_departments" */
export enum User_Departments_Select_Column_User_Departments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
	/** column name */
	IsActive = "is_active",
}

/** select "user_departments_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_departments" */
export enum User_Departments_Select_Column_User_Departments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
	/** column name */
	IsActive = "is_active",
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
	/** An aggregate relationship */
	departments_aggregate: User_Departments_Aggregate;
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
export type UsersDepartments_AggregateArgs = {
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

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
	__typename?: "users_aggregate";
	aggregate?: Maybe<Users_Aggregate_Fields>;
	nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
	__typename?: "users_aggregate_fields";
	count: Scalars["Int"]["output"];
	max?: Maybe<Users_Max_Fields>;
	min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Users_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
	_and?: InputMaybe<Array<Users_Bool_Exp>>;
	_not?: InputMaybe<Users_Bool_Exp>;
	_or?: InputMaybe<Array<Users_Bool_Exp>>;
	avatarUrl?: InputMaybe<String_Comparison_Exp>;
	createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
	departments?: InputMaybe<User_Departments_Bool_Exp>;
	departments_aggregate?: InputMaybe<User_Departments_Aggregate_Bool_Exp>;
	displayName?: InputMaybe<String_Comparison_Exp>;
	email?: InputMaybe<Citext_Comparison_Exp>;
	emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	locale?: InputMaybe<String_Comparison_Exp>;
	refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
	securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
	updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
	__typename?: "users_max_fields";
	avatarUrl?: Maybe<Scalars["String"]["output"]>;
	createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
	displayName?: Maybe<Scalars["String"]["output"]>;
	email?: Maybe<Scalars["citext"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	locale?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
	__typename?: "users_min_fields";
	avatarUrl?: Maybe<Scalars["String"]["output"]>;
	createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
	displayName?: Maybe<Scalars["String"]["output"]>;
	email?: Maybe<Scalars["citext"]["output"]>;
	id?: Maybe<Scalars["uuid"]["output"]>;
	locale?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
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

export type GetKnowledgeBaseEntriesQueryVariables = Exact<{
	[key: string]: never;
}>;

export type GetKnowledgeBaseEntriesQuery = {
	__typename?: "query_root";
	kb_entries: Array<{
		__typename?: "kb_entries";
		id: string;
		title: string;
		summary?: string | null;
		content: string;
		created_at: string;
		updated_at: string;
		uploader: {
			__typename?: "users";
			id: string;
			displayName: string;
			email?: string | null;
			avatarUrl: string;
		};
		kb_entry_departments: Array<{
			__typename?: "kb_entry_departments";
			id: string;
			department: { __typename?: "departments"; id: string; name: string };
		}>;
	}>;
};

export type GetKnowledgeBaseEntryQueryVariables = Exact<{
	entryId: Scalars["uuid"]["input"];
}>;

export type GetKnowledgeBaseEntryQuery = {
	__typename?: "query_root";
	kb_entries_by_pk?: {
		__typename?: "kb_entries";
		id: string;
		title: string;
		summary?: string | null;
		content: string;
		created_at: string;
		updated_at: string;
		uploader: {
			__typename?: "users";
			id: string;
			displayName: string;
			email?: string | null;
			avatarUrl: string;
		};
		kb_entry_departments: Array<{
			__typename?: "kb_entry_departments";
			id: string;
			department: { __typename?: "departments"; id: string; name: string };
		}>;
	} | null;
};

export type GetDepartmentKnowledgeBaseQueryVariables = Exact<{
	departmentId: Scalars["uuid"]["input"];
}>;

export type GetDepartmentKnowledgeBaseQuery = {
	__typename?: "query_root";
	kb_entry_departments: Array<{
		__typename?: "kb_entry_departments";
		id: string;
		kb_entry: {
			__typename?: "kb_entries";
			id: string;
			title: string;
			summary?: string | null;
			content: string;
			created_at: string;
			updated_at: string;
			uploader: {
				__typename?: "users";
				id: string;
				displayName: string;
				email?: string | null;
				avatarUrl: string;
			};
		};
	}>;
};

export type CreateKnowledgeBaseEntryMutationVariables = Exact<{
	title: Scalars["String"]["input"];
	summary?: InputMaybe<Scalars["String"]["input"]>;
	content: Scalars["String"]["input"];
	departmentId: Scalars["uuid"]["input"];
}>;

export type CreateKnowledgeBaseEntryMutation = {
	__typename?: "mutation_root";
	insert_kb_entries_one?: {
		__typename?: "kb_entries";
		id: string;
		title: string;
		summary?: string | null;
		content: string;
		created_at: string;
		updated_at: string;
		uploader: {
			__typename?: "users";
			id: string;
			displayName: string;
			email?: string | null;
			avatarUrl: string;
		};
		kb_entry_departments: Array<{
			__typename?: "kb_entry_departments";
			id: string;
			department: { __typename?: "departments"; id: string; name: string };
		}>;
	} | null;
};

export type CreateKnowledgeBaseEntryWithDepartmentsMutationVariables = Exact<{
	title: Scalars["String"]["input"];
	summary?: InputMaybe<Scalars["String"]["input"]>;
	content: Scalars["String"]["input"];
	departmentAssociations:
		| Array<Kb_Entry_Departments_Insert_Input>
		| Kb_Entry_Departments_Insert_Input;
}>;

export type CreateKnowledgeBaseEntryWithDepartmentsMutation = {
	__typename?: "mutation_root";
	insert_kb_entries_one?: {
		__typename?: "kb_entries";
		id: string;
		title: string;
		summary?: string | null;
		content: string;
		created_at: string;
		updated_at: string;
		uploader: {
			__typename?: "users";
			id: string;
			displayName: string;
			email?: string | null;
			avatarUrl: string;
		};
		kb_entry_departments: Array<{
			__typename?: "kb_entry_departments";
			id: string;
			department: { __typename?: "departments"; id: string; name: string };
		}>;
	} | null;
};

export type UpdateKnowledgeBaseEntryMutationVariables = Exact<{
	entryId: Scalars["uuid"]["input"];
	title?: InputMaybe<Scalars["String"]["input"]>;
	summary?: InputMaybe<Scalars["String"]["input"]>;
	content?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateKnowledgeBaseEntryMutation = {
	__typename?: "mutation_root";
	update_kb_entries_by_pk?: {
		__typename?: "kb_entries";
		id: string;
		title: string;
		summary?: string | null;
		content: string;
		updated_at: string;
		uploader: {
			__typename?: "users";
			id: string;
			displayName: string;
			email?: string | null;
			avatarUrl: string;
		};
		kb_entry_departments: Array<{
			__typename?: "kb_entry_departments";
			id: string;
			department: { __typename?: "departments"; id: string; name: string };
		}>;
	} | null;
};

export type DeleteKnowledgeBaseEntryMutationVariables = Exact<{
	entryId: Scalars["uuid"]["input"];
}>;

export type DeleteKnowledgeBaseEntryMutation = {
	__typename?: "mutation_root";
	delete_kb_entries_by_pk?: {
		__typename?: "kb_entries";
		id: string;
		title: string;
	} | null;
};

export type AddKnowledgeBaseToDepartmentMutationVariables = Exact<{
	entryId: Scalars["uuid"]["input"];
	departmentId: Scalars["uuid"]["input"];
}>;

export type AddKnowledgeBaseToDepartmentMutation = {
	__typename?: "mutation_root";
	insert_kb_entry_departments_one?: {
		__typename?: "kb_entry_departments";
		id: string;
		department: { __typename?: "departments"; id: string; name: string };
	} | null;
};

export type RemoveKnowledgeBaseFromDepartmentMutationVariables = Exact<{
	entryId: Scalars["uuid"]["input"];
	departmentId: Scalars["uuid"]["input"];
}>;

export type RemoveKnowledgeBaseFromDepartmentMutation = {
	__typename?: "mutation_root";
	delete_kb_entry_departments?: {
		__typename?: "kb_entry_departments_mutation_response";
		affected_rows: number;
	} | null;
};

export type StartAssistantSessionMutationVariables = Exact<{
	assistantId: Scalars["String"]["input"];
}>;

export type StartAssistantSessionMutation = {
	__typename?: "mutation_root";
	graphite?: {
		__typename?: "graphiteMutation";
		startSession: {
			__typename?: "graphiteSession";
			sessionID: string;
			assistantID: string;
			userID: string;
			createdAt: any;
		};
	} | null;
};

export type SendAssistantMessageMutationVariables = Exact<{
	sessionId: Scalars["String"]["input"];
	message: Scalars["String"]["input"];
	prevMessageId: Scalars["String"]["input"];
}>;

export type SendAssistantMessageMutation = {
	__typename?: "mutation_root";
	graphite?: {
		__typename?: "graphiteMutation";
		sendMessage: {
			__typename?: "graphiteMessageResponse";
			sessionID: string;
			messages: Array<{
				__typename?: "graphiteMessage";
				id: string;
				createdAt: any;
				role: string;
				message: string;
			}>;
		};
	} | null;
};

export type GetAssistantSessionsQueryVariables = Exact<{
	[key: string]: never;
}>;

export type GetAssistantSessionsQuery = {
	__typename?: "query_root";
	graphite?: {
		__typename?: "graphiteQuery";
		sessions: Array<{
			__typename?: "graphiteSession";
			sessionID: string;
			assistantID: string;
			userID: string;
			createdAt: any;
		}>;
	} | null;
};

export type GetSessionMessagesQueryVariables = Exact<{
	sessionId: Scalars["String"]["input"];
}>;

export type GetSessionMessagesQuery = {
	__typename?: "query_root";
	graphite?: {
		__typename?: "graphiteQuery";
		sessionMessages?: {
			__typename?: "graphiteMessageResponse";
			sessionID: string;
			messages: Array<{
				__typename?: "graphiteMessage";
				id: string;
				createdAt: any;
				role: string;
				message: string;
			}>;
		} | null;
	} | null;
};

export type GetDashboardSummaryQueryVariables = Exact<{ [key: string]: never }>;

export type GetDashboardSummaryQuery = {
	__typename?: "query_root";
	user_departments: Array<{
		__typename?: "departments";
		id: string;
		name: string;
		description?: string | null;
		budget?: any | null;
		employees_aggregate: {
			__typename?: "user_departments_aggregate";
			aggregate?: {
				__typename?: "user_departments_aggregate_fields";
				count: number;
			} | null;
		};
		files_aggregate: {
			__typename?: "department_files_aggregate";
			aggregate?: {
				__typename?: "department_files_aggregate_fields";
				count: number;
			} | null;
		};
		kb_entry_departments_aggregate: {
			__typename?: "kb_entry_departments_aggregate";
			aggregate?: {
				__typename?: "kb_entry_departments_aggregate_fields";
				count: number;
			} | null;
		};
	}>;
	recent_kb_entries: Array<{
		__typename?: "kb_entries";
		id: string;
		title: string;
		summary?: string | null;
		created_at: string;
		uploader: {
			__typename?: "users";
			id: string;
			displayName: string;
			email?: string | null;
		};
	}>;
};

export type GetUserFilesStatsQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserFilesStatsQuery = {
	__typename?: "query_root";
	user_files: Array<{
		__typename?: "files";
		id: string;
		name?: string | null;
		size?: number | null;
		mimeType?: string | null;
		createdAt: string;
	}>;
	user_files_aggregate: {
		__typename?: "files_aggregate";
		aggregate?: {
			__typename?: "files_aggregate_fields";
			count: number;
			sum?: { __typename?: "files_sum_fields"; size?: number | null } | null;
		} | null;
	};
	accessible_department_files: Array<{
		__typename?: "department_files";
		id: string;
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
	recent_files: Array<{
		__typename?: "files";
		id: string;
		name?: string | null;
		size?: number | null;
		mimeType?: string | null;
		createdAt: string;
		uploadedByUserId?: string | null;
	}>;
};

export type GetUserKnowledgeBaseStatsQueryVariables = Exact<{
	[key: string]: never;
}>;

export type GetUserKnowledgeBaseStatsQuery = {
	__typename?: "query_root";
	user_kb_entries: Array<{
		__typename?: "kb_entries";
		id: string;
		title: string;
		summary?: string | null;
		created_at: string;
		kb_entry_departments: Array<{
			__typename?: "kb_entry_departments";
			department: { __typename?: "departments"; id: string; name: string };
		}>;
	}>;
	user_kb_entries_aggregate: {
		__typename?: "kb_entries_aggregate";
		aggregate?: {
			__typename?: "kb_entries_aggregate_fields";
			count: number;
		} | null;
	};
	accessible_kb_entries: Array<{
		__typename?: "kb_entries";
		id: string;
		title: string;
		summary?: string | null;
		created_at: string;
		uploader: {
			__typename?: "users";
			id: string;
			displayName: string;
			email?: string | null;
		};
		kb_entry_departments: Array<{
			__typename?: "kb_entry_departments";
			department: { __typename?: "departments"; id: string; name: string };
		}>;
	}>;
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

export const GetKnowledgeBaseEntriesDocument = `
    query GetKnowledgeBaseEntries {
  kb_entries(order_by: {created_at: desc}) {
    id
    title
    summary
    content
    created_at
    updated_at
    uploader {
      id
      displayName
      email
      avatarUrl
    }
    kb_entry_departments {
      id
      department {
        id
        name
      }
    }
  }
}
    `;

export const useGetKnowledgeBaseEntriesQuery = <
	TData = GetKnowledgeBaseEntriesQuery,
	TError = unknown,
>(
	variables?: GetKnowledgeBaseEntriesQueryVariables,
	options?: Omit<
		UseQueryOptions<GetKnowledgeBaseEntriesQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetKnowledgeBaseEntriesQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetKnowledgeBaseEntriesQuery, TError, TData>({
		queryKey:
			variables === undefined
				? ["GetKnowledgeBaseEntries"]
				: ["GetKnowledgeBaseEntries", variables],
		queryFn: useAuthenticatedFetcher<
			GetKnowledgeBaseEntriesQuery,
			GetKnowledgeBaseEntriesQueryVariables
		>(GetKnowledgeBaseEntriesDocument).bind(null, variables),
		...options,
	});
};

useGetKnowledgeBaseEntriesQuery.getKey = (
	variables?: GetKnowledgeBaseEntriesQueryVariables,
) =>
	variables === undefined
		? ["GetKnowledgeBaseEntries"]
		: ["GetKnowledgeBaseEntries", variables];

export const GetKnowledgeBaseEntryDocument = `
    query GetKnowledgeBaseEntry($entryId: uuid!) {
  kb_entries_by_pk(id: $entryId) {
    id
    title
    summary
    content
    created_at
    updated_at
    uploader {
      id
      displayName
      email
      avatarUrl
    }
    kb_entry_departments {
      id
      department {
        id
        name
      }
    }
  }
}
    `;

export const useGetKnowledgeBaseEntryQuery = <
	TData = GetKnowledgeBaseEntryQuery,
	TError = unknown,
>(
	variables: GetKnowledgeBaseEntryQueryVariables,
	options?: Omit<
		UseQueryOptions<GetKnowledgeBaseEntryQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetKnowledgeBaseEntryQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetKnowledgeBaseEntryQuery, TError, TData>({
		queryKey: ["GetKnowledgeBaseEntry", variables],
		queryFn: useAuthenticatedFetcher<
			GetKnowledgeBaseEntryQuery,
			GetKnowledgeBaseEntryQueryVariables
		>(GetKnowledgeBaseEntryDocument).bind(null, variables),
		...options,
	});
};

useGetKnowledgeBaseEntryQuery.getKey = (
	variables: GetKnowledgeBaseEntryQueryVariables,
) => ["GetKnowledgeBaseEntry", variables];

export const GetDepartmentKnowledgeBaseDocument = `
    query GetDepartmentKnowledgeBase($departmentId: uuid!) {
  kb_entry_departments(
    where: {department_id: {_eq: $departmentId}}
    order_by: {kb_entry: {created_at: desc}}
  ) {
    id
    kb_entry {
      id
      title
      summary
      content
      created_at
      updated_at
      uploader {
        id
        displayName
        email
        avatarUrl
      }
    }
  }
}
    `;

export const useGetDepartmentKnowledgeBaseQuery = <
	TData = GetDepartmentKnowledgeBaseQuery,
	TError = unknown,
>(
	variables: GetDepartmentKnowledgeBaseQueryVariables,
	options?: Omit<
		UseQueryOptions<GetDepartmentKnowledgeBaseQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetDepartmentKnowledgeBaseQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetDepartmentKnowledgeBaseQuery, TError, TData>({
		queryKey: ["GetDepartmentKnowledgeBase", variables],
		queryFn: useAuthenticatedFetcher<
			GetDepartmentKnowledgeBaseQuery,
			GetDepartmentKnowledgeBaseQueryVariables
		>(GetDepartmentKnowledgeBaseDocument).bind(null, variables),
		...options,
	});
};

useGetDepartmentKnowledgeBaseQuery.getKey = (
	variables: GetDepartmentKnowledgeBaseQueryVariables,
) => ["GetDepartmentKnowledgeBase", variables];

export const CreateKnowledgeBaseEntryDocument = `
    mutation CreateKnowledgeBaseEntry($title: String!, $summary: String, $content: String!, $departmentId: uuid!) {
  insert_kb_entries_one(
    object: {title: $title, summary: $summary, content: $content, kb_entry_departments: {data: [{department_id: $departmentId}]}}
  ) {
    id
    title
    summary
    content
    created_at
    updated_at
    uploader {
      id
      displayName
      email
      avatarUrl
    }
    kb_entry_departments {
      id
      department {
        id
        name
      }
    }
  }
}
    `;

export const useCreateKnowledgeBaseEntryMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		CreateKnowledgeBaseEntryMutation,
		TError,
		CreateKnowledgeBaseEntryMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		CreateKnowledgeBaseEntryMutation,
		TError,
		CreateKnowledgeBaseEntryMutationVariables,
		TContext
	>({
		mutationKey: ["CreateKnowledgeBaseEntry"],
		mutationFn: useAuthenticatedFetcher<
			CreateKnowledgeBaseEntryMutation,
			CreateKnowledgeBaseEntryMutationVariables
		>(CreateKnowledgeBaseEntryDocument),
		...options,
	});
};

export const CreateKnowledgeBaseEntryWithDepartmentsDocument = `
    mutation CreateKnowledgeBaseEntryWithDepartments($title: String!, $summary: String, $content: String!, $departmentAssociations: [kb_entry_departments_insert_input!]!) {
  insert_kb_entries_one(
    object: {title: $title, summary: $summary, content: $content, kb_entry_departments: {data: $departmentAssociations}}
  ) {
    id
    title
    summary
    content
    created_at
    updated_at
    uploader {
      id
      displayName
      email
      avatarUrl
    }
    kb_entry_departments {
      id
      department {
        id
        name
      }
    }
  }
}
    `;

export const useCreateKnowledgeBaseEntryWithDepartmentsMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		CreateKnowledgeBaseEntryWithDepartmentsMutation,
		TError,
		CreateKnowledgeBaseEntryWithDepartmentsMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		CreateKnowledgeBaseEntryWithDepartmentsMutation,
		TError,
		CreateKnowledgeBaseEntryWithDepartmentsMutationVariables,
		TContext
	>({
		mutationKey: ["CreateKnowledgeBaseEntryWithDepartments"],
		mutationFn: useAuthenticatedFetcher<
			CreateKnowledgeBaseEntryWithDepartmentsMutation,
			CreateKnowledgeBaseEntryWithDepartmentsMutationVariables
		>(CreateKnowledgeBaseEntryWithDepartmentsDocument),
		...options,
	});
};

export const UpdateKnowledgeBaseEntryDocument = `
    mutation UpdateKnowledgeBaseEntry($entryId: uuid!, $title: String, $summary: String, $content: String) {
  update_kb_entries_by_pk(
    pk_columns: {id: $entryId}
    _set: {title: $title, summary: $summary, content: $content}
  ) {
    id
    title
    summary
    content
    updated_at
    uploader {
      id
      displayName
      email
      avatarUrl
    }
    kb_entry_departments {
      id
      department {
        id
        name
      }
    }
  }
}
    `;

export const useUpdateKnowledgeBaseEntryMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		UpdateKnowledgeBaseEntryMutation,
		TError,
		UpdateKnowledgeBaseEntryMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		UpdateKnowledgeBaseEntryMutation,
		TError,
		UpdateKnowledgeBaseEntryMutationVariables,
		TContext
	>({
		mutationKey: ["UpdateKnowledgeBaseEntry"],
		mutationFn: useAuthenticatedFetcher<
			UpdateKnowledgeBaseEntryMutation,
			UpdateKnowledgeBaseEntryMutationVariables
		>(UpdateKnowledgeBaseEntryDocument),
		...options,
	});
};

export const DeleteKnowledgeBaseEntryDocument = `
    mutation DeleteKnowledgeBaseEntry($entryId: uuid!) {
  delete_kb_entries_by_pk(id: $entryId) {
    id
    title
  }
}
    `;

export const useDeleteKnowledgeBaseEntryMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		DeleteKnowledgeBaseEntryMutation,
		TError,
		DeleteKnowledgeBaseEntryMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		DeleteKnowledgeBaseEntryMutation,
		TError,
		DeleteKnowledgeBaseEntryMutationVariables,
		TContext
	>({
		mutationKey: ["DeleteKnowledgeBaseEntry"],
		mutationFn: useAuthenticatedFetcher<
			DeleteKnowledgeBaseEntryMutation,
			DeleteKnowledgeBaseEntryMutationVariables
		>(DeleteKnowledgeBaseEntryDocument),
		...options,
	});
};

export const AddKnowledgeBaseToDepartmentDocument = `
    mutation AddKnowledgeBaseToDepartment($entryId: uuid!, $departmentId: uuid!) {
  insert_kb_entry_departments_one(
    object: {kb_entry_id: $entryId, department_id: $departmentId}
  ) {
    id
    department {
      id
      name
    }
  }
}
    `;

export const useAddKnowledgeBaseToDepartmentMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		AddKnowledgeBaseToDepartmentMutation,
		TError,
		AddKnowledgeBaseToDepartmentMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		AddKnowledgeBaseToDepartmentMutation,
		TError,
		AddKnowledgeBaseToDepartmentMutationVariables,
		TContext
	>({
		mutationKey: ["AddKnowledgeBaseToDepartment"],
		mutationFn: useAuthenticatedFetcher<
			AddKnowledgeBaseToDepartmentMutation,
			AddKnowledgeBaseToDepartmentMutationVariables
		>(AddKnowledgeBaseToDepartmentDocument),
		...options,
	});
};

export const RemoveKnowledgeBaseFromDepartmentDocument = `
    mutation RemoveKnowledgeBaseFromDepartment($entryId: uuid!, $departmentId: uuid!) {
  delete_kb_entry_departments(
    where: {kb_entry_id: {_eq: $entryId}, department_id: {_eq: $departmentId}}
  ) {
    affected_rows
  }
}
    `;

export const useRemoveKnowledgeBaseFromDepartmentMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		RemoveKnowledgeBaseFromDepartmentMutation,
		TError,
		RemoveKnowledgeBaseFromDepartmentMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		RemoveKnowledgeBaseFromDepartmentMutation,
		TError,
		RemoveKnowledgeBaseFromDepartmentMutationVariables,
		TContext
	>({
		mutationKey: ["RemoveKnowledgeBaseFromDepartment"],
		mutationFn: useAuthenticatedFetcher<
			RemoveKnowledgeBaseFromDepartmentMutation,
			RemoveKnowledgeBaseFromDepartmentMutationVariables
		>(RemoveKnowledgeBaseFromDepartmentDocument),
		...options,
	});
};

export const StartAssistantSessionDocument = `
    mutation StartAssistantSession($assistantId: String!) {
  graphite {
    startSession(assistantID: $assistantId) {
      sessionID
      assistantID
      userID
      createdAt
    }
  }
}
    `;

export const useStartAssistantSessionMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		StartAssistantSessionMutation,
		TError,
		StartAssistantSessionMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		StartAssistantSessionMutation,
		TError,
		StartAssistantSessionMutationVariables,
		TContext
	>({
		mutationKey: ["StartAssistantSession"],
		mutationFn: useAuthenticatedFetcher<
			StartAssistantSessionMutation,
			StartAssistantSessionMutationVariables
		>(StartAssistantSessionDocument),
		...options,
	});
};

export const SendAssistantMessageDocument = `
    mutation SendAssistantMessage($sessionId: String!, $message: String!, $prevMessageId: String!) {
  graphite {
    sendMessage(
      sessionID: $sessionId
      message: $message
      prevMessageID: $prevMessageId
    ) {
      sessionID
      messages {
        id
        createdAt
        role
        message
      }
    }
  }
}
    `;

export const useSendAssistantMessageMutation = <
	TError = unknown,
	TContext = unknown,
>(
	options?: UseMutationOptions<
		SendAssistantMessageMutation,
		TError,
		SendAssistantMessageMutationVariables,
		TContext
	>,
) => {
	return useMutation<
		SendAssistantMessageMutation,
		TError,
		SendAssistantMessageMutationVariables,
		TContext
	>({
		mutationKey: ["SendAssistantMessage"],
		mutationFn: useAuthenticatedFetcher<
			SendAssistantMessageMutation,
			SendAssistantMessageMutationVariables
		>(SendAssistantMessageDocument),
		...options,
	});
};

export const GetAssistantSessionsDocument = `
    query GetAssistantSessions {
  graphite {
    sessions {
      sessionID
      assistantID
      userID
      createdAt
    }
  }
}
    `;

export const useGetAssistantSessionsQuery = <
	TData = GetAssistantSessionsQuery,
	TError = unknown,
>(
	variables?: GetAssistantSessionsQueryVariables,
	options?: Omit<
		UseQueryOptions<GetAssistantSessionsQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetAssistantSessionsQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetAssistantSessionsQuery, TError, TData>({
		queryKey:
			variables === undefined
				? ["GetAssistantSessions"]
				: ["GetAssistantSessions", variables],
		queryFn: useAuthenticatedFetcher<
			GetAssistantSessionsQuery,
			GetAssistantSessionsQueryVariables
		>(GetAssistantSessionsDocument).bind(null, variables),
		...options,
	});
};

useGetAssistantSessionsQuery.getKey = (
	variables?: GetAssistantSessionsQueryVariables,
) =>
	variables === undefined
		? ["GetAssistantSessions"]
		: ["GetAssistantSessions", variables];

export const GetSessionMessagesDocument = `
    query GetSessionMessages($sessionId: String!) {
  graphite {
    sessionMessages(sessionID: $sessionId) {
      sessionID
      messages {
        id
        createdAt
        role
        message
      }
    }
  }
}
    `;

export const useGetSessionMessagesQuery = <
	TData = GetSessionMessagesQuery,
	TError = unknown,
>(
	variables: GetSessionMessagesQueryVariables,
	options?: Omit<
		UseQueryOptions<GetSessionMessagesQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetSessionMessagesQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetSessionMessagesQuery, TError, TData>({
		queryKey: ["GetSessionMessages", variables],
		queryFn: useAuthenticatedFetcher<
			GetSessionMessagesQuery,
			GetSessionMessagesQueryVariables
		>(GetSessionMessagesDocument).bind(null, variables),
		...options,
	});
};

useGetSessionMessagesQuery.getKey = (
	variables: GetSessionMessagesQueryVariables,
) => ["GetSessionMessages", variables];

export const GetDashboardSummaryDocument = `
    query GetDashboardSummary {
  user_departments: departments {
    id
    name
    description
    budget
    employees_aggregate(where: {is_active: {_eq: true}}) {
      aggregate {
        count
      }
    }
    files_aggregate {
      aggregate {
        count
      }
    }
    kb_entry_departments_aggregate {
      aggregate {
        count
      }
    }
  }
  recent_kb_entries: kb_entries(order_by: {created_at: desc}, limit: 5) {
    id
    title
    summary
    created_at
    uploader {
      id
      displayName
      email
    }
  }
}
    `;

export const useGetDashboardSummaryQuery = <
	TData = GetDashboardSummaryQuery,
	TError = unknown,
>(
	variables?: GetDashboardSummaryQueryVariables,
	options?: Omit<
		UseQueryOptions<GetDashboardSummaryQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetDashboardSummaryQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetDashboardSummaryQuery, TError, TData>({
		queryKey:
			variables === undefined
				? ["GetDashboardSummary"]
				: ["GetDashboardSummary", variables],
		queryFn: useAuthenticatedFetcher<
			GetDashboardSummaryQuery,
			GetDashboardSummaryQueryVariables
		>(GetDashboardSummaryDocument).bind(null, variables),
		...options,
	});
};

useGetDashboardSummaryQuery.getKey = (
	variables?: GetDashboardSummaryQueryVariables,
) =>
	variables === undefined
		? ["GetDashboardSummary"]
		: ["GetDashboardSummary", variables];

export const GetUserFilesStatsDocument = `
    query GetUserFilesStats {
  user_files: files(order_by: {createdAt: desc}, limit: 10) {
    id
    name
    size
    mimeType
    createdAt
  }
  user_files_aggregate: filesAggregate {
    aggregate {
      count
      sum {
        size
      }
    }
  }
  accessible_department_files: department_files(
    order_by: {file: {createdAt: desc}}
    limit: 10
  ) {
    id
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
  recent_files: files(
    order_by: {createdAt: desc}
    limit: 5
    where: {isUploaded: {_eq: true}}
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

export const useGetUserFilesStatsQuery = <
	TData = GetUserFilesStatsQuery,
	TError = unknown,
>(
	variables?: GetUserFilesStatsQueryVariables,
	options?: Omit<
		UseQueryOptions<GetUserFilesStatsQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetUserFilesStatsQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetUserFilesStatsQuery, TError, TData>({
		queryKey:
			variables === undefined
				? ["GetUserFilesStats"]
				: ["GetUserFilesStats", variables],
		queryFn: useAuthenticatedFetcher<
			GetUserFilesStatsQuery,
			GetUserFilesStatsQueryVariables
		>(GetUserFilesStatsDocument).bind(null, variables),
		...options,
	});
};

useGetUserFilesStatsQuery.getKey = (
	variables?: GetUserFilesStatsQueryVariables,
) =>
	variables === undefined
		? ["GetUserFilesStats"]
		: ["GetUserFilesStats", variables];

export const GetUserKnowledgeBaseStatsDocument = `
    query GetUserKnowledgeBaseStats {
  user_kb_entries: kb_entries(order_by: {created_at: desc}, limit: 10) {
    id
    title
    summary
    created_at
    kb_entry_departments {
      department {
        id
        name
      }
    }
  }
  user_kb_entries_aggregate: kb_entries_aggregate {
    aggregate {
      count
    }
  }
  accessible_kb_entries: kb_entries(order_by: {created_at: desc}, limit: 10) {
    id
    title
    summary
    created_at
    uploader {
      id
      displayName
      email
    }
    kb_entry_departments {
      department {
        id
        name
      }
    }
  }
}
    `;

export const useGetUserKnowledgeBaseStatsQuery = <
	TData = GetUserKnowledgeBaseStatsQuery,
	TError = unknown,
>(
	variables?: GetUserKnowledgeBaseStatsQueryVariables,
	options?: Omit<
		UseQueryOptions<GetUserKnowledgeBaseStatsQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetUserKnowledgeBaseStatsQuery,
			TError,
			TData
		>["queryKey"];
	},
) => {
	return useQuery<GetUserKnowledgeBaseStatsQuery, TError, TData>({
		queryKey:
			variables === undefined
				? ["GetUserKnowledgeBaseStats"]
				: ["GetUserKnowledgeBaseStats", variables],
		queryFn: useAuthenticatedFetcher<
			GetUserKnowledgeBaseStatsQuery,
			GetUserKnowledgeBaseStatsQueryVariables
		>(GetUserKnowledgeBaseStatsDocument).bind(null, variables),
		...options,
	});
};

useGetUserKnowledgeBaseStatsQuery.getKey = (
	variables?: GetUserKnowledgeBaseStatsQueryVariables,
) =>
	variables === undefined
		? ["GetUserKnowledgeBaseStats"]
		: ["GetUserKnowledgeBaseStats", variables];
