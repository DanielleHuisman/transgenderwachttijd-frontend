import type {GetServerSideProps, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {ButtonGroup, Container} from 'reactstrap';

import {SelectDropdown} from '../components/SelectDropdown';
import {client} from '../graphql/apollo-client';
import {
    GetProvidersDocument,
    GetProvidersQuery,
    GetProvidersQueryVariables,
    GetServicesDocument,
    GetServicesQuery,
    GetServicesQueryVariables,
    ProviderFragment,
    ServiceFragment
} from '../graphql/generated';

interface Props {
    providers: ProviderFragment[];
    services: ServiceFragment[];
}

export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {
    const {data: {providers}} = await client.query<GetProvidersQuery, GetProvidersQueryVariables>({
        query: GetProvidersDocument
    });
    const {data: {services}} = await client.query<GetServicesQuery, GetServicesQueryVariables>({
        query: GetServicesDocument
    });

    return {
        props: {
            ...(await serverSideTranslations(locale as string)),
            providers,
            services
        }
    };
};

const Home: NextPage<Props> = ({providers, services}) => {
    const {t} = useTranslation();

    return (
        <Container>
            <div className="d-flex gap-3 mb-3">
                <SelectDropdown
                    label={t('providers.name', 'Providers')}
                    options={providers.map((provider) => ({
                        value: provider.id,
                        label: provider.name
                    }))}
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
                        label: service.name
                    }))}
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
