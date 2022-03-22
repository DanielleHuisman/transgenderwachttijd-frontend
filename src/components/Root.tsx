import {ApolloProvider} from '@apollo/client';
import React, {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter} from 'react-router-dom';
import {Spinner} from 'reactstrap';

import {client} from '../graphql';

import {App} from './app/App';

export const Root: React.FC = () => {
    return (
        <ErrorBoundary fallbackRender={({error}) => <code>{error.stack || error.message}</code>}>
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Suspense fallback={<Spinner />}>
                        <App />
                    </Suspense>
                </BrowserRouter>
            </ApolloProvider>
        </ErrorBoundary>
    );
};
