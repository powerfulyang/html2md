const { pathsToModuleNameMapper } = require('@powerfulyang/lint');
const tsconfig = require('./tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
  prefix: '<rootDir>/',
});

const esModules = ['d3', 'internmap', 'delaunator', 'robust-predicates'].join('|');

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  moduleNameMapper,
  transform: {
    '.*\\.(j|t)sx?$': ['@swc/jest'],
  },
  transformIgnorePatterns: [`node_modules/.pnpm/(?!${esModules})`],
  forceExit: true,
};
