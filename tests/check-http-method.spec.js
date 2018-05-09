const HTTP_METHODS = require('../lib/http-methods');
const checkHttpMethod = require('../lib/check-http-method');

describe('checkHttpMethod function ->', () => {
    HTTP_METHODS.forEach(method => {
        it(`should treat HTTP method "${method}" as a correct method`, () => {
            const result = checkHttpMethod(method);
            expect(result).toBe(true);
        });
    });

    it('should be able to detect an incorrect http method', () => {
        const result = checkHttpMethod('incorrect_method');
        expect(result).toBe(false);
    });

    HTTP_METHODS.forEach(method => {
        it(`should treat an uppercase version of "${method}" method as an incorrect method`, () => {
            const result = checkHttpMethod(method.toUpperCase());
            expect(result).toBe(false);
        });
    });
});
