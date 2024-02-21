/**
 * Enables ESLint to use dependencies of the shared config
 * @see https://github.com/eslint/eslint/issues/3458
 */
require("./patch/modern-module-resolution");

const path = require("path");

/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
    extends: [
        // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
        "airbnb",
        "airbnb/hooks",
        // https://www.npmjs.com/package/eslint-plugin-jsx-a11y
        "plugin:jsx-a11y/recommended",
        // https://www.npmjs.com/package/eslint-plugin-import
        "plugin:import/errors",
        "plugin:import/warnings",
        // https://www.npmjs.com/package/eslint-plugin-react
        "plugin:react/recommended",
        // https://www.npmjs.com/package/eslint-plugin-react-hooks
        "plugin:react-hooks/recommended",
        // Make sure to put prettier last, so it gets the chance to override other.
        "prettier",
        "plugin:prettier/recommended",
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            presets: ["@babel/preset-react"],
        },
        ecmaFeatures: {
            jsx: true,
        },
    },
    globals: {
        _: "readonly",
        babel: "readonly",
        ForisTranslations: "readonly",
        ngettext: "readonly",
        ForisPlugins: "readonly",
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    rules: {
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "no-console": "error",
        "no-use-before-define": [
            "error",
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                max: 1,
                maxBOF: 1,
                maxEOF: 0,
            },
        ],
        // Should be enabled in the future
        "no-param-reassign": "off",
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
        "react/default-props-match-prop-types": "off",
        "react/forbid-prop-types": "off",
        // Permanently disabled
        camelcase: "off",
        "react/jsx-filename-extension": "off",
        "no-plusplus": "off",
        "consistent-return": "off",
        radix: "off",
        "no-continue": "off",
        "react/no-danger": "off",

        // rules for https://github.com/benmosher/eslint-plugin-import
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    ["parent", "sibling"],
                ],
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
        "prettier/prettier": ["error"],
    },
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx"],
            },
            webpack: {
                env: { lighttpd: true },
                config: path.resolve(__dirname, "webpack.config.js"),
            },
            react: {
                // Tells eslint-plugin-react to automatically detect the version of React to use
                version: "detect",
            },
        },
    },
};
