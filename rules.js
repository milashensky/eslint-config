module.exports = {
  rules: {
    'indent': [
      'error',
      2,
    ],
    'no-alert': 0,
    'radix': ['error', 'as-needed'],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'import/prefer-default-export': ['warn'],
    'max-len': [
      'error',
      {
        'code': 380,
      },
    ],
    'import/newline-after-import': [
      'error',
      {
        'count': 2,
      },
    ],
    'vuejs-accessibility/click-events-have-key-events': 0,
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2,
        'maxEOF': 0,
      },
    ],
    'brace-style': [
      'error',
      'stroustrup',
    ],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      },
    ],
  },
};
