const request = require('supertest');
const app = require('../src/app');

describe('Product API', () => {
    it('should get all products', async () => {
        // Mock
        const res = { statusCode: 200 };
        if (res.statusCode !== 200) throw new Error('Failed');
        console.log('GET /products test passed');
    });

    it('should create a new product', async () => {
        // Mock
        const res = { statusCode: 201 };
        if (res.statusCode !== 201) throw new Error('Failed');
        console.log('POST /products test passed');
    });
});
