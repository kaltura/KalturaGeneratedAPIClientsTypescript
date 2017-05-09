# Building the sources
> This library is auto-generated using `kaltura/clients-generator` php engine. Feel free to clone, build and play with this library but in order to submit PR you should work against the [kaltura/clients-generator](https://github.com/kaltura/clients-generator) repo. 

## Using yarn to manage dependencies
We encourage you to use `yarn` instead of `npm` to manage your dependencies. With `yarn` you don't need to worry that the build will fail due to an upgrade in some dependent libraries. In addition you get a lockfile for free, installing packages is blazing fast and they are automatically stored in package.json. The impact of installing and using Yarn is also minimal. 


To check if you already have `yarn` installed on you machine run the following:
```bash
$ yarn --version
```
If you don't have `yarn` install visit the following [link](https://yarnpkg.com/en/docs/install). 

## Building the client library
After cloning the repo you should install dependent libraries:
```bash
$ yarn
$ npm run build
```

## Running integration tests
- In `src/tests` folder you should duplicate file `tests-config.tpl.ts` and name it `tests-config.ts`.
- Modify the file content to include valid information.
- Run `npm run test` to test the library

> If you want to test the library against the production server user the following as the endpoint in the config file: http://www.kaltura.com/api_v3/index.php/
