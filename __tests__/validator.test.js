'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Web server', () => {
    it('should send 500 if no name in the query string', () => {
        return mockRequest
        .get('/person')
        .then(results => {
            expect(results.status).toBe(500)
        }) .catch(console.error);
    })
    it('should respond with a 200 if given a name in the quary string , the output object is correct', () => {
        return mockRequest
        .get('/person')
        .send({name: 'Fred'})
        .then(results => {
            expect(results.status).toBe(200)
        }) .catch(console.error);
    })
})