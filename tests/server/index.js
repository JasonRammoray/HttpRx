const express = require('express');
const url = require('url');
const app = express();
const port = 4567;
app.put('/test', (req, res) => {

});
module.exports = {start, stop};

function start() {
	app.listen(port, () => console.log(`HttpRx test server is up and running at port ${port}`));
}
function stop() {
	app.
}
function parseUrl(requestUrl) {
	return url.parse(requestUrl)
}
