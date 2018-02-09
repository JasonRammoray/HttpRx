const nock = require('nock');
const httpRx = require('../../index');
const httpStatusCodes = require('../../lib/http-status-codes');
const defaultOptions = {
	json: true
};
describe('HttpRx, DELETE method ->', () => {
	it('should be able to successfully execute DELETE request', done => {
		nock('http://domain.com').delete('/test').reply(200, {
			message: 'DELETE success response'
		});
		httpRx.delete('http://domain.com/test', defaultOptions).subscribe(data => {
			expect(data.response.statusCode).toBe(httpStatusCodes.OK);
			expect(data.body.message).toBe('DELETE success response');
			done();
		});
	});
	it('should be able to handle an error in DELETE request', done => {
		nock('http://domain.com').delete('/test').reply(400, {
			message: 'DELETE fail response'
		});
		httpRx.delete('http://domain.com/test', defaultOptions).subscribe(null, error => {
			expect(error.response.statusCode).toBe(httpStatusCodes.BAD_REQUEST);
			expect(error.body.message).toBe('DELETE fail response');
			done();
		});
	});
});
