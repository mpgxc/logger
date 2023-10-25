## [2.0.1](https://github.com/mpgxc/logger/compare/v2.0.0...v2.0.1) (2023-10-25)


### Bug Fixes

* **logger.module:** making the properties of the "forRoot" method optional ([e798000](https://github.com/mpgxc/logger/commit/e7980004412f6aa78ec91b9d07ed4d8265697a5b))

# [2.0.0](https://github.com/mpgxc/logger/compare/v1.0.0...v2.0.0) (2023-10-21)


### Features

* add default name to logger instance when not provided ([f3c2754](https://github.com/mpgxc/logger/commit/f3c27540d93eac84794019f9214c375440caa642))
* **exception:** added guard to check if token already registered ([044ae25](https://github.com/mpgxc/logger/commit/044ae25945157abc0e6770a506d953f75c581a1c))
* **module:** added `isGlobal` option to make the module globally visible ([a7a8942](https://github.com/mpgxc/logger/commit/a7a89429e042db5d3ef2b152c82b858242b77ed6))


### BREAKING CHANGES

* **exception:** Duplicate token exceptions may occur if the Logger provider is injected with a
token already in use

# 1.0.0 (2023-10-21)


### Code Refactoring

* **logger-service:** rename UzzeLoggerService class to LoggerService ([6b491ee](https://github.com/mpgxc/logger/commit/6b491eecd4098602c07cb1583242295f8a04a8fe))


### BREAKING CHANGES

* **logger-service:** change UzzeLoggerService to LoggerService
