import type {GetServerSideProps, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Container} from 'reactstrap';

import {client} from '../graphql/apollo-client';
import {SelectDropdown} from '../components/SelectDropdown';
import {GetProvidersDocument, GetProvidersQuery, GetProvidersQueryVariables, ProviderFragment} from '../graphql/generated';

interface Props {
    providers: ProviderFragment[];
}

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    const {data} = await client.query<GetProvidersQuery, GetProvidersQueryVariables>({
        query: GetProvidersDocument
    });

    return {
        props: {
            ...(await serverSideTranslations(locale as string)),
            providers: data.providers
        }
    };
};

const Home: NextPage<Props> = ({providers}) => {
    const {t} = useTranslation();

    return (
        <Container>
            <SelectDropdown
                label={t('providers.name', 'Providers')}
                options={providers.map((provider) => ({
                    value: provider.id,
                    label: provider.name
                }))}
                idPrefix="providers"
                buttonLabel="Update"
                toggleProps={{color: 'primary', outline: true, style: {width: '10rem'}}}
            />

            TODO
        </Container>
    );
};

export default Home;
