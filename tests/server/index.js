const express = require('express');
const url = require('url');
const app = express();
const port = 4567;
app.get('/test', (req, res) => {
	const parsedQuery = parseUrl(req.url);
});
module.exports = {start, stop};

/**
 * Starts testing web server
 */
function start() {
	app.listen(port, () => console.log(`HttpRx test server is up and running at port ${port}`));
}

/**
 * Stops testing web server
 */
function stop() {
	app.close();
}

/**
 * Parses query string as an object
 * @param {String} requestUrl
 * @return {Object} parsed query string as an object
 */
function parseUrl(requestUrl) {
	return url.parse(requestUrl);
}
