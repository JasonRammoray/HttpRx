const nock = require('nock');
const request = require('request');
const genericRequest = require('../lib/generic-request');
describe('HttpRx, generic request ->', () => {
  afterEach(() => nock.cleanAll());
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
    const methodName = 'get';
    const url = 'https://google.com';
    nock.disableNetConnect(url);
    genericRequest(methodName, url).subscribe(null, err => {
      expect(err.message).toBe('Nock: Disallowed net connect for \"google.com:443/\"');
      done();
    });
    nock.enableNetConnect(url);
  });
  it('should cancel ongoing request, when unsubscribing from observable', done => {
    const url = 'https://api.website.com';
    nock(url)
        .get('/')
        .delay(2000)
        .reply(200, {
          message: 'ok'
        });
    const spy = jest.spyOn(request.Request.prototype, 'abort');
    const subscription = genericRequest('get', url, {}).subscribe(null, null);

    /*
     * In real world scenario request cancelling happens
     * after some time, hence adding a delay to emulate
     * that.
     */
    setTimeout(() => {
      subscription.unsubscribe();
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
      done();
    }, 20);
  });
});
