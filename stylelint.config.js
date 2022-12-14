module.exports = {
    processors: [
        [
            'stylelint-processor-styled-components',
            {
                parserPlugins: [
                    'jsx',
                    'objectRestSpread',
                    'classProperties',
                    'dynamicImport',
                    'optionalCatchBinding',
                    'optionalChaining',
                    'nullishCoalescingOperator',
                ],
            },
        ],
    ],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-styled-components',
        'stylelint-config-rational-order',
    ],
    plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
    rules: {
        indentation: 4,
        'declaration-empty-line-before': null,
        'at-rule-no-unknown': null,
        'font-family-no-missing-generic-family-keyword': null,
        'order/properties-order': [],
        'no-descending-specificity': null,
        'property-no-vendor-prefix': null,
        'plugin/rational-order': [
            true,
            {
                'border-in-box-model': false,
                'empty-line-between-groups': true,
            },
        ],
        'selector-type-no-unknown': [
            true,
            {
                ignoreTypes: ['/-styled-mixin/', '$dummyValue'],
            },
        ],
    },
};
