import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {List, Spinner} from 'reactstrap';

import {GetProvidersQuery, GetProvidersQueryVariables} from '../../generated/graphql';
import GetProvidersQL from '../../queries/GetProviders.graphql';

export const ProviderList: React.FC = () => {
    const {loading, data, error} = useQuery<GetProvidersQuery, GetProvidersQueryVariables>(gql(GetProvidersQL));

    if (error) {
        throw error;
    }

    if (loading || !data) {
        return <Spinner />;
    }

    return (
        <List>
            {data.providers.map((provider) => (
                <li key={provider.id}>
                    {provider.name}

                    <List>
                        {provider.locations.map((location) => (
                            <li key={location.id}>{location.name}</li>
                        ))}
                    </List>
                </li>
            ))}
        </List>
    );
};
