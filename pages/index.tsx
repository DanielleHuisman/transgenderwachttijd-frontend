import type {GetStaticProps, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Container} from 'reactstrap';

import {SelectDropdown} from '../components/SelectDropdown';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale as string))
    }
});

const Home: NextPage = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <SelectDropdown
                label={t('providers.name', 'Providers')}
                options={[{
                    value: '1',
                    label: 'Amsterdam UMC'
                }, {
                    value: '2',
                    label: 'Radboudumc'
                }, {
                    value: '3',
                    label: 'UMC Groningen'
                }]}
                idPrefix="providers"
                buttonLabel="Update"
                toggleProps={{color: 'primary', outline: true, style: {width: '10rem'}}}
            />

            TODO
        </Container>
    );
};

export default Home;
