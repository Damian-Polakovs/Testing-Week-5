import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('should return the supported currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('GBP');
        expect(result).toContain('EUR');
    });

    it('should not contain CAD', () => {
        const result = getCurrencies();
        expect(result).not.toContain('CAD');
    });
});
