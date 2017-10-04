import { greet } from './greet';

describe('greet', () => {
    it('should include the name in message', () => {
        expect(greet('sharma')).toContain('sharma');
    })
})