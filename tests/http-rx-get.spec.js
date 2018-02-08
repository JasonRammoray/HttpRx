const httpRx = require('../index');
const httpStatusCodes = require('../lib/http-status-codes');
const defaultOptions = {
	headers: {
		'User-Agent': 'Http rx testing'
	},
	json: true
};
describe('HttpRx, GET method ->', () => {
	let requestUrl = '';
	beforeEach(() => requestUrl = makeRequestUrl());
	it('should be able to successfully execute GET request', done => {
		httpRx.get(requestUrl, defaultOptions).subscribe(data => {
			expect(data.body.login).toBe('JasonRammoray');
			done();
		});
	});
	it('should be able to handle an error in GET request', done => {
		httpRx.get(`${requestUrl}${Math.random()}`, defaultOptions).subscribe(null, error => {
			expect(error.response.statusCode).toBe(httpStatusCodes.NOT_FOUND);
			done();
		});
	});
	function makeRequestUrl(userName = 'jasonrammoray') {
		return `https://api.github.com/users/${userName}`;
	}
});
