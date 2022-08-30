import type {AppProps} from 'next/app';
import {appWithTranslation} from 'next-i18next';

import '../styles/globals.scss';
import {Layout} from '../components/Layout';

const App = ({Component, pageProps}: AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default appWithTranslation(App);
