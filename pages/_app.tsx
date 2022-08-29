import type {AppProps} from 'next/app';
import Head from 'next/head';
import {appWithTranslation, useTranslation} from 'next-i18next';

import '../styles/globals.scss';

const App = ({Component, pageProps}: AppProps) => {
    const {t} = useTranslation();

    return (
        <>
            <Head>
                <title>{t('general:title', 'transgenderwachttijd.nl')}</title>
            </Head>

            <Component {...pageProps} />
        </>
    );
};

export default appWithTranslation(App);
