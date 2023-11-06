import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
  UUID: { input: string; output: string; }
};

export type Article = {
  __typename?: 'Article';
  content?: Maybe<Scalars['String']['output']>;
  feed: ArticleSourceFeed;
  id: Scalars['UUID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  keywordCount: Scalars['Int']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  source: ArticleSource;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  feeds: Array<ArticleSourceFeed>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};


export type ArticleCategoryfeedsArgs = {
  filters?: InputMaybe<ArticleSourceFeedFilter>;
  order?: InputMaybe<ArticleSourceFeedOrder>;
};

export type ArticleCategoryFilter = {
  AND?: InputMaybe<ArticleCategoryFilter>;
  NOT?: InputMaybe<ArticleCategoryFilter>;
  OR?: InputMaybe<ArticleCategoryFilter>;
  id?: InputMaybe<UUIDFilterLookup>;
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
  AND?: InputMaybe<ArticleFilter>;
  NOT?: InputMaybe<ArticleFilter>;
  OR?: InputMaybe<ArticleFilter>;
  content?: InputMaybe<StrFilterLookup>;
  feed: ArticleSourceFeedFilter;
  id?: InputMaybe<UUIDFilterLookup>;
  imageUrl?: InputMaybe<StrFilterLookup>;
  keywordCount?: InputMaybe<IntFilterLookup>;
  publishedAt?: InputMaybe<DatetimeFilterLookup>;
  source: ArticleSourceFilter;
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
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  website: Scalars['String']['output'];
};


export type ArticleSourcearticlesArgs = {
  filters?: InputMaybe<ArticleFilter>;
  order?: InputMaybe<ArticleOrder>;
};


export type ArticleSourcefeedsArgs = {
  filters?: InputMaybe<ArticleSourceFeedFilter>;
  order?: InputMaybe<ArticleSourceFeedOrder>;
};

export type ArticleSourceFeed = {
  __typename?: 'ArticleSourceFeed';
  articles: Array<Article>;
  category: ArticleCategory;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  scrapedAt?: Maybe<Scalars['DateTime']['output']>;
  source: ArticleSource;
  url: Scalars['String']['output'];
};


export type ArticleSourceFeedarticlesArgs = {
  filters?: InputMaybe<ArticleFilter>;
  order?: InputMaybe<ArticleOrder>;
};

export type ArticleSourceFeedFilter = {
  AND?: InputMaybe<ArticleSourceFeedFilter>;
  NOT?: InputMaybe<ArticleSourceFeedFilter>;
  OR?: InputMaybe<ArticleSourceFeedFilter>;
  category: ArticleCategoryFilter;
  id?: InputMaybe<UUIDFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
  scrapedAt?: InputMaybe<DatetimeFilterLookup>;
  source: ArticleSourceFilter;
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
  AND?: InputMaybe<ArticleSourceFilter>;
  NOT?: InputMaybe<ArticleSourceFilter>;
  OR?: InputMaybe<ArticleSourceFilter>;
  id?: InputMaybe<UUIDFilterLookup>;
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
  contains?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  exact?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  iContains?: InputMaybe<Scalars['Date']['input']>;
  iEndsWith?: InputMaybe<Scalars['Date']['input']>;
  iExact?: InputMaybe<Scalars['Date']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['Date']['input']>;
  inList?: InputMaybe<Array<Scalars['Date']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  range?: InputMaybe<Array<Scalars['Date']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DatetimeFilterLookup = {
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  exact?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  iContains?: InputMaybe<Scalars['DateTime']['input']>;
  iEndsWith?: InputMaybe<Scalars['DateTime']['input']>;
  iExact?: InputMaybe<Scalars['DateTime']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['DateTime']['input']>;
  inList?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  range?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GraphSeries = {
  __typename?: 'GraphSeries';
  data: Array<ServiceTime>;
  id: Scalars['UUID']['output'];
  label: Scalars['String']['output'];
};

export type IntFilterLookup = {
  contains?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  exact?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  iContains?: InputMaybe<Scalars['Int']['input']>;
  iEndsWith?: InputMaybe<Scalars['Int']['input']>;
  iExact?: InputMaybe<Scalars['Int']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['Int']['input']>;
  inList?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  range?: InputMaybe<Array<Scalars['Int']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type Location = {
  __typename?: 'Location';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  provider: Provider;
};

export type LocationFilter = {
  AND?: InputMaybe<LocationFilter>;
  NOT?: InputMaybe<LocationFilter>;
  OR?: InputMaybe<LocationFilter>;
  address?: InputMaybe<StrFilterLookup>;
  city?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<UUIDFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
  postalCode?: InputMaybe<StrFilterLookup>;
  provider: ProviderFilter;
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
  ASC = 'ASC',
  DESC = 'DESC'
}

export type Provider = {
  __typename?: 'Provider';
  id: Scalars['UUID']['output'];
  locations: Array<Location>;
  name: Scalars['String']['output'];
  offerings: Array<ServiceOffering>;
  scrapedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  website: Scalars['String']['output'];
};


export type ProviderlocationsArgs = {
  filters?: InputMaybe<LocationFilter>;
  order?: InputMaybe<LocationOrder>;
};


export type ProviderofferingsArgs = {
  filters?: InputMaybe<ServiceOfferingFilter>;
  order?: InputMaybe<ServiceOfferingOrder>;
};

export type ProviderFilter = {
  AND?: InputMaybe<ProviderFilter>;
  NOT?: InputMaybe<ProviderFilter>;
  OR?: InputMaybe<ProviderFilter>;
  id?: InputMaybe<UUIDFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
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


export type QueryarticleArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryarticleCategoriesArgs = {
  filters?: InputMaybe<ArticleCategoryFilter>;
  order?: InputMaybe<ArticleCategoryOrder>;
};


export type QueryarticleCategoryArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryarticleSourceArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryarticleSourceFeedArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryarticleSourceFeedsArgs = {
  filters?: InputMaybe<ArticleSourceFeedFilter>;
  order?: InputMaybe<ArticleSourceFeedOrder>;
};


export type QueryarticleSourcesArgs = {
  filters?: InputMaybe<ArticleSourceFilter>;
  order?: InputMaybe<ArticleSourceOrder>;
};


export type QueryarticlesArgs = {
  filters?: InputMaybe<ArticleFilter>;
  order?: InputMaybe<ArticleOrder>;
};


export type QuerygraphArgs = {
  end?: InputMaybe<Scalars['Date']['input']>;
  providerIds?: InputMaybe<Array<Scalars['String']['input']>>;
  serviceAgeGroupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  serviceIds?: InputMaybe<Array<Scalars['String']['input']>>;
  serviceTypeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  start?: InputMaybe<Scalars['Date']['input']>;
};


export type QuerylocationArgs = {
  filters?: InputMaybe<LocationFilter>;
  order?: InputMaybe<LocationOrder>;
};


export type QuerylocationsArgs = {
  filters?: InputMaybe<LocationFilter>;
  order?: InputMaybe<LocationOrder>;
};


export type QueryproviderArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryprovidersArgs = {
  filters?: InputMaybe<ProviderFilter>;
  order?: InputMaybe<ProviderOrder>;
};


export type QueryserviceArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryserviceAgeGroupArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryserviceAgeGroupsArgs = {
  filters?: InputMaybe<ServiceAgeGroupFilter>;
  order?: InputMaybe<ServiceAgeGroupOrder>;
};


export type QueryserviceOfferingArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryserviceOfferingsArgs = {
  filters?: InputMaybe<ServiceOfferingFilter>;
  order?: InputMaybe<ServiceOfferingOrder>;
};


export type QueryserviceTimeArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryserviceTimesArgs = {
  filters?: InputMaybe<ServiceTimeFilter>;
  order?: InputMaybe<ServiceTimeOrder>;
};


export type QueryserviceTreeArgs = {
  order?: InputMaybe<ServiceOrder>;
};


export type QueryserviceTypeArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryserviceTypesArgs = {
  filters?: InputMaybe<ServiceTypeFilter>;
  order?: InputMaybe<ServiceTypeOrder>;
};


export type QueryservicesArgs = {
  filters?: InputMaybe<ServiceFilter>;
  order?: InputMaybe<ServiceOrder>;
};

export type Service = {
  __typename?: 'Service';
  children: Array<Service>;
  dependants: Array<Service>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  medicalName?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  offerings: Array<ServiceOffering>;
  parent: Service;
};


export type ServicechildrenArgs = {
  filters?: InputMaybe<ServiceFilter>;
  order?: InputMaybe<ServiceOrder>;
};


export type ServicedependantsArgs = {
  filters?: InputMaybe<ServiceFilter>;
  order?: InputMaybe<ServiceOrder>;
};


export type ServiceofferingsArgs = {
  filters?: InputMaybe<ServiceOfferingFilter>;
  order?: InputMaybe<ServiceOfferingOrder>;
};

export type ServiceAgeGroup = {
  __typename?: 'ServiceAgeGroup';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  offerings: Array<ServiceOffering>;
};


export type ServiceAgeGroupofferingsArgs = {
  filters?: InputMaybe<ServiceOfferingFilter>;
  order?: InputMaybe<ServiceOfferingOrder>;
};

export type ServiceAgeGroupFilter = {
  AND?: InputMaybe<ServiceAgeGroupFilter>;
  NOT?: InputMaybe<ServiceAgeGroupFilter>;
  OR?: InputMaybe<ServiceAgeGroupFilter>;
  id?: InputMaybe<UUIDFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
};

export type ServiceAgeGroupOrder = {
  id?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  offerings?: InputMaybe<ServiceOfferingOrder>;
};

export type ServiceFilter = {
  AND?: InputMaybe<ServiceFilter>;
  NOT?: InputMaybe<ServiceFilter>;
  OR?: InputMaybe<ServiceFilter>;
  description?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<UUIDFilterLookup>;
  medicalName?: InputMaybe<StrFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
};

export type ServiceOffering = {
  __typename?: 'ServiceOffering';
  ageGroups: Array<ServiceAgeGroup>;
  id: Scalars['UUID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  provider: Provider;
  service: Service;
  times: Array<ServiceTime>;
  types: Array<ServiceType>;
};


export type ServiceOfferingageGroupsArgs = {
  filters?: InputMaybe<ServiceAgeGroupFilter>;
  order?: InputMaybe<ServiceAgeGroupOrder>;
};


export type ServiceOfferingtimesArgs = {
  filters?: InputMaybe<ServiceTimeFilter>;
  order?: InputMaybe<ServiceTimeOrder>;
};


export type ServiceOfferingtypesArgs = {
  filters?: InputMaybe<ServiceTypeFilter>;
  order?: InputMaybe<ServiceTypeOrder>;
};

export type ServiceOfferingFilter = {
  AND?: InputMaybe<ServiceOfferingFilter>;
  NOT?: InputMaybe<ServiceOfferingFilter>;
  OR?: InputMaybe<ServiceOfferingFilter>;
  id?: InputMaybe<UUIDFilterLookup>;
  notes?: InputMaybe<StrFilterLookup>;
  provider: ProviderFilter;
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
  date: Scalars['Date']['output'];
  days?: Maybe<Scalars['Int']['output']>;
  hasStop: Scalars['Boolean']['output'];
  id: Scalars['UUID']['output'];
  isIndividual: Scalars['Boolean']['output'];
  offering: ServiceOffering;
};

export type ServiceTimeFilter = {
  AND?: InputMaybe<ServiceTimeFilter>;
  NOT?: InputMaybe<ServiceTimeFilter>;
  OR?: InputMaybe<ServiceTimeFilter>;
  date?: InputMaybe<DateFilterLookup>;
  days?: InputMaybe<IntFilterLookup>;
  hasStop?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<UUIDFilterLookup>;
  isIndividual?: InputMaybe<Scalars['Boolean']['input']>;
  offering: ServiceOfferingFilter;
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
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  offerings: Array<ServiceOffering>;
};


export type ServiceTypeofferingsArgs = {
  filters?: InputMaybe<ServiceOfferingFilter>;
  order?: InputMaybe<ServiceOfferingOrder>;
};

export type ServiceTypeFilter = {
  AND?: InputMaybe<ServiceTypeFilter>;
  NOT?: InputMaybe<ServiceTypeFilter>;
  OR?: InputMaybe<ServiceTypeFilter>;
  id?: InputMaybe<UUIDFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
};

export type ServiceTypeOrder = {
  id?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  offerings?: InputMaybe<ServiceOfferingOrder>;
};

export type StrFilterLookup = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  exact?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iContains?: InputMaybe<Scalars['String']['input']>;
  iEndsWith?: InputMaybe<Scalars['String']['input']>;
  iExact?: InputMaybe<Scalars['String']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['String']['input']>;
  inList?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UUIDFilterLookup = {
  contains?: InputMaybe<Scalars['UUID']['input']>;
  endsWith?: InputMaybe<Scalars['UUID']['input']>;
  exact?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  iContains?: InputMaybe<Scalars['UUID']['input']>;
  iEndsWith?: InputMaybe<Scalars['UUID']['input']>;
  iExact?: InputMaybe<Scalars['UUID']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['UUID']['input']>;
  inList?: InputMaybe<Array<Scalars['UUID']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  range?: InputMaybe<Array<Scalars['UUID']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProviderFragment = { __typename?: 'Provider', id: string, name: string, slug: string, website: string, scrapedAt?: string | null };

export type ServiceAgeGroupFragment = { __typename?: 'ServiceAgeGroup', id: string, name: string };

export type ServiceFragment = { __typename?: 'Service', id: string, name: string, medicalName?: string | null, description?: string | null };

export type ServiceOfferingFragment = { __typename?: 'ServiceOffering', id: string, notes?: string | null };

export type ServiceTimeFragment = { __typename?: 'ServiceTime', id: string, date: string, days?: number | null, isIndividual: boolean };

export type ServiceTypeFragment = { __typename?: 'ServiceType', id: string, name: string };

export type GetGraphQueryVariables = Exact<{
  providerIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  serviceIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  serviceAgeGroupIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  serviceTypeIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  start?: InputMaybe<Scalars['Date']['input']>;
  end?: InputMaybe<Scalars['Date']['input']>;
}>;


export type GetGraphQuery = { __typename?: 'Query', graph: Array<{ __typename?: 'GraphSeries', id: string, label: string, data: Array<{ __typename?: 'ServiceTime', date: string, days?: number | null, isIndividual: boolean }> }> };

export type GetProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProvidersQuery = { __typename?: 'Query', providers: Array<{ __typename?: 'Provider', id: string, name: string, slug: string, website: string, scrapedAt?: string | null }> };

export type GetServiceAgeGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServiceAgeGroupsQuery = { __typename?: 'Query', serviceAgeGroups: Array<{ __typename?: 'ServiceAgeGroup', id: string, name: string }> };

export type GetServiceTreeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServiceTreeQuery = { __typename?: 'Query', serviceTree: Array<{ __typename?: 'Service', id: string, name: string, medicalName?: string | null, description?: string | null, children: Array<{ __typename?: 'Service', id: string, name: string, medicalName?: string | null, description?: string | null, children: Array<{ __typename?: 'Service', id: string, name: string, medicalName?: string | null, description?: string | null }> }> }> };

export type GetServiceTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServiceTypesQuery = { __typename?: 'Query', serviceTypes: Array<{ __typename?: 'ServiceType', id: string, name: string }> };

export type GetServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesQuery = { __typename?: 'Query', services: Array<{ __typename?: 'Service', id: string, name: string, medicalName?: string | null, description?: string | null }> };

export const ProviderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Provider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"scrapedAt"}}]}}]} as unknown as DocumentNode<ProviderFragment, unknown>;
export const ServiceAgeGroupFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceAgeGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceAgeGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ServiceAgeGroupFragment, unknown>;
export const ServiceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"medicalName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<ServiceFragment, unknown>;
export const ServiceOfferingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceOfferingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceOffering"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}}]}}]} as unknown as DocumentNode<ServiceOfferingFragment, unknown>;
export const ServiceTimeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceTimeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"isIndividual"}}]}}]} as unknown as DocumentNode<ServiceTimeFragment, unknown>;
export const ServiceTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceTypeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ServiceTypeFragment, unknown>;
export const GetGraphDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGraph"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceAgeGroupIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceTypeIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graph"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"providerIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceAgeGroupIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceAgeGroupIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceTypeIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceTypeIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"Argument","name":{"kind":"Name","value":"end"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"isIndividual"}}]}}]}}]}}]} as unknown as DocumentNode<GetGraphQuery, GetGraphQueryVariables>;
export const GetProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"providers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Provider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"scrapedAt"}}]}}]} as unknown as DocumentNode<GetProvidersQuery, GetProvidersQueryVariables>;
export const GetServiceAgeGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceAgeGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceAgeGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceAgeGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceAgeGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceAgeGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GetServiceAgeGroupsQuery, GetServiceAgeGroupsQueryVariables>;
export const GetServiceTreeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceTree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceTree"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceFragment"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceFragment"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"medicalName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<GetServiceTreeQuery, GetServiceTreeQueryVariables>;
export const GetServiceTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceTypeFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceTypeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GetServiceTypesQuery, GetServiceTypesQueryVariables>;
export const GetServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"medicalName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<GetServicesQuery, GetServicesQueryVariables>;