const nock = require('nock');
const httpRx = require('../index');
const httpStatusCodes = require('../lib/http-status-codes');
const defaultOptions = {
	json: true
};
describe('HttpRx, HEAD method ->', () => {
	it('should be able to successfully execute HEAD request', done => {
		nock('http://domain.com').head('/test').reply(200, {
			message: 'HEAD success response'
		});
		httpRx.head('http://domain.com/test', defaultOptions).subscribe(data => {
			expect(data.response.statusCode).toBe(httpStatusCodes.OK);
			expect(data.body.message).toBe('HEAD success response');
			done();
		});
	});
	it('should be able to handle an error in HEAD request', done => {
		nock('http://domain.com').head('/test').reply(400, {
			message: 'HEAD fail response'
		});
		httpRx.head('http://domain.com/test', defaultOptions).subscribe(null, error => {
			expect(error.response.statusCode).toBe(httpStatusCodes.BAD_REQUEST);
			expect(error.body.message).toBe('HEAD fail response');
			done();
		});
	});
});
