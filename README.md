# Kaltura Typescript Client
 
 
> An easy-to-use facade to Kaltura server with typescript support for action requests, classes and enums.
 
This library uses `Typescript` files that are transpiled  into `ECMAScript 5` using `commonjs` as a module system.
 
## Installation

Install using `npm`:
```bash
$ npm install --save kaltura-typescript-client tslib
```
 
 
Install using `yarn`:
```bash
$ yarn add kaltura-typescript-client tslib
```


 
## Instructions
 
### Getting Started
For a Getting started guide, API docs and more - check out [our docs](/docs/getting-started.md)!
 
 
For `Angular` projects you can clone a [sample repository]() demonstrating some common use cases with this library.
 
 
## TL;DR
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
- [x] Share properties among requests to reduce code duplication.
   - [x] Valid KS
   - [x] Partner Id
   - [x] Client Tag
 
 Below is a list of features to be added:
- [ ] Generate `kalsig` per request.
- [ ] Code documentation of classes/enums/actions.
- [ ] Simplify syntax of enums representing strings.
- [ ] Warn against deprecated classes/enums/actions.
- [ ] AOT compile support.
 
## License and Copyright Information
All code in this project is released under the [AGPLv3 license](http://www.gnu.org/licenses/agpl-3.0.html) unless a different license for a particular library is specified in the applicable library path.
 
Copyright © Kaltura Inc. All rights reserved.
 