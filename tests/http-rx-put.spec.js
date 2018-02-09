const nock = require('nock');
const httpRx = require('../index');
const httpStatusCodes = require('../lib/http-status-codes');
const defaultOptions = {
	json: true
};
describe('HttpRx, PUT method ->', () => {
	it('should be able to successfully execute PUT request', done => {
		nock('http://domain.com').put('/test').reply(200, {
			message: 'PUT success response'
		});
		httpRx.put('http://domain.com/test', defaultOptions).subscribe(data => {
			expect(data.response.statusCode).toBe(httpStatusCodes.OK);
			expect(data.body.message).toBe('PUT success response');
			done();
		});
	});
	it('should be able to handle an error in PUT request', done => {
		nock('http://domain.com').put('/test').reply(400, {
			message: 'PUT fail response'
		});
		httpRx.put('http://domain.com/test', defaultOptions).subscribe(null, error => {
			expect(error.response.statusCode).toBe(httpStatusCodes.BAD_REQUEST);
			expect(error.body.message).toBe('PUT fail response');
			done();
		});
	});
});
