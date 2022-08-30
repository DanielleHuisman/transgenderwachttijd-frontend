import type {GetStaticProps, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Button} from 'reactstrap';

export const getStaticProps: GetStaticProps = async ({locale}) => {
    console.log(locale);

    return {
        props: {
            ...(await serverSideTranslations(locale as string))
        }
    };
};

const Home: NextPage = () => {
    const {t} = useTranslation();

    return (
        <>
            <h1>{t('title', 'transgenderwachttijd.nl')}</h1>
            <p>{t('description', 'Tracking waiting times for transgender health care in the Netherlands.')}</p>

            <Button color="primary">Test</Button>
        </>
    );
};

export default Home;
