# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.1.0"></a>
# [2.1.0](https://github.com/kaltura/KalturaGeneratedAPIClientsTypescript/compare/v2.0.0...v2.1.0) (2017-05-22)


### Features

* separate dynamic info (ks, partnerid) from configuration info (client tag, endpointUrl) ([12bf78e](https://github.com/kaltura/KalturaGeneratedAPIClientsTypescript/commit/12bf78e))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/kaltura/KalturaGeneratedAPIClientsTypescript/compare/v1.1.0...v2.0.0) (2017-05-18)


### Features

* **kaltura-clients:** remove configuration objects, assign dynamic data directly on the clients ([8a30a72](https://github.com/kaltura/KalturaGeneratedAPIClientsTypescript/commit/8a30a72))


### BREAKING CHANGES

* **kaltura-clients:** the 'KalturaClientBaseConfiguration' and 'KalturaHttpClientConfiguration' objects were removed.

Any dynamic data assigned on them should be done directly on the client instance.



<a name="1.1.0"></a>
# [1.1.0](http://github.com/KalturaGeneratedAPIClientsTypescript/compare/v1.0.0...v1.1.0) (2017-05-09)


### Bug Fixes

* fix upload file process ([2db951c](http://github.com/KalturaGeneratedAPIClientsTypescript/commit/2db951c))
* prevent IDE intellisense from importing by default types from the module that bundle the complete library ([61e5c4e](http://github.com/KalturaGeneratedAPIClientsTypescript/commit/61e5c4e))
* seamlessly add enum types used by requests to the bundle ([c417868](http://github.com/KalturaGeneratedAPIClientsTypescript/commit/c417868))
* send 'partnerId' only if provided (previously was sending 'undefined' if wan't provided) ([e128dfc](http://github.com/KalturaGeneratedAPIClientsTypescript/commit/e128dfc))
* setting dependent property in multi-request now uses zero index base. ([1599905](http://github.com/KalturaGeneratedAPIClientsTypescript/commit/1599905))


### Features

* notify developer when response from server returned with kaltura object type that wasn't bundled into the application ([78a2f7c](http://github.com/KalturaGeneratedAPIClientsTypescript/commit/78a2f7c))



<a name="1.0.0"></a>
# 1.0.0 (2017-05-08)


### Features

* **bundling:** we now support bundling only what the app is using ([a7b8ef4](http://github.com/KalturaGeneratedAPIClientsTypescript/commit/a7b8ef4))



<a name="1.0.0-beta.1"></a>
# 1.0.0-beta.1 (2017-05-07)

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
