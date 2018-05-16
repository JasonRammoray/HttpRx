const nock = require('nock');
const genericRequest = require('../lib/generic-request');
describe('HttpRx, generic request ->', () => {
    it('should throw an error observable, when calling it with non-existing HTTP method', done => {
        const methodName = 'WHATEVER-METHOD';
        const url = 'https://whatever.domain';
        const options = {};
        genericRequest(methodName, url, options).subscribe(null, err => {
            expect(err.message).toBe(`httpRx client was given an invalid method name for http request: ${methodName}`);
            done();
        });
    });
    it('should throw an error observable, when there was an error with request', done => {
        const url = 'https://google.com';
        nock.disableNetConnect(url);
        genericRequest('get', 'https://google.com').subscribe(null, err => {
            expect(err.message).toBe('Nock: Not allow net connect for \"google.com:443/\"');
            done();
        });
        nock.enableNetConnect(url);
    });
});
