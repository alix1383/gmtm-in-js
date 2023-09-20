module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    ignorePatterns: ["webpack.config.js", "tailwind.config.js"],
    extends: "eslint:recommended",
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {},
};
