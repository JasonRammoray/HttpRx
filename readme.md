![Travis build](https://travis-ci.org/JasonRammoray/HttpRx.svg?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/6be09fcb78891730bfc1/maintainability)](https://codeclimate.com/github/JasonRammoray/HttpRx/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6be09fcb78891730bfc1/test_coverage)](https://codeclimate.com/github/JasonRammoray/HttpRx/test_coverage)
![npm statistic](https://nodei.co/npm/http-rx.png?downloads=true&downloadRank=true&stars=true)
## HttpRx
A JavaScript library wrapping best of Observable and Request.
No more, no less.

It does only one thing and does it very well - provides a possibility to execute http requests in reactive manner.

It *does not* break http semantics.

See live demo [*HERE*](https://runkit.com/l2jliga/5b2c00bf17259600121348f2).

This means, that everything with status code less than 400 is considered to be a success and everything with status code more or equal to 400 is considered to be an error.
## Examples
```js
const httpRx = require('http-rx');
const { map, catchError, finalize } = require('rxjs/operators');
const userName = 'jasonrammoray';
const url = `https://api.github.com/users/${userName}`;
httpRx.get(url, {
    headers: {
      'User-Agent': 'Test user Agent'
    },
    json: true
})
.pipe(
    map(data => data.body.bio),
    catchError(error => console.error('Can not obtain user data, because: ', error)),
    finalize(() => console.info('GitHub user data fetching procedure is done'))
)
.subscribe(userBio => console.log(`GitHub user bio is: ${userBio}`));
```

## Pull-requests
Rules are simple:
* cover your changes with tests
* make sure, that your code complies with coding standards in the project
