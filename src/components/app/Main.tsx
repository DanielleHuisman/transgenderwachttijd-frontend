import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Routes, Route} from 'react-router-dom';

import {Home} from '../../pages/home/Home';
import {ErrorPage} from '../../pages/util/error/Error';
import {NotFound} from '../../pages/util/not-found/NotFound';

export const Main = () => {
    return (
        <main>
            <ErrorBoundary FallbackComponent={ErrorPage}>
                <Routes>
                    <Route index element={Home} />

                    <Route path="*" element={NotFound} />
                </Routes>
            </ErrorBoundary>
        </main>
    );
};
