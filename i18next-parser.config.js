module.exports = {
    defaultNamespace: 'common',
    indentation: 4,
    input: [
        '**/*.{ts,tsx}'
    ],
    locales: ['en', 'nl'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    sort: true
};
