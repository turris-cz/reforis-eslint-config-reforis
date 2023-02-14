# eslint-config-reforis

[![npm version](https://badge.fury.io/js/eslint-config-reforis.svg)](https://badge.fury.io/js/eslint-config-reforis)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

ESLint shareable configuration for reForis and its plugins. It lints javascript
with ease, based on the popular
[javascript code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

The config is built upon Airbnb's ESLint rules with additional rules and
optimizations.

## Features

-   based on the popular
    [javascript code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
-   with [React](https://reactjs.org/),
    [react-hooks](https://reactjs.org/docs/hooks-intro.html), and
    [Prettier](https://prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
    support

## Installation

Install the package with

```sh
npm install eslint-config-reforis --save-dev
```

`eslint-config-reforis` requires you to take care of it's `peerDependencies`.
Install the correct version of each `peerDependencies` package, which are listed
with the following command:

```sh
npm info "eslint-config-reforis@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev eslint-config-reforis
```

## Usage

Now add `eslint-config-reforis` to either your `package.json`:

```json
{
    "eslintConfig": {
        "extends": "eslint-config-reforis"
    }
}
```

to your `.eslintrc`:

```json
{
    "extends": "eslint-config-reforis"
}
```

or `.eslintrc.js`:

```js
module.exports = {
    extends: "eslint-config-reforis",
};
```

### Prettier Config

This is how you can use or extend the `eslint-config-reforis` prettier config in
your app:

```js
// prettier.config.js
module.exports = require("eslint-config-reforis/prettier.config");
```

## Development

Shareable configs are simply npm packages that export a configuration object.

You can also test your shareable config on your computer before publishing by
installing or linking your module globally. Type:

### Linking module

Go to the local module directory (package you want to install) and enter this
command.

```sh
npm link
```

Then, in your project that wants to use your shareable config, type:

```sh
npm link eslint-config-reforis
```

### Installing module

In the project where you want to use your shareable config, type:

```sh
npm install /path-to-eslint-config-reforis
```

### Using a Shareable Config

Shareable configs are designed to work with the extends feature of `.eslintrc`
files. Instead of using a file path for the value of extends, use your module
name. For example, in your project that wants to use your shareable config:

```json
{
    "extends": "eslint-config-myconfig"
}
```

## LICENSE

[GPL-3.0-or-later](LICENSE)
