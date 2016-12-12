# eslint-config-samrap

[![Build Status](https://travis-ci.org/samrap/eslint-config-samrap.svg?branch=master)](https://travis-ci.org/samrap/eslint-config-samrap)

An ESLint configuration for my personal tastes. As a PHP developer, I find certain conventions in the JavaScript community (especially 2 space indents) to be unreadable and impractical. This ESLint config takes the best practices and error checking from `eslint:recommended` and combines it with the style conventions of the PHP community, specifically from [PSR-2](http://www.php-fig.org/psr/psr-2/) and [Laravel](https://laravel.com/docs/5.3/contributions#coding-style). The result is a well-configured linter that promotes clean and readable code and is not as restrictive as the shareable configs from larger companies such as [AirBNB](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [Google](https://github.com/google/eslint-config-google).

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
