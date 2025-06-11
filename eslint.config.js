import eslintPluginAstro from 'eslint-plugin-astro'
import js from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
    js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    jsxA11y.flatConfigs.recommended
]
