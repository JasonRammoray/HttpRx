const genericRequest = require('./generic-request');
module.exports = method => (url, options) => genericRequest(method, url, options);
