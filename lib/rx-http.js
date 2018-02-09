const httpRx = {};
const request = require('request');
const Observable = require('rxjs').Observable;
const HTTP_STATUS_CODES = require('./http-status-codes');

const isCorrectHttpMethod = method => /get|head|patch|post|put|delete/i.test(method);
const isFailedResponse = statusCode => statusCode >= HTTP_STATUS_CODES.BAD_REQUEST;
const httpRxRequest = (method, url, options) => {
	if (!isCorrectHttpMethod(method)) {
		const errMsg = `httpRx client was given an invalid method name for http request: ${method}`;
		return Observable.throw(new Error(errMsg));
	}
	return new Observable(observer => {
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

const httpRxMethodFactory = method => (url, options) => httpRxRequest(method, url, options);

httpRx.get = httpRxMethodFactory('get');
httpRx.head = httpRxMethodFactory('head');
httpRx.patch = httpRxMethodFactory('patch');
httpRx.post = httpRxMethodFactory('post');
httpRx.put = httpRxMethodFactory('put');
httpRx.delete = httpRxMethodFactory('delete');

module.exports = httpRx;
