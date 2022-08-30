import type {GetStaticProps, NextPage} from 'next';
// import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Container} from 'reactstrap';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale as string))
    }
});

const Home: NextPage = () => {
    // const {t} = useTranslation();

    return (
        <Container>
            TODO
        </Container>
    );
};

export default Home;
