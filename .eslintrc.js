module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.ts?(x)', '*.js?(x)'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'prettier/prettier': 'off',
        'react-hooks/exhaustive-deps': 'off',
        curly: 'off',
      },
    },
  ],
};
