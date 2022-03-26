module.exports = {
    indentation: 4,
    input: [
        'src/**/*.{ts,tsx}'
    ],
    locales: ['en', 'nl'],
    output: 'src/translations/$LOCALE/$NAMESPACE.json',
    sort: true
};
