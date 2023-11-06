import {ApolloProvider} from '@apollo/client';
import {appWithTranslation} from 'next-i18next';
import type {AppProps} from 'next/app';

import {Layout} from '../components/Layout';
import {client} from '../graphql/apollo-client';
import '../styles/globals.scss';

const App = ({Component, pageProps}: AppProps) => (
    <ApolloProvider client={client}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
);

export default appWithTranslation(App);
