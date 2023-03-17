module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
    },
    rules: {
        "prettier/prettier": "error",
        "no-console": "error",
        semi: ["error", "never"],
        "no-unused-vars": "error",
        "single-quote": "error"
    }
}
