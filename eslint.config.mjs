// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config({
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    rules: {
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn', // or "off"
    },
})

