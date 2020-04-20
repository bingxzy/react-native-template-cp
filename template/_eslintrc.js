module.exports = {
    env: {
        es6: true
    },
    extends: ['airbnb'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', 'jsx'] }],
        'react/prefer-stateless-function': [0],
        'no-useless-concat': [0],
        'no-use-before-define': [0],
        'no-console': [0],
        'react/prop-types': [0],
        'no-plusplus': [0, { allowForLoopAfterthoughts: true }],
        'react/jsx-boolean-value': [0],
        'consistent-return': [0],
        'global-require': [0],
        'react/jsx-fragments':[0],
        'max-len':['error',{code:130}],
        'camelcase':[0],
        'max-classes-per-file':[0],
        'no-bitwise':[0],
        'no-nested-ternary':[0],
        'no-await-in-loop':[0],
        'no-octal-escape':[0],
        'no-octal':[0],
        'no-restricted-syntax':[0],
        'no-continue':[0],
        'prefer-destructuring':[0],
        'react/jsx-props-no-spreading':[0],
        'no-useless-escape':[0]
    },
    parser:"babel-eslint"
};
