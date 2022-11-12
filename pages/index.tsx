import type {GetServerSideProps, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useState} from 'react';
import {Container} from 'reactstrap';

import {SelectDropdown} from '../components/SelectDropdown';
import {client} from '../graphql/apollo-client';
import {
    GetProvidersDocument,
    GetProvidersQuery,
    GetProvidersQueryVariables,
    GetServiceTreeDocument,
    GetServiceTreeQuery,
    GetServiceTreeQueryVariables,
    ProviderFragment,
    ServiceFragment
} from '../graphql/generated';
import {flattenTree, FlatTreeItem} from '../util/tree';

interface Props {
    providers: ProviderFragment[];
    services: FlatTreeItem<ServiceFragment>[];
}

export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {
    const {data: {providers}} = await client.query<GetProvidersQuery, GetProvidersQueryVariables>({
        query: GetProvidersDocument
    });
    const {data: {serviceTree}} = await client.query<GetServiceTreeQuery, GetServiceTreeQueryVariables>({
        query: GetServiceTreeDocument
    });

    return {
        props: {
            ...(await serverSideTranslations(locale as string)),
            providers,
            services: flattenTree(serviceTree)
        }
    };
};

const Home: NextPage<Props> = ({providers, services}) => {
    const {t} = useTranslation();

    const [selectedProviders, setSelectedProviders] = useState<string[]>(providers.map((provider) => provider.id));
    const [selectedServices, setSelectedServices] = useState<string[]>(services.map((service) => service.id));

    return (
        <Container>
            <div className="d-flex gap-3 mb-3">
                <SelectDropdown
                    label={t('providers.name', 'Providers')}
                    options={providers.map((provider) => ({
                        value: provider.id,
                        label: provider.name
                    }))}
                    value={selectedProviders}
                    onChange={(value) => setSelectedProviders(value)}

                    idPrefix="providers"
                    buttonLabel="Update"
                    toggleProps={{color: 'primary', outline: true, style: {width: '10rem'}}}
                    menuProps={{style: {width: '20rem'}}}
                    wrapperProps={{style: {maxHeight: '50vh', overflowY: 'auto'}}}
                />

                <SelectDropdown
                    label={t('services.name', 'Services')}
                    options={services.map((service) => ({
                        value: service.id,
                        label: service.name,
                        style: {
                            marginLeft: `${2 * service.depth}rem`
                        }
                    }))}
                    value={selectedServices}
                    onChange={(value) => setSelectedServices(value)}

                    idPrefix="services"
                    buttonLabel="Update"
                    toggleProps={{color: 'primary', outline: true, style: {width: '10rem'}}}
                    menuProps={{style: {width: '20rem'}}}
                    wrapperProps={{style: {maxHeight: '50vh', overflowY: 'auto'}}}
                />
            </div>

            TODO
        </Container>
    );
};

export default Home;
