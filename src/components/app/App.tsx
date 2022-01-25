import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';

import {Header} from './Header';
import {Main} from './Main';
import {Footer} from './Footer';

export const App: React.FC = () => {
    const {t} = useTranslation();
    const title = t('general:meta.title', 'transgenderwachttijd.nl');

    return (
        <>
            <Helmet titleTemplate={`%s | {title}`} defaultTitle={title} />

            <Header />
            <Main />
            <Footer />
        </>
    );
};
