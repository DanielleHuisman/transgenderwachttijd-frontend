import React from 'react';
import {useTranslation} from 'react-i18next';

export const Header: React.FC = () => {
    const {t} = useTranslation();

    return (
        <header>
            <h1>{t('general:meta.title', 'transgenderwachttijd.nl')}</h1>
        </header>
    );
};
