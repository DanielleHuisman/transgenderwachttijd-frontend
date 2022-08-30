import {GetStaticProps, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Container} from 'reactstrap';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale as string))
    }
});

const About: NextPage = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <p>{t('description', 'Tracking waiting times for transgender health care in the Netherlands.')}</p>

            <p>TODO</p>
        </Container>
    );
};

export default About;
