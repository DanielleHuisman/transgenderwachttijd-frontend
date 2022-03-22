import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: string;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: string;
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
};

export type Article = {
  __typename?: 'Article';
  content?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  imageUrl?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  source: ArticleSource;
  title: Scalars['String'];
  url: Scalars['String'];
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
  article?: Maybe<Article>;
  articleSource?: Maybe<ArticleSource>;
  articleSourceFeed?: Maybe<ArticleSourceFeed>;
  articleSourceFeeds: Array<ArticleSourceFeed>;
  articleSources: Array<ArticleSource>;
  articles: Array<Article>;
  location?: Maybe<Location>;
  locations: Array<Location>;
  provider?: Maybe<Provider>;
  providers: Array<Provider>;
  serviceAgeGroup?: Maybe<ServiceAgeGroup>;
  serviceAgeGroups: Array<ServiceAgeGroup>;
  serviceType?: Maybe<ServiceType>;
  serviceTypes: Array<ServiceType>;
};


export type QueryarticleArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};


export type QueryarticleSourceArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};


export type QueryarticleSourceFeedArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};


export type QuerylocationArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};


export type QueryproviderArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};


export type QueryserviceAgeGroupArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};


export type QueryserviceTypeArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};

export type Service = {
  __typename?: 'Service';
  children: Array<Service>;
  dependencies: Array<Service>;
  description?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionNl?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  medicalName?: Maybe<Scalars['String']>;
  medicalNameEn?: Maybe<Scalars['String']>;
  medicalNameNl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nameEn?: Maybe<Scalars['String']>;
  nameNl?: Maybe<Scalars['String']>;
  offerings: Array<ServiceOffering>;
  parent?: Maybe<Service>;
};

export type ServiceAgeGroup = {
  __typename?: 'ServiceAgeGroup';
  id: Scalars['UUID'];
  name: Scalars['String'];
  nameEn?: Maybe<Scalars['String']>;
  nameNl?: Maybe<Scalars['String']>;
  offerings: Array<ServiceOffering>;
};

export type ServiceOffering = {
  __typename?: 'ServiceOffering';
  ageGroups: Array<ServiceAgeGroup>;
  id: Scalars['UUID'];
  notes?: Maybe<Scalars['String']>;
  notesEn?: Maybe<Scalars['String']>;
  notesNl?: Maybe<Scalars['String']>;
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
  nameEn?: Maybe<Scalars['String']>;
  nameNl?: Maybe<Scalars['String']>;
  offerings: Array<ServiceOffering>;
};

export type LocationFragment = { __typename?: 'Location', id: any, name: string, address: string, postalCode: string, city: string };

export type ProviderFragment = { __typename?: 'Provider', id: any, name: string, slug: string, website: string, scrapedAt?: string | null };

export type GetProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProvidersQuery = { __typename?: 'Query', providers: Array<{ __typename?: 'Provider', id: any, name: string, slug: string, website: string, scrapedAt?: string | null, locations: Array<{ __typename?: 'Location', id: any, name: string, address: string, postalCode: string, city: string }> }> };

export const LocationFragmentDoc = gql`
    fragment LocationFragment on Location {
  id
  name
  address
  postalCode
  city
}
    `;
export const ProviderFragmentDoc = gql`
    fragment ProviderFragment on Provider {
  id
  name
  slug
  website
  scrapedAt
}
    `;
export const GetProvidersDocument = gql`
    query GetProviders {
  providers {
    ...ProviderFragment
    locations {
      ...LocationFragment
    }
  }
}
    ${ProviderFragmentDoc}
${LocationFragmentDoc}`;

/**
 * __useGetProvidersQuery__
 *
 * To run a query within a React component, call `useGetProvidersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProvidersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProvidersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProvidersQuery(baseOptions?: Apollo.QueryHookOptions<GetProvidersQuery, GetProvidersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProvidersQuery, GetProvidersQueryVariables>(GetProvidersDocument, options);
      }
export function useGetProvidersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProvidersQuery, GetProvidersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProvidersQuery, GetProvidersQueryVariables>(GetProvidersDocument, options);
        }
export type GetProvidersQueryHookResult = ReturnType<typeof useGetProvidersQuery>;
export type GetProvidersLazyQueryHookResult = ReturnType<typeof useGetProvidersLazyQuery>;
export type GetProvidersQueryResult = Apollo.QueryResult<GetProvidersQuery, GetProvidersQueryVariables>;