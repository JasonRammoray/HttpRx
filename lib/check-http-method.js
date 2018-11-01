const HTTP_METHODS = require('./http-methods');

/**
 * Checks if http method is correct or not
 * @param {String} method an HTTP verb name
 * to check for correctness
 * @return {Boolean} a boolean flag indicating
 * if an HTTP verb is correct or not
 */
function checkHttpMethod(method) {
  return HTTP_METHODS.includes(method);
}

module.exports = checkHttpMethod;
