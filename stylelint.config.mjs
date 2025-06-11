export default {
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-html/astro',
        'stylelint-config-property-sort-order-smacss'
    ],
    plugins: [
        'stylelint-plugin-logical-css',
        'stylelint-rem-over-px',
        'stylelint-declaration-block-no-ignored-properties'
    ],
    rules: {
        'plugin/use-logical-properties-and-values': [
            true,
            {
                severity: 'warning',
                ignore: ['overflow-y', 'overflow-x']
            }
        ],
        'plugin/declaration-block-no-ignored-properties': true,
        'rem-over-px/rem-over-px': true
    }
}
