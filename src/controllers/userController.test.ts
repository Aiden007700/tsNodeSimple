import supertest from "supertest";
import { setTimeout } from "timers/promises";
import app from "../app";

const request = supertest(app);

setTimeout(10000);

it('makes a GET request to /users', async () => {
    const response = await request.get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
})

it('makes a GET request to /users', async () => {
    const response = await request.get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
})

it('makes a POST request to /users', async () => {
    const response = await request.post('/users').send({
        name: 'test'
    });
    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.name).toEqual('test');
})

it('makes a GET request to /users/1', async () => {
    const response = await request.get('/users/1');
    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.name).toEqual('test');
})

it('makes a PUT request to /users/1', async () => {
    const response = await request.put('/users/1').send({
        name: 'test2'
    });
    expect(response.status).toBe(200);
})

it('makes a GET request to /users/1 with new name', async () => {
    const response = await request.get('/users/1');
    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.name).toEqual('test2');
})

it('makes a DELETE request to /users/1', async () => {
    const response = await request.delete('/users/1');
    expect(response.status).toBe(200);
})

it('makes a GET request to /users', async () => {
    const response = await request.get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
})