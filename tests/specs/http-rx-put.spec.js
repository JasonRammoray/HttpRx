const httpRx = require('../index');
const httpStatusCodes = require('../lib/http-status-codes');
let defaultOptions = null;
describe('HttpRx, POST method ->', () => {
	let requestUrl = '';
	beforeEach(() => requestUrl = makeRequestUrl());
	beforeEach(() => defaultOptions = {
		headers: {
			'User-Agent': 'Http rx testing'
		},
		json: true
	});
	it('should be able to successfully execute POST request', done => {
		defaultOptions.headers.origin = 'https://google.com';
		httpRx.post(requestUrl, defaultOptions).subscribe(data => {
			expect(data.body.length).toBeTruthy();
			done();
		});
	});
	it('should be able to handle an error in POST request', done => {
		// A POST request without 'origin' header will trigger 403 status code
		httpRx.post(requestUrl, defaultOptions).subscribe(null, error => {
			expect(error.response.statusCode).toBe(httpStatusCodes.FORBIDDEN);
			done();
		});
	});

	function makeRequestUrl () {
		return 'https://ogs.google.com/u/0/_/notifications/count';
	}
});
