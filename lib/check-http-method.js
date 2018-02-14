const HTTP_METHODS = require('./http-methods');

/**
 * Checks is http method correct
 * @param {string} method - Method for checking
 * @return {boolean} Is correct or not
 */
function checkHttpMethod(method) {
    return RegExp(HTTP_METHODS.join('|'), 'i').test(method);
}

module.exports = checkHttpMethod;
