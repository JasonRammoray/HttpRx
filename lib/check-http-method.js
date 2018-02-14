const HTTP_METHODS = require('./http-methods');

/**
 * Checks if http method is correct or not
 * @param {String} method - Method for checking
 * @return {Boolean} Is correct or not
 */
function checkHttpMethod(method) {
    return RegExp(HTTP_METHODS.join('|'), 'i').test(method);
}

module.exports = checkHttpMethod;
