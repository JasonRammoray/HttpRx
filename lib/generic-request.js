const isCorrectHttpMethod = require('./check-http-method');
const HTTP_STATUS_CODES = require('./http-status-codes');
const rxjs = require('rxjs');
const Observable = rxjs.Observable;
const throwError = rxjs.throwError;
const request = require('request');
const isFailedResponse = statusCode => statusCode >= HTTP_STATUS_CODES.BAD_REQUEST;

module.exports = (method, url, options) => {
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
};
