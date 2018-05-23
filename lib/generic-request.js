const isCorrectHttpMethod = require('./check-http-method');
const HTTP_STATUS_CODES = require('./http-status-codes');
const {Observable, throwError} = require('rxjs');
const request = require('request');
const isFailedResponse = statusCode => statusCode >= HTTP_STATUS_CODES.BAD_REQUEST;

module.exports = genericRequest;

/**
 * Performs an http request based on a
 * set of options, which are:
 * @param {String} method an HTTP verb
 * @param {String} url a request url
 * @param {Object} options a configuration object
 * mirroring all the options passed to the original
 * request npm module
 * @return {Observable} request observable
 */
function genericRequest(method, url, options) {
    if (!isCorrectHttpMethod(method)) {
        const errMsg = `httpRx client was given an invalid method name for http request: ${method}`;
        return throwError(new Error(errMsg));
    }
    return Observable.create(observer => {
        request[method](url, options, (err, response, body) => {
            const responseWrapper = {response, body};
            if (err) {
                return observer.error(err);
            }
            if (isFailedResponse(response.statusCode)) {
                return observer.error(responseWrapper);
            }
            observer.next(responseWrapper);
            observer.complete(responseWrapper);
        });
    });
}
