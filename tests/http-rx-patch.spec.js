const nock = require('nock');
const httpRx = require('../index');
const httpStatusCodes = require('../lib/http-status-codes');
const defaultOptions = {
	json: true
};
describe('HttpRx, PATCH method ->', () => {
	it('should be able to successfully execute PATCH request', done => {
		nock('http://domain.com').patch('/test').reply(200, {
			message: 'PATCH success response'
		});
		httpRx.patch('http://domain.com/test', defaultOptions).subscribe(data => {
			expect(data.response.statusCode).toBe(httpStatusCodes.OK);
			expect(data.body.message).toBe('PATCH success response');
			done();
		});
	});
	it('should be able to handle an error in PATCH request', done => {
		nock('http://domain.com').patch('/test').reply(400, {
			message: 'PATCH fail response'
		});
		httpRx.patch('http://domain.com/test', defaultOptions).subscribe(null, error => {
			expect(error.response.statusCode).toBe(httpStatusCodes.BAD_REQUEST);
			expect(error.body.message).toBe('PATCH fail response');
			done();
		});
	});
});
