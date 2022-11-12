import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {i18n} from 'next-i18next';

const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
});

const headersLink = setContext((_, {headers}) => {
    // TODO: remove debug print
    console.log('nl');
    return {
        headers: {
            ...headers,
            'Accept-Language': i18n?.isInitialized ? i18n?.language : 'en'
        }
    };
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: headersLink.concat(httpLink)
});
