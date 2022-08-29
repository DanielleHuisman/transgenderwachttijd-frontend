import type {AppProps} from 'next/app';
import Head from 'next/head';
import {appWithTranslation} from 'next-i18next';

import '../styles/globals.scss';

const App = ({Component, pageProps}: AppProps) => (
    <>
        <Head>
            <title>transgenderwachttijd.nl</title>
        </Head>

        <Component {...pageProps} />
    </>
);

export default appWithTranslation(App);
