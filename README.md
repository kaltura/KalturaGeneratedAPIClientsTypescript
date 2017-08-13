# Kaltura Typescript Client

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![Gitter chat](https://badges.gitter.im/kaltura-ng/kaltura-ng.png)](https://gitter.im/kaltura-ng/kaltura-ng) [![npm version](https://badge.fury.io/js/kaltura-typescript-client.svg)](https://badge.fury.io/js/kaltura-typescript-client)

> An easy-to-use facade to Kaltura server with typescript support for action requests, classes and enums.

This library uses `Typescript` files that are transpiled  into `ECMAScript 5` using `commonjs` as a module system.

This library have **_zero dependencies_** at runtime and it can be used in any Javascript project. Those who are using Typescript will benefit even more.

 >Visit our [live demonstration](https://goo.gl/c02JX2) for code snippets and common use cases.

 ## Technology stack and conventions
 This package use the following technologies:
 * [TypeScript](http://www.typescriptlang.org/) language (superset of Javascript).
 * [Yarn](https://yarnpkg.com/en/) as our dependency management.

## Installation

Install using `yarn`:
```bash
$ yarn add kaltura-typescript-client
```

## Instructions

### Getting Started
For a Getting started guide, API docs and more - check out [our docs](docs/getting-started.md)!

To keep being update review the [changelog](CHANGELOG.md) frequently.

 **Have a question?** Ask us on [Gitter](https://gitter.im/kaltura-ng/kaltura-ng).

 **Found a bug?** create [github issue](https://github.com/kaltura/KalturaGeneratedAPIClientsTypescript/issues) or



## Features list
The following is a list of all features supported by the library:

- [x] Bundle only used actions, classes and enums (a.k.a kaltura types) in your application to reduce bundle size.
- [x] Represent each kaltura types as a typed object with simple API.
- [x] Use generated action classes to easily access Kaltura services.
- [x] Invoke multi-requests against the server.
  - [x] Handle each request response separately.
  - [x] Expose interceptors to handle multi-request responses together.
  - [x] Use simple API to define dependent properties between requests using placeholders.
- [x] Support default properties value in requests.
- [x] Support the following property types:
   - [x] Dates.
   - [x] Simple types (number, string, boolean).
   - [x] Enums (both numeric enums or string enums).
   - [x] Kaltura objects including inheritance and fallback mechanism.
- [x] Handle 'readonly' fields, guard against mutating them or sending them to the server.
- [x] Ability to upload files including abort & retry operations.
- [x] Hide complex server API syntax such as:
   - [x] Classify objects using 'objectType' property.
   - [x] Mark Field for deletion
- [x] Runtime configuration to seamlessly attach properties to all the requests.
   - [x] Valid KS
   - [x] Partner Id
   - [x] Client Tag
- [x] Attach 'apiVersion' to each request

 Below is a list of features to be added:
- [ ] Generate `kalsig` per request.
- [ ] Request timeout support
- [ ] Cancel file upload should abort request
- [ ] Add Node.JS client
- [ ] When updating an object, ignore properties marked as insert only property.
- [ ] Code documentation of classes/enums/actions.
- [ ] Add developer/api guide.
- [ ] Simplify syntax of enums representing strings.
- [ ] Warn against deprecated classes/enums/actions.
- [ ] Protect against bundling the complete library by mistake.
- [ ] AOT compile support.
- [ ] Support setting 'undefined' for required properties when using 'setDependency' in multiple request.


# Building the sources
> This library is auto-generated using `kaltura/clients-generator` php engine. Feel free to clone, build and play with this library but in order to submit PR you should work against the [kaltura/clients-generator](https://github.com/kaltura/clients-generator) repo.

## Using yarn to manage dependencies
This project uses `yarn` to manage dependencies. To get the dependencies you will need to run `yarn install`.

To check if you already have `yarn` installed on you machine run the following:
```bash
$ yarn --version
```
If you don't have `yarn` install visit the following [link](https://yarnpkg.com/en/docs/install).

## Building the client library
After cloning the repo you should install dependent libraries:
```bash
$ yarn install
$ yarn run build
```

## Running integration tests
- In `src/tests` folder you should duplicate file `tests-config.tpl.ts` and name it `tests-config.ts`.
- Modify the file content to include valid information.
- Run `npm run test` to test the library

> If you want to test the library against the production server use the following as the endpoint in the config file: http://www.kaltura.com/api_v3/index.php/


## License and Copyright Information
All code in this project is released under the [AGPLv3 license](http://www.gnu.org/licenses/agpl-3.0.html) unless a different license for a particular library is specified in the applicable library path.

Copyright © Kaltura Inc. All rights reserved.