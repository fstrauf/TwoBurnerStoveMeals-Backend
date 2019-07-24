// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  recipe: (where?: RecipeWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  recipe: (where: RecipeWhereUniqueInput) => RecipeNullablePromise;
  recipes: (args?: {
    where?: RecipeWhereInput;
    orderBy?: RecipeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Recipe>;
  recipesConnection: (args?: {
    where?: RecipeWhereInput;
    orderBy?: RecipeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => RecipeConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createRecipe: (data: RecipeCreateInput) => RecipePromise;
  updateRecipe: (args: {
    data: RecipeUpdateInput;
    where: RecipeWhereUniqueInput;
  }) => RecipePromise;
  updateManyRecipes: (args: {
    data: RecipeUpdateManyMutationInput;
    where?: RecipeWhereInput;
  }) => BatchPayloadPromise;
  upsertRecipe: (args: {
    where: RecipeWhereUniqueInput;
    create: RecipeCreateInput;
    update: RecipeUpdateInput;
  }) => RecipePromise;
  deleteRecipe: (where: RecipeWhereUniqueInput) => RecipePromise;
  deleteManyRecipes: (where?: RecipeWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  recipe: (
    where?: RecipeSubscriptionWhereInput
  ) => RecipeSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type RecipeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "title_ASC"
  | "title_DESC"
  | "ingredients_ASC"
  | "ingredients_DESC"
  | "directions_ASC"
  | "directions_DESC"
  | "isPublished_ASC"
  | "isPublished_DESC";

export type UserOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type RecipeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  title?: Maybe<String>;
}>;

export interface RecipeWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  ingredients?: Maybe<String>;
  ingredients_not?: Maybe<String>;
  ingredients_in?: Maybe<String[] | String>;
  ingredients_not_in?: Maybe<String[] | String>;
  ingredients_lt?: Maybe<String>;
  ingredients_lte?: Maybe<String>;
  ingredients_gt?: Maybe<String>;
  ingredients_gte?: Maybe<String>;
  ingredients_contains?: Maybe<String>;
  ingredients_not_contains?: Maybe<String>;
  ingredients_starts_with?: Maybe<String>;
  ingredients_not_starts_with?: Maybe<String>;
  ingredients_ends_with?: Maybe<String>;
  ingredients_not_ends_with?: Maybe<String>;
  directions?: Maybe<String>;
  directions_not?: Maybe<String>;
  directions_in?: Maybe<String[] | String>;
  directions_not_in?: Maybe<String[] | String>;
  directions_lt?: Maybe<String>;
  directions_lte?: Maybe<String>;
  directions_gt?: Maybe<String>;
  directions_gte?: Maybe<String>;
  directions_contains?: Maybe<String>;
  directions_not_contains?: Maybe<String>;
  directions_starts_with?: Maybe<String>;
  directions_not_starts_with?: Maybe<String>;
  directions_ends_with?: Maybe<String>;
  directions_not_ends_with?: Maybe<String>;
  isPublished?: Maybe<Boolean>;
  isPublished_not?: Maybe<Boolean>;
  AND?: Maybe<RecipeWhereInput[] | RecipeWhereInput>;
  OR?: Maybe<RecipeWhereInput[] | RecipeWhereInput>;
  NOT?: Maybe<RecipeWhereInput[] | RecipeWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface RecipeCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  ingredients: String;
  directions: String;
  isPublished?: Maybe<Boolean>;
}

export interface RecipeUpdateInput {
  title?: Maybe<String>;
  ingredients?: Maybe<String>;
  directions?: Maybe<String>;
  isPublished?: Maybe<Boolean>;
}

export interface RecipeUpdateManyMutationInput {
  title?: Maybe<String>;
  ingredients?: Maybe<String>;
  directions?: Maybe<String>;
  isPublished?: Maybe<Boolean>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface RecipeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<RecipeWhereInput>;
  AND?: Maybe<RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput>;
  OR?: Maybe<RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput>;
  NOT?: Maybe<RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Recipe {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  title: String;
  ingredients: String;
  directions: String;
  isPublished: Boolean;
}

export interface RecipePromise extends Promise<Recipe>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  ingredients: () => Promise<String>;
  directions: () => Promise<String>;
  isPublished: () => Promise<Boolean>;
}

export interface RecipeSubscription
  extends Promise<AsyncIterator<Recipe>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  ingredients: () => Promise<AsyncIterator<String>>;
  directions: () => Promise<AsyncIterator<String>>;
  isPublished: () => Promise<AsyncIterator<Boolean>>;
}

export interface RecipeNullablePromise
  extends Promise<Recipe | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  ingredients: () => Promise<String>;
  directions: () => Promise<String>;
  isPublished: () => Promise<Boolean>;
}

export interface RecipeConnection {
  pageInfo: PageInfo;
  edges: RecipeEdge[];
}

export interface RecipeConnectionPromise
  extends Promise<RecipeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RecipeEdge>>() => T;
  aggregate: <T = AggregateRecipePromise>() => T;
}

export interface RecipeConnectionSubscription
  extends Promise<AsyncIterator<RecipeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RecipeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRecipeSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface RecipeEdge {
  node: Recipe;
  cursor: String;
}

export interface RecipeEdgePromise extends Promise<RecipeEdge>, Fragmentable {
  node: <T = RecipePromise>() => T;
  cursor: () => Promise<String>;
}

export interface RecipeEdgeSubscription
  extends Promise<AsyncIterator<RecipeEdge>>,
    Fragmentable {
  node: <T = RecipeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateRecipe {
  count: Int;
}

export interface AggregateRecipePromise
  extends Promise<AggregateRecipe>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRecipeSubscription
  extends Promise<AsyncIterator<AggregateRecipe>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface RecipeSubscriptionPayload {
  mutation: MutationType;
  node: Recipe;
  updatedFields: String[];
  previousValues: RecipePreviousValues;
}

export interface RecipeSubscriptionPayloadPromise
  extends Promise<RecipeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RecipePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RecipePreviousValuesPromise>() => T;
}

export interface RecipeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RecipeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RecipeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RecipePreviousValuesSubscription>() => T;
}

export interface RecipePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  title: String;
  ingredients: String;
  directions: String;
  isPublished: Boolean;
}

export interface RecipePreviousValuesPromise
  extends Promise<RecipePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  ingredients: () => Promise<String>;
  directions: () => Promise<String>;
  isPublished: () => Promise<Boolean>;
}

export interface RecipePreviousValuesSubscription
  extends Promise<AsyncIterator<RecipePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  ingredients: () => Promise<AsyncIterator<String>>;
  directions: () => Promise<AsyncIterator<String>>;
  isPublished: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Recipe",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;