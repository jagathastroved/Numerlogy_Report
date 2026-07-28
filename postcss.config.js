export default {
    plugins: {
        '@tailwindcss/postcss': {},
        'postcss-preset-env': {
            stage: 1,
            features: {
                'oklab-function': { preserve: false },   // oklch -> rgb fallback
                'cascade-layers': true,                   // @layer -> flatten pannும்
            },
            browsers: 'Safari >= 14, iOS >= 14',
        },
    },
};