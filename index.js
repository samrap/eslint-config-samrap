'use strict';

module.exports = {
    rules: {
        /*
         Possible Errors...
         */
        'no-cond-assign': 2,
        'no-dupe-args': 1,
        'no-dupe-keys': 1,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-irregular-whitespace': 1,
        'no-obj-calls': 2,
        'no-template-curly-in-string': 1,
        'no-unexpected-multiline': 2,
        'use-isnan': 2,
        'valid-jsdoc': 1,

        /*
         Best Practices...
         */
        'curly': 2,
        'dot-location': [2, 'property'],
        'dot-notation': 2,
        'no-floating-decimal': 1,
        'no-loop-func': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-redeclare': 1,
        'no-unused-labels': 2,

        /*
         Variables...
         */
        'no-delete-var': 2,
        'no-unused-vars': [1, {args: 'none'}],

        /*
         Stylistic Issues...
         */
        'array-bracket-spacing': 2,
        'block-spacing': 2,
        'brace-style': 2,
        'camelcase': [2, {properties: 'never'}],
        'comma-dangle': [2, 'always-multiline'],
        'eol-last': 2,
        'func-call-spacing': 2,
        'indent': 2,
        'key-spacing': 2,
        'keyword-spacing': 2,
        'max-depth': 1,
        'max-len': [1, {
            ignoreComments: false,
            ignoreUrls: true,
        }],
        'new-cap': [2, {properties: false}],
        'newline-after-var': 2,
        'newline-before-return': 2,
        'no-continue': 1,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, {max: 1}],
        'no-trailing-spaces': 2,
        'object-curly-newline': [2, {multiline: true}],
        'object-curly-spacing': 2,
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'consistent-as-needed'],
        'require-jsdoc': [1, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: false,
                ArrowFunctionExpression: false,
            },
        }],
        'semi-spacing': 2,
        'semi': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        'space-in-parens': 2,

        /*
         ECMAScript 6...
         */
        'arrow-parens': 2,
        'arrow-spacing': 2,
        'constructor-super': 2,
        'no-class-assign': 1,
        'no-const-assign': 2,
        'no-new-symbol': 2,
        'no-this-before-super': 2,
        'no-useless-constructor': 2,
        'no-var': 2,
        'prefer-const': 1,
        'prefer-template': 1,
        'template-curly-spacing': 2,
    },
};
