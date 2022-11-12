import {ApolloProvider} from '@apollo/client';
import type {AppProps} from 'next/app';
import {appWithTranslation} from 'next-i18next';

import '../styles/globals.scss';
import {Layout} from '../components/Layout';
import {client} from '../graphql/apollo-client';

const App = ({Component, pageProps}: AppProps) => (
    <ApolloProvider client={client}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
);

export default appWithTranslation(App);
