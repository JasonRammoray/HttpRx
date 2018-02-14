const HTTP_METHODS = require('../lib/http-methods');
const checkHttpMethod = require('../lib/check-http-method');

describe('checkHttpMethod function ->', () => {
    HTTP_METHODS.forEach(method => {
        it(`should treat HTTP method "${method}" as a correct method`, done => {
            const result = checkHttpMethod(method);
            expect(result).toBe(true);
            done();
        });
    });

    it(`should be able to detect an incorrect http method`, done => {
        const result = checkHttpMethod('incorrect_method');
        expect(result).toBe(false);
        done();
    });
});
