const HTTP_METHODS = require('../lib/http-methods');
const checkHttpMethod = require('../lib/check-http-method');

describe('checkHttpMethod function ->', () => {
    HTTP_METHODS.forEach(method => {
        it(`should checked as true for "${method}" method`, done => {
            const result = checkHttpMethod(method);
            expect(result).toBe(true);
            done();
        });
    });

    [null, undefined, NaN, 'wrong_method', 42].forEach(method => {
        it(`should checked as false for incorrect "${method}" method`, done => {
            const result = checkHttpMethod(method);
            expect(result).toBe(false);
            done();
        });
    });
});
