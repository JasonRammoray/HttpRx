const HTTP_METHODS = require('./http-methods');
const re = RegExp(HTTP_METHODS.join('|'));
/**
 * Checks if http method is correct or not
 * @param {String} method - Method for checking
 * @return {Boolean} Is correct or not
 */
function checkHttpMethod(method) {
    return re.test(method);
}

module.exports = checkHttpMethod;
