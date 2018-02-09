const nock = require('nock');
const httpRx = require('../index');
const httpStatusCodes = require('../lib/http-status-codes');
const defaultOptions = {
	json: true
};
describe('HttpRx, GET method ->', () => {
	it('should be able to successfully execute GET request', done => {
		nock('http://domain.com').get('/test').reply(200, {
			message: 'GET success response'
		});
		httpRx.get('http://domain.com/test', defaultOptions).subscribe(data => {
			expect(data.response.statusCode).toBe(httpStatusCodes.OK);
			expect(data.body.message).toBe('GET success response');
			done();
		});
	});
	it('should be able to handle an error in GET request', done => {
		nock('http://domain.com').get('/test').reply(400, {
			message: 'GET fail response'
		});
		httpRx.get('http://domain.com/test', defaultOptions).subscribe(null, error => {
			expect(error.response.statusCode).toBe(httpStatusCodes.BAD_REQUEST);
			expect(error.body.message).toBe('GET fail response');
			done();
		});
	});
});
