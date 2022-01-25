import React, {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter} from 'react-router-dom';
import {Spinner} from 'reactstrap';

import {App} from './app/App';

export const Root: React.FC = () => {
    return (
        <ErrorBoundary fallbackRender={({error}) => <code>{error.stack || error.message}</code>}>
            <BrowserRouter>
                <Suspense fallback={<Spinner />}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    );
};
