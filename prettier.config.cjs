/** @type {import("prettier").Config} */
module.exports = {
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    printWidth: 80,
    useTabs: false,
    bracketSpacing: true,
    arrowParens: 'avoid',
    endOfLine: 'lf',
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    bracketSameLine: false,
    plugins: ['prettier-plugin-astro']
};
