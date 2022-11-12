import type {GetServerSideProps, NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useState} from 'react';
import {Container} from 'reactstrap';

import {Graph} from '../components/Graph';
import {ProviderDropdown} from '../components/provider/ProviderDropdown';
import {ServiceAgeGroupDropdown} from '../components/service/ServiceAgeGroupDropdown';
import {ServiceDropdown} from '../components/service/ServiceDropdown';
import {ServiceTypeDropdown} from '../components/service/ServiceTypeDropdown';
import {client} from '../graphql/apollo-client';
import {
    GetProvidersDocument,
    GetProvidersQuery,
    GetProvidersQueryVariables,
    GetServiceAgeGroupsDocument,
    GetServiceAgeGroupsQuery,
    GetServiceAgeGroupsQueryVariables,
    GetServiceTreeDocument,
    GetServiceTreeQuery,
    GetServiceTreeQueryVariables,
    GetServiceTypesDocument,
    GetServiceTypesQuery,
    GetServiceTypesQueryVariables,
    ProviderFragment,
    ServiceAgeGroupFragment,
    ServiceFragment,
    ServiceTypeFragment
} from '../graphql/generated';
import {flattenTree, FlatTreeItem} from '../util/tree';

interface Props {
    providers: ProviderFragment[];
    services: FlatTreeItem<ServiceFragment>[];
    serviceAgeGroups: ServiceAgeGroupFragment[];
    serviceTypes: ServiceTypeFragment[];
}

export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {
    const {data: {providers}} = await client.query<GetProvidersQuery, GetProvidersQueryVariables>({
        query: GetProvidersDocument
    });
    const {data: {serviceTree}} = await client.query<GetServiceTreeQuery, GetServiceTreeQueryVariables>({
        query: GetServiceTreeDocument
    });
    const {data: {serviceAgeGroups}} = await client.query<GetServiceAgeGroupsQuery, GetServiceAgeGroupsQueryVariables>({
        query: GetServiceAgeGroupsDocument
    });
    const {data: {serviceTypes}} = await client.query<GetServiceTypesQuery, GetServiceTypesQueryVariables>({
        query: GetServiceTypesDocument
    });

    return {
        props: {
            ...(await serverSideTranslations(locale as string)),
            providers,
            services: flattenTree(serviceTree),
            serviceAgeGroups,
            serviceTypes
        }
    };
};

const Home: NextPage<Props> = ({providers, services, serviceAgeGroups, serviceTypes}) => {
    const [providerIds, setProviderIds] = useState<string[]>(providers.map((provider) => provider.id));
    const [serviceIds, setServiceIds] = useState<string[]>(
        services
            .filter(([service]) => ['Psychology', 'Intake'].includes(service.name))
            .map(([service]) => service.id)
    );
    const [serviceAgeGroupIds, setServiceAgeGroupIds] = useState<string[]>(serviceAgeGroups.map((serviceAgeGroup) => serviceAgeGroup.id));
    const [serviceTypeIds, setServiceTypeIds] = useState<string[]>(serviceTypes.map((serviceType) => serviceType.id));

    return (
        <Container>
            <p className="mb-4">
                This website is still work in progress. More information will be added in the future.
                See the <a href="https://github.com/DanielHuisman/transgenderwachttijd-frontend">GitHub repository</a> for progress.
            </p>

            <div className="d-flex gap-3 mb-3">
                <ProviderDropdown
                    providers={providers}
                    value={providerIds}
                    onChange={(value) => setProviderIds(value)}
                />

                <ServiceDropdown
                    services={services}
                    value={serviceIds}
                    onChange={(value) => setServiceIds(value)}
                />

                <ServiceAgeGroupDropdown
                    serviceAgeGroups={serviceAgeGroups}
                    value={serviceAgeGroupIds}
                    onChange={(value) => setServiceAgeGroupIds(value)}
                />

                <ServiceTypeDropdown
                    serviceTypes={serviceTypes}
                    value={serviceTypeIds}
                    onChange={(value) => setServiceTypeIds(value)}
                />
            </div>

            <Graph providerIds={providerIds} serviceIds={serviceIds} serviceAgeGroupIds={serviceAgeGroupIds} serviceTypeIds={serviceTypeIds} />
        </Container>
    );
};

export default Home;
