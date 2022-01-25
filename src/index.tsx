import * as i18n from 'i18next';
import BrowserLanguageDetector from 'i18next-browser-languagedetector';
import React from 'react';
import ReactDOM from 'react-dom';
import {initReactI18next} from 'react-i18next';

import './sentry';
import './styles/index.scss';
import {Root} from './components/Root';
import {translations} from './translations';

// Initialize i18next
i18n
    .use(BrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: translations
    });

// Render application
ReactDOM.render(<Root />, document.getElementById('root'));
