const genericRequest = require('./generic-request');
module.exports = requestFactory;

/**
 * Generates a request callback for
 * a given HTTP method
 * @param {String} method an HTTP verb
 * @return {Function} a callback to be executed, when
 * calling a respective HTTP method on the package
 */
function requestFactory(method) {
    return doRequest;

    /**
     * Executes an http request to a certain
     * url with a given configuration object
     * @see {@link genericRequest}
     * @param {String} url a request url
     * @param {Object} options a configuration object
     * mirroring all the options passed to the original
     * request npm module
     * @return {Observable} request observable
     */
    function doRequest(url, options) {
        return genericRequest(method, url, options);
    }
}
