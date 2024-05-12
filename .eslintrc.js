module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx', '*.mts'],
      rules: {
        'no-undef': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 1,
        'prettier/prettier': 0,
        'no-trailing-spaces': 0,
        'react-hooks/exhaustive-deps': 0,
        curly: 0,
      },
    },
  ],
};
