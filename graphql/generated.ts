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


export type ArticleCategoryFeedsArgs = {
  filters?: InputMaybe<ArticleSourceFeedFilter>;
  order?: InputMaybe<ArticleSourceFeedOrder>;
};

export type ArticleCategoryFilter = {
  feeds?: InputMaybe<ArticleSourceFeedFilter>;
  id?: InputMaybe<UuidFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
  slug?: InputMaybe<StrFilterLookup>;
};

export type ArticleCategoryOrder = {
  feeds?: InputMaybe<ArticleSourceFeedOrder>;
  id?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  slug?: InputMaybe<Ordering>;
};

export type ArticleFilter = {
  content?: InputMaybe<StrFilterLookup>;
  feed?: InputMaybe<ArticleSourceFeedFilter>;
  id?: InputMaybe<UuidFilterLookup>;
  imageUrl?: InputMaybe<StrFilterLookup>;
  keywordCount?: InputMaybe<IntFilterLookup>;
  publishedAt?: InputMaybe<DatetimeFilterLookup>;
  source?: InputMaybe<ArticleSourceFilter>;
  title?: InputMaybe<StrFilterLookup>;
  url?: InputMaybe<StrFilterLookup>;
};

export type ArticleOrder = {
  content?: InputMaybe<Ordering>;
  feed?: InputMaybe<ArticleSourceFeedOrder>;
  id?: InputMaybe<Ordering>;
  imageUrl?: InputMaybe<Ordering>;
  keywordCount?: InputMaybe<Ordering>;
  publishedAt?: InputMaybe<Ordering>;
  source?: InputMaybe<ArticleSourceOrder>;
  title?: InputMaybe<Ordering>;
  url?: InputMaybe<Ordering>;
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


export type ArticleSourceArticlesArgs = {
  filters?: InputMaybe<ArticleFilter>;
  order?: InputMaybe<ArticleOrder>;
};


export type ArticleSourceFeedsArgs = {
  filters?: InputMaybe<ArticleSourceFeedFilter>;
  order?: InputMaybe<ArticleSourceFeedOrder>;
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


export type ArticleSourceFeedArticlesArgs = {
  filters?: InputMaybe<ArticleFilter>;
  order?: InputMaybe<ArticleOrder>;
};

export type ArticleSourceFeedFilter = {
  articles?: InputMaybe<ArticleFilter>;
  category?: InputMaybe<ArticleCategoryFilter>;
  id?: InputMaybe<UuidFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
  scrapedAt?: InputMaybe<DatetimeFilterLookup>;
  source?: InputMaybe<ArticleSourceFilter>;
  url?: InputMaybe<StrFilterLookup>;
};

export type ArticleSourceFeedOrder = {
  articles?: InputMaybe<ArticleOrder>;
  category?: InputMaybe<ArticleCategoryOrder>;
  id?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  scrapedAt?: InputMaybe<Ordering>;
  source?: InputMaybe<ArticleSourceOrder>;
  url?: InputMaybe<Ordering>;
};

export type ArticleSourceFilter = {
  articles?: InputMaybe<ArticleFilter>;
  feeds?: InputMaybe<ArticleSourceFeedFilter>;
  id?: InputMaybe<UuidFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
  slug?: InputMaybe<StrFilterLookup>;
  website?: InputMaybe<StrFilterLookup>;
};

export type ArticleSourceOrder = {
  articles?: InputMaybe<ArticleOrder>;
  feeds?: InputMaybe<ArticleSourceFeedOrder>;
  id?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  slug?: InputMaybe<Ordering>;
  website?: InputMaybe<Ordering>;
};

export type DateFilterLookup = {
  contains?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  exact?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  iContains?: InputMaybe<Scalars['Date']>;
  iEndsWith?: InputMaybe<Scalars['Date']>;
  iExact?: InputMaybe<Scalars['Date']>;
  iRegex?: InputMaybe<Scalars['String']>;
  iStartsWith?: InputMaybe<Scalars['Date']>;
  inList?: InputMaybe<Array<Scalars['Date']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  range?: InputMaybe<Array<Scalars['Date']>>;
  regex?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DatetimeFilterLookup = {
  contains?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  exact?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  iContains?: InputMaybe<Scalars['DateTime']>;
  iEndsWith?: InputMaybe<Scalars['DateTime']>;
  iExact?: InputMaybe<Scalars['DateTime']>;
  iRegex?: InputMaybe<Scalars['String']>;
  iStartsWith?: InputMaybe<Scalars['DateTime']>;
  inList?: InputMaybe<Array<Scalars['DateTime']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  range?: InputMaybe<Array<Scalars['DateTime']>>;
  regex?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type GraphSeries = {
  __typename?: 'GraphSeries';
  data: Array<ServiceTime>;
  id: Scalars['UUID'];
  label: Scalars['String'];
};

export type IntFilterLookup = {
  contains?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  exact?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  iContains?: InputMaybe<Scalars['Int']>;
  iEndsWith?: InputMaybe<Scalars['Int']>;
  iExact?: InputMaybe<Scalars['Int']>;
  iRegex?: InputMaybe<Scalars['String']>;
  iStartsWith?: InputMaybe<Scalars['Int']>;
  inList?: InputMaybe<Array<Scalars['Int']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  range?: InputMaybe<Array<Scalars['Int']>>;
  regex?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['Int']>;
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

export type LocationFilter = {
  address?: InputMaybe<StrFilterLookup>;
  city?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<UuidFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
  postalCode?: InputMaybe<StrFilterLookup>;
  provider?: InputMaybe<ProviderFilter>;
};

export type LocationOrder = {
  address?: InputMaybe<Ordering>;
  city?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  postalCode?: InputMaybe<Ordering>;
  provider?: InputMaybe<ProviderOrder>;
};

export enum Ordering {
  Asc = 'ASC',
  Desc = 'DESC'
}

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


export type ProviderLocationsArgs = {
  filters?: InputMaybe<LocationFilter>;
  order?: InputMaybe<LocationOrder>;
};

export type ProviderFilter = {
  id?: InputMaybe<UuidFilterLookup>;
  locations?: InputMaybe<LocationFilter>;
  name?: InputMaybe<StrFilterLookup>;
  offerings?: InputMaybe<ServiceOfferingFilter>;
  scrapedAt?: InputMaybe<DatetimeFilterLookup>;
  slug?: InputMaybe<StrFilterLookup>;
  website?: InputMaybe<StrFilterLookup>;
};

export type ProviderOrder = {
  id?: InputMaybe<Ordering>;
  locations?: InputMaybe<LocationOrder>;
  name?: InputMaybe<Ordering>;
  offerings?: InputMaybe<ServiceOfferingOrder>;
  scrapedAt?: InputMaybe<Ordering>;
  slug?: InputMaybe<Ordering>;
  website?: InputMaybe<Ordering>;
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
  graph: Array<GraphSeries>;
  location: Array<Location>;
  locations: Array<Location>;
  provider: Provider;
  providers: Array<Provider>;
  service: Service;
  serviceAgeGroup: ServiceAgeGroup;
  serviceAgeGroups: Array<ServiceAgeGroup>;
  serviceOffering: ServiceOffering;
  serviceOfferings: Array<ServiceOffering>;
  serviceTime: ServiceTime;
  serviceTimes: Array<ServiceTime>;
  serviceTree: Array<Service>;
  serviceType: ServiceType;
  serviceTypes: Array<ServiceType>;
  services: Array<Service>;
};


export type QueryArticleArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryArticleCategoriesArgs = {
  filters?: InputMaybe<ArticleCategoryFilter>;
  order?: InputMaybe<ArticleCategoryOrder>;
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


export type QueryArticleSourceFeedsArgs = {
  filters?: InputMaybe<ArticleSourceFeedFilter>;
  order?: InputMaybe<ArticleSourceFeedOrder>;
};


export type QueryArticleSourcesArgs = {
  filters?: InputMaybe<ArticleSourceFilter>;
  order?: InputMaybe<ArticleSourceOrder>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFilter>;
  order?: InputMaybe<ArticleOrder>;
};


export type QueryGraphArgs = {
  end?: InputMaybe<Scalars['Date']>;
  providerIds?: InputMaybe<Array<Scalars['String']>>;
  serviceAgeGroupIds?: InputMaybe<Array<Scalars['String']>>;
  serviceIds?: InputMaybe<Array<Scalars['String']>>;
  serviceTypeIds?: InputMaybe<Array<Scalars['String']>>;
  start?: InputMaybe<Scalars['Date']>;
};


export type QueryLocationArgs = {
  filters?: InputMaybe<LocationFilter>;
  order?: InputMaybe<LocationOrder>;
};


export type QueryLocationsArgs = {
  filters?: InputMaybe<LocationFilter>;
  order?: InputMaybe<LocationOrder>;
};


export type QueryProviderArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryProvidersArgs = {
  filters?: InputMaybe<ProviderFilter>;
  order?: InputMaybe<ProviderOrder>;
};


export type QueryServiceArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryServiceAgeGroupArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryServiceAgeGroupsArgs = {
  filters?: InputMaybe<ServiceAgeGroupFilter>;
  order?: InputMaybe<ServiceAgeGroupOrder>;
};


export type QueryServiceOfferingArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryServiceOfferingsArgs = {
  filters?: InputMaybe<ServiceOfferingFilter>;
  order?: InputMaybe<ServiceOfferingOrder>;
};


export type QueryServiceTimeArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryServiceTimesArgs = {
  filters?: InputMaybe<ServiceTimeFilter>;
  order?: InputMaybe<ServiceTimeOrder>;
};


export type QueryServiceTreeArgs = {
  order?: InputMaybe<ServiceOrder>;
};


export type QueryServiceTypeArgs = {
  pk?: InputMaybe<Scalars['ID']>;
};


export type QueryServiceTypesArgs = {
  filters?: InputMaybe<ServiceTypeFilter>;
  order?: InputMaybe<ServiceTypeOrder>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFilter>;
  order?: InputMaybe<ServiceOrder>;
};

export type Service = {
  __typename?: 'Service';
  children: Array<Service>;
  dependants: Array<Service>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  medicalName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  offerings: Array<ServiceOffering>;
  parent?: Maybe<Service>;
};


export type ServiceChildrenArgs = {
  filters?: InputMaybe<ServiceFilter>;
  order?: InputMaybe<ServiceOrder>;
};


export type ServiceDependantsArgs = {
  filters?: InputMaybe<ServiceFilter>;
  order?: InputMaybe<ServiceOrder>;
};


export type ServiceOfferingsArgs = {
  filters?: InputMaybe<ServiceOfferingFilter>;
  order?: InputMaybe<ServiceOfferingOrder>;
};

export type ServiceAgeGroup = {
  __typename?: 'ServiceAgeGroup';
  id: Scalars['UUID'];
  name: Scalars['String'];
  offerings: Array<ServiceOffering>;
};


export type ServiceAgeGroupOfferingsArgs = {
  filters?: InputMaybe<ServiceOfferingFilter>;
  order?: InputMaybe<ServiceOfferingOrder>;
};

export type ServiceAgeGroupFilter = {
  id?: InputMaybe<UuidFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
  offerings?: InputMaybe<ServiceOfferingFilter>;
};

export type ServiceAgeGroupOrder = {
  id?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  offerings?: InputMaybe<ServiceOfferingOrder>;
};

export type ServiceFilter = {
  dependants?: InputMaybe<ServiceFilter>;
  description?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<UuidFilterLookup>;
  medicalName?: InputMaybe<StrFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
  offerings?: InputMaybe<ServiceOfferingFilter>;
  parent?: InputMaybe<ServiceFilter>;
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


export type ServiceOfferingAgeGroupsArgs = {
  filters?: InputMaybe<ServiceAgeGroupFilter>;
  order?: InputMaybe<ServiceAgeGroupOrder>;
};


export type ServiceOfferingTimesArgs = {
  filters?: InputMaybe<ServiceTimeFilter>;
  order?: InputMaybe<ServiceTimeOrder>;
};


export type ServiceOfferingTypesArgs = {
  filters?: InputMaybe<ServiceTypeFilter>;
  order?: InputMaybe<ServiceTypeOrder>;
};

export type ServiceOfferingFilter = {
  ageGroups?: InputMaybe<ServiceAgeGroupFilter>;
  id?: InputMaybe<UuidFilterLookup>;
  notes?: InputMaybe<StrFilterLookup>;
  provider?: InputMaybe<ProviderFilter>;
  times?: InputMaybe<ServiceTimeFilter>;
  types?: InputMaybe<ServiceTypeFilter>;
};

export type ServiceOfferingOrder = {
  ageGroups?: InputMaybe<ServiceAgeGroupOrder>;
  id?: InputMaybe<Ordering>;
  notes?: InputMaybe<Ordering>;
  provider?: InputMaybe<ProviderOrder>;
  times?: InputMaybe<ServiceTimeOrder>;
  types?: InputMaybe<ServiceTypeOrder>;
};

export type ServiceOrder = {
  dependants?: InputMaybe<ServiceOrder>;
  description?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  medicalName?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  offerings?: InputMaybe<ServiceOfferingOrder>;
  parent?: InputMaybe<ServiceOrder>;
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

export type ServiceTimeFilter = {
  date?: InputMaybe<DateFilterLookup>;
  days?: InputMaybe<IntFilterLookup>;
  hasStop?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<UuidFilterLookup>;
  isIndividual?: InputMaybe<Scalars['Boolean']>;
  offering?: InputMaybe<ServiceOfferingFilter>;
};

export type ServiceTimeOrder = {
  date?: InputMaybe<Ordering>;
  days?: InputMaybe<Ordering>;
  hasStop?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isIndividual?: InputMaybe<Ordering>;
  offering?: InputMaybe<ServiceOfferingOrder>;
};

export type ServiceType = {
  __typename?: 'ServiceType';
  id: Scalars['UUID'];
  name: Scalars['String'];
  offerings: Array<ServiceOffering>;
};


export type ServiceTypeOfferingsArgs = {
  filters?: InputMaybe<ServiceOfferingFilter>;
  order?: InputMaybe<ServiceOfferingOrder>;
};

export type ServiceTypeFilter = {
  id?: InputMaybe<UuidFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
  offerings?: InputMaybe<ServiceOfferingFilter>;
};

export type ServiceTypeOrder = {
  id?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  offerings?: InputMaybe<ServiceOfferingOrder>;
};

export type StrFilterLookup = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  exact?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iContains?: InputMaybe<Scalars['String']>;
  iEndsWith?: InputMaybe<Scalars['String']>;
  iExact?: InputMaybe<Scalars['String']>;
  iRegex?: InputMaybe<Scalars['String']>;
  iStartsWith?: InputMaybe<Scalars['String']>;
  inList?: InputMaybe<Array<Scalars['String']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  range?: InputMaybe<Array<Scalars['String']>>;
  regex?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UuidFilterLookup = {
  contains?: InputMaybe<Scalars['UUID']>;
  endsWith?: InputMaybe<Scalars['UUID']>;
  exact?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  iContains?: InputMaybe<Scalars['UUID']>;
  iEndsWith?: InputMaybe<Scalars['UUID']>;
  iExact?: InputMaybe<Scalars['UUID']>;
  iRegex?: InputMaybe<Scalars['String']>;
  iStartsWith?: InputMaybe<Scalars['UUID']>;
  inList?: InputMaybe<Array<Scalars['UUID']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  range?: InputMaybe<Array<Scalars['UUID']>>;
  regex?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['UUID']>;
};

export type ProviderFragment = { __typename?: 'Provider', id: any, name: string, slug: string, website: string, scrapedAt?: any | null };

export type ServiceAgeGroupFragment = { __typename?: 'ServiceAgeGroup', id: any, name: string };

export type ServiceFragment = { __typename?: 'Service', id: any, name: string, medicalName?: string | null, description?: string | null };

export type ServiceOfferingFragment = { __typename?: 'ServiceOffering', id: any, notes?: string | null };

export type ServiceTimeFragment = { __typename?: 'ServiceTime', id: any, date: any, days?: number | null, isIndividual: boolean };

export type ServiceTypeFragment = { __typename?: 'ServiceType', id: any, name: string };

export type GetGraphQueryVariables = Exact<{
  providerIds: Array<Scalars['String']> | Scalars['String'];
  serviceIds: Array<Scalars['String']> | Scalars['String'];
  serviceAgeGroupIds: Array<Scalars['String']> | Scalars['String'];
  serviceTypeIds: Array<Scalars['String']> | Scalars['String'];
  start?: InputMaybe<Scalars['Date']>;
  end?: InputMaybe<Scalars['Date']>;
}>;


export type GetGraphQuery = { __typename?: 'Query', graph: Array<{ __typename?: 'GraphSeries', id: any, label: string, data: Array<{ __typename?: 'ServiceTime', date: any, days?: number | null, isIndividual: boolean }> }> };

export type GetProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProvidersQuery = { __typename?: 'Query', providers: Array<{ __typename?: 'Provider', id: any, name: string, slug: string, website: string, scrapedAt?: any | null }> };

export type GetServiceAgeGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServiceAgeGroupsQuery = { __typename?: 'Query', serviceAgeGroups: Array<{ __typename?: 'ServiceAgeGroup', id: any, name: string }> };

export type GetServiceTreeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServiceTreeQuery = { __typename?: 'Query', serviceTree: Array<{ __typename?: 'Service', id: any, name: string, medicalName?: string | null, description?: string | null, children: Array<{ __typename?: 'Service', id: any, name: string, medicalName?: string | null, description?: string | null, children: Array<{ __typename?: 'Service', id: any, name: string, medicalName?: string | null, description?: string | null }> }> }> };

export type GetServiceTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServiceTypesQuery = { __typename?: 'Query', serviceTypes: Array<{ __typename?: 'ServiceType', id: any, name: string }> };

export type GetServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesQuery = { __typename?: 'Query', services: Array<{ __typename?: 'Service', id: any, name: string, medicalName?: string | null, description?: string | null }> };

export const ProviderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Provider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"scrapedAt"}}]}}]} as unknown as DocumentNode<ProviderFragment, unknown>;
export const ServiceAgeGroupFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceAgeGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceAgeGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ServiceAgeGroupFragment, unknown>;
export const ServiceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"medicalName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<ServiceFragment, unknown>;
export const ServiceOfferingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceOfferingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceOffering"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}}]}}]} as unknown as DocumentNode<ServiceOfferingFragment, unknown>;
export const ServiceTimeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceTimeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"isIndividual"}}]}}]} as unknown as DocumentNode<ServiceTimeFragment, unknown>;
export const ServiceTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceTypeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ServiceTypeFragment, unknown>;
export const GetGraphDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGraph"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceAgeGroupIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceTypeIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graph"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"providerIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceAgeGroupIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceAgeGroupIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceTypeIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceTypeIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"Argument","name":{"kind":"Name","value":"end"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"isIndividual"}}]}}]}}]}}]} as unknown as DocumentNode<GetGraphQuery, GetGraphQueryVariables>;
export const GetProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"providers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderFragment"}}]}}]}},...ProviderFragmentDoc.definitions]} as unknown as DocumentNode<GetProvidersQuery, GetProvidersQueryVariables>;
export const GetServiceAgeGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceAgeGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceAgeGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceAgeGroupFragment"}}]}}]}},...ServiceAgeGroupFragmentDoc.definitions]} as unknown as DocumentNode<GetServiceAgeGroupsQuery, GetServiceAgeGroupsQueryVariables>;
export const GetServiceTreeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceTree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceTree"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceFragment"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceFragment"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceFragment"}}]}}]}}]}}]}},...ServiceFragmentDoc.definitions]} as unknown as DocumentNode<GetServiceTreeQuery, GetServiceTreeQueryVariables>;
export const GetServiceTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceTypeFragment"}}]}}]}},...ServiceTypeFragmentDoc.definitions]} as unknown as DocumentNode<GetServiceTypesQuery, GetServiceTypesQueryVariables>;
export const GetServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceFragment"}}]}}]}},...ServiceFragmentDoc.definitions]} as unknown as DocumentNode<GetServicesQuery, GetServicesQueryVariables>;