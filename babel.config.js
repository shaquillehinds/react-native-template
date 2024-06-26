module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-export-namespace-from'],
    ['react-native-reanimated/plugin'],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.tsx',
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
          '.png',
        ],
        alias: {
          '@assets': './assets',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@utils': './src/utils',
          '@styles': './src/styles',
          '@screens': './src/screens',
          '@routers': './src/routers',
          '@transports': './src/transports',
          '@navigators': './src/navigators',
          '@components': './src/components',
          '@configuration': './configuration.ts',
        },
      },
    ],
  ],
};
