const SMALL_LINE_WIDTH = 80;
const LARGE_LINE_WIDTH = 120;
const TAB_WIDTH = 4;

module.exports = {
    printWidth: LARGE_LINE_WIDTH,
    tabWidth: TAB_WIDTH,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'all',
    bracketSpacing: false,
    arrowParens: 'always',
    endOfLine: 'lf',
    overrides: [
        {
            files: ['*.json'],
            options: {
                parser: 'json',
                tabWidth: TAB_WIDTH / 2,
                printWidth: SMALL_LINE_WIDTH,
            },
        },
        {
            files: '*.md',
            options: {
                tabWidth: TAB_WIDTH,
                printWidth: SMALL_LINE_WIDTH,
                proseWrap: 'always',
            },
        },
    ],
};
