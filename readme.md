## RxHttp
A JavaScript library wrapping best of Observable and Request.
No more, no less.

It does only one thing and does it very well - provides a possibility to execute http requests in reactive manner.

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
