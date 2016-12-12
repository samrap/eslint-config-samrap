# samrap-eslint-config

[![Build Status](https://travis-ci.org/samrap/eslint-config-samrap.svg?branch=master)](https://travis-ci.org/samrap/eslint-config-samrap)

An ESLint configuration for my personal tastes.

### Installation

```
yarn add eslint eslint-config-samrap
```

Or, if you prefer NPM over [Yarn](https://yarnpkg.com): (Why though?)

```
npm install eslint eslint-config-samrap
```

### Usage

After installing `eslint-config-samrap` as a dependency, you can extend the configuration in your [ESLint Configuration](http://eslint.org/docs/user-guide/configuring):

```javascript
{
    "extends": "samrap",
    "rules": {
        // Add or override rules here...
    }
}
```
