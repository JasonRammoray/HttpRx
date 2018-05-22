const httpRx = {};
const HTTP_METHODS = require('./http-methods');
const httpRxMethodFactory = require('./request-factory');

HTTP_METHODS.forEach(addSupportForHttpMethod);
module.exports = httpRx;

/**
 * Adds a support for a given HTTP method
 * to the package
 * @param {String} method HTTP verb
 */
function addSupportForHttpMethod(method) {
    httpRx[method] = httpRxMethodFactory(method);
}
