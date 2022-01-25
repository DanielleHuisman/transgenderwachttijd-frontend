interface Config {
    api: {
        url: string;
    };

    sentry: {
        dsn: string;
    };
}

export const config: Config = {
    api: {
        url: process.env.API_URL || 'DUMMY_API_URL'
    },

    sentry: {
        dsn: process.env.SENTRY_DSN || 'DUMMY_SENTRY_DSN'
    }
};
