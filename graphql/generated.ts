import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  UUID: any;
};

export type Article = {
  __typename?: 'Article';
  content?: Maybe<Scalars['String']>;
  feed: ArticleSourceFeed;
  id: Scalars['UUID'];
  imageUrl?: Maybe<Scalars['String']>;
  keywordCount: Scalars['Int'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  source: ArticleSource;
  title: Scalars['String'];
  url: Scalars['String'];
};


export type ArticleFeedArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  feeds: Array<ArticleSourceFeed>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type ArticleSource = {
  __typename?: 'ArticleSource';
  articles: Array<Article>;
  feeds: Array<ArticleSourceFeed>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  website: Scalars['String'];
};

export type ArticleSourceFeed = {
  __typename?: 'ArticleSourceFeed';
  articles: Array<Article>;
  category: ArticleCategory;
  id: Scalars['UUID'];
  name: Scalars['String'];
  scrapedAt?: Maybe<Scalars['DateTime']>;
  source: ArticleSource;
  url: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  address: Scalars['String'];
  city: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  postalCode: Scalars['String'];
  provider: Provider;
};

export type Provider = {
  __typename?: 'Provider';
  id: Scalars['UUID'];
  locations: Array<Location>;
  name: Scalars['String'];
  offerings: Array<ServiceOffering>;
  scrapedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  website: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  article: Article;
  articleCategories: Array<ArticleCategory>;
  articleCategory: ArticleCategory;
  articleSource: ArticleSource;
  articleSourceFeed: ArticleSourceFeed;
  articleSourceFeeds: Array<ArticleSourceFeed>;
  articleSources: Array<ArticleSource>;
  articles: Array<Article>;
  location: Array<Location>;
  locations: Array<Location>;
  provider: Provider;
  providers: Array<Provider>;
  serviceAgeGroup: ServiceAgeGroup;
  serviceAgeGroups: Array<ServiceAgeGroup>;
  serviceType: ServiceType;
  serviceTypes: Array<ServiceType>;
};


export type QueryArticleArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryArticleCategoryArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryArticleSourceArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryArticleSourceFeedArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryProviderArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryServiceAgeGroupArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryServiceTypeArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};

export type Service = {
  __typename?: 'Service';
  dependants: Array<Service>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  medicalName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  offerings: Array<ServiceOffering>;
  parent?: Maybe<Service>;
};

export type ServiceAgeGroup = {
  __typename?: 'ServiceAgeGroup';
  id: Scalars['UUID'];
  name: Scalars['String'];
  offerings: Array<ServiceOffering>;
};

export type ServiceOffering = {
  __typename?: 'ServiceOffering';
  ageGroups: Array<ServiceAgeGroup>;
  id: Scalars['UUID'];
  notes?: Maybe<Scalars['String']>;
  provider: Provider;
  service: Service;
  times: Array<ServiceTime>;
  types: Array<ServiceType>;
};

export type ServiceTime = {
  __typename?: 'ServiceTime';
  date: Scalars['Date'];
  days?: Maybe<Scalars['Int']>;
  hasStop: Scalars['Boolean'];
  id: Scalars['UUID'];
  isIndividual: Scalars['Boolean'];
  offering: ServiceOffering;
};

export type ServiceType = {
  __typename?: 'ServiceType';
  id: Scalars['UUID'];
  name: Scalars['String'];
  offerings: Array<ServiceOffering>;
};

export type ProviderFragment = { __typename?: 'Provider', id: any, name: string, slug: string, website: string, scrapedAt?: any | null };

export type GetProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProvidersQuery = { __typename?: 'Query', providers: Array<{ __typename?: 'Provider', id: any, name: string, slug: string, website: string, scrapedAt?: any | null }> };

export const ProviderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Provider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"scrapedAt"}}]}}]} as unknown as DocumentNode<ProviderFragment, unknown>;
export const GetProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"providers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderFragment"}}]}}]}},...ProviderFragmentDoc.definitions]} as unknown as DocumentNode<GetProvidersQuery, GetProvidersQueryVariables>;