const path = require('path');
const resolveUrlLoader = require('craco-resolve-url-loader');
const CracoEnvPlugin = require('craco-plugin-env');
const ESLINT_MODES = require("@craco/craco");
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.path.json');

module.exports = {
  plugins:[
    {
      plugin:resolveUrlLoader
    },
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {}
      }
    }
  ],
  eslint: {
    mode: ESLINT_MODES.extends,
  },
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@resources': path.resolve('src/resources'),
      '@route': path.resolve(__dirname, 'src/route'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (config, { env, paths }) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
      }),
    },
  },
}
