import * as Sentry from '@sentry/react';

import {config} from './config';

if (!config.sentry.dsn.includes('DUMMY')) {
    Sentry.init({
        dsn: config.sentry.dsn,
        integrations: []
    });
}
