module.exports = {
    env: {
        production: {
            plugins: [
                [
                    'babel-plugin-styled-components',
                    {
                        ssr: false,
                        displayName: false,
                        pure: true,
                        minify: true,
                        transpileTemplateLiterals: true,
                    },
                ],
                'transform-react-remove-prop-types',
                '@babel/plugin-transform-react-constant-elements',
                '@babel/plugin-transform-react-inline-elements',
            ],
        },
        test: {
            plugins: [
                '@babel/plugin-transform-modules-commonjs',
                'dynamic-import-node',
            ],
        },
    },
    plugins: [
        [
            'babel-plugin-styled-components',
            {
                ssr: false,
                displayName: true,
                pure: true,
                minify: false,
                transpileTemplateLiterals: false,
            },
        ],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-json-strings',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-optional-catch-binding',
        'lodash',
    ],
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'entry',
                corejs: 3,
            },
        ],
        '@babel/preset-react',
    ],
};
