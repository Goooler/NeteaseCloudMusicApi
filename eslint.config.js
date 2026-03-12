const typescriptParser = require('@typescript-eslint/parser')
const typescriptPlugin = require('@typescript-eslint/eslint-plugin')
const prettierPlugin = require('eslint-plugin-prettier')
const htmlPlugin = require('eslint-plugin-html')
const prettierConfig = require('eslint-config-prettier')

module.exports = [
  {
    ignores: ['public/'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        // Browser globals
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        // Node.js globals
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
      },
    },
    plugins: {
      html: htmlPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      indent: ['error', 2, { SwitchCase: 1 }],
      'space-infix-ops': ['error', { int32Hint: false }],
      'key-spacing': [
        2,
        {
          beforeColon: false,
          afterColon: true,
        },
      ],
      'no-octal': 2,
      'no-redeclare': 2,
      'comma-spacing': 2,
      'no-new-object': 2,
      'arrow-spacing': 2,
      quotes: [
        2,
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
    },
  },
]
