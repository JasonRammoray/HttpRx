# 2.0.8
Bump handlebars from 4.2.0 to 4.5.3

# 2.0.6
Updated npm packages to their latest versions according to the security audit.

# 2.0.5
Updated npm packages to their latest versions according to the security audit.

# 2.0.0
* Rewritten README to reflect a new way of using http-rx since chain api is no longer available in RxJs 6. Your code will __BREAK__ if you have chain api somewhere (e.g. .map(...).finally(...).catch(...))

# 1.1.1
* Improved test coverage (a unit test, which checks request cancellation possibility)
* updated a packages to their latest versions

# 1.1.0
* Migrated from jasmine-node to jest
* Improved code coverage
* Introduced an ability to cancel ongoing request, when returning a callback from a function 
passed either to observable constructor or to Observable.create
* Segregated logic into different autonomous modules
