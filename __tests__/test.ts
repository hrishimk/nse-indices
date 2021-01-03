import { getIndex, getIndexList } from '../index'

test('Get index returns data', () => {
    return getIndex('NIFTY 50').then(data => {
        expect(typeof data).toBe('object');
        expect(data).toHaveProperty('data')
    });
});

test('Get index returns data for FnO', () => {
    return getIndex('SECURITIES IN F&O').then(data => {
        expect(typeof data).toBe('object');
        expect(data.name).toBe('SECURITIES IN F&O');
        expect(data).toHaveProperty('data')
    });
});

test('Get all indeces returns data', () => {
    return getIndexList().then(data => {
        expect(typeof data).toBe('object');
        expect(data).toHaveProperty('data')
    });
});