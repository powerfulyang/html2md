const { eslint } = require('@powerfulyang/lint');

module.exports = {
  ...eslint,
  rules: {
    ...eslint.rules,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.*rc.{js,cjs,mjs,ts,cts,mts}',
          '**/*.config.{js,cjs,mjs,ts,cts,mts}',
          '**/*.spec.{ts,tsx}',
          '**/webpack.*.js',
        ],
      },
    ],
  },
};
