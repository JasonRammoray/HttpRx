## RxHttp
A JavaScript library wrapping best of Observable and Request.
No more, no less.

It does only one thing and does it very well - provides a possibility to execute http requests in reactive manner.

It *does not* break http semantics.

This means, that everything with status code less than 400 is considered to be a success and everything with status code more or equal to 400 is considered to be an error.
## Examples:
```js
const httpRx = require('http-rx');
const userName = 'jasonrammoray';
const url = `https://api.github.com/users/${userName}`;
httpRx.get(url)
.map(data => data.email)
.catch(error => console.error('Can not obtain user data, because: ', error))
.finally(() => console.info('GitHub user data fetching procedure is done'))
.subscribe(userEmail => console.log(`User email is ${userEmail}`));
```
