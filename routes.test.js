const request = require('supertest');
const express = require('express');
const app = express();
app.use(express.json());
app.use('/bugs', require('../routes/bugs'));

describe('Bug Routes', () => {
  it('should create a bug', async () => {
    const res = await request(app).post('/bugs').send({ title: 'Test bug', description: 'test desc' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title');
  });
});