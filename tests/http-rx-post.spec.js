const nock = require('nock');
const httpRx = require('../index');
const httpStatusCodes = require('../lib/http-status-codes');
const defaultOptions = {
	json: true
};
describe('HttpRx, POST method ->', () => {
	it('should be able to successfully execute POST request', done => {
		nock('http://domain.com').post('/test').reply(200, {
			message: 'POST success response'
		});
		httpRx.post('http://domain.com/test', defaultOptions).subscribe(data => {
			expect(data.response.statusCode).toBe(httpStatusCodes.OK);
			expect(data.body.message).toBe('POST success response');
			done();
		});
	});
	it('should be able to handle an error in POST request', done => {
		nock('http://domain.com').post('/test').reply(400, {
			message: 'POST fail response'
		});
		httpRx.post('http://domain.com/test', defaultOptions).subscribe(null, error => {
			expect(error.response.statusCode).toBe(httpStatusCodes.BAD_REQUEST);
			expect(error.body.message).toBe('POST fail response');
			done();
		});
	});
});
