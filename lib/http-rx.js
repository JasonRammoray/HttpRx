const httpRx = {};
const HTTP_METHODS = require('./http-methods');
const httpRxMethodFactory = require('./request-factory');

HTTP_METHODS.forEach(method => httpRx[method] = httpRxMethodFactory(method));
module.exports = httpRx;
