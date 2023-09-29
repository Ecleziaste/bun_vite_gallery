module.exports = {
  extends: [
    '@commitlint/config-conventional', // scoped packages are not prefixed
  ],
  rules: {
    'subject-case': [2, 'never', ['snake-case', 'pascal-case', 'camel-case']],
  },
};
