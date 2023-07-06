const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app  = require('../app')
const server = app.listen(8090, () => console.log('Testing on PORT 8090'))
const User = require('../models/todo')
let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true })
})

afterAll(async () => {
  await mongoose.connection.close()
  mongoServer.stop()
  server.close()
})

afterAll((done) => done())

describe('Test the users endpoints', () => {
  test('It should create a new todo', async () => {
    const response = await request(app)
      .post('/users')
      .send({ title: 'chores', completed: false, password: 'password123' })
    
    expect(response.statusCode).toBe(200)
    expect(response.body.user.name).toEqual('John Doe')
    expect(response.body.user.email).toEqual('john.doe@example.com')
    expect(response.body).toHaveProperty('token')
  })

  test('It should login a user', async () => {
    const user = new User({ title: 'chores', completed: false, password: 'password123' })
    await user.save()

    const response = await request(app)
      .post('/users/login')
      .send({ email: 'john.doe@example.com', password: 'password123' })
    
    expect(response.statusCode).toBe(200)
    expect(response.body.user.name).toEqual('John Doe')
    expect(response.body.user.email).toEqual('john.doe@example.com')
    expect(response.body).toHaveProperty('token')
  })

  test('It should update a todo', async () => {
    const user = new User({ title: 'chores', completed: false, password: 'password123' })
    await user.save()
    const token = await user.generateAuthToken()

    const response = await request(app)
      .put(`/users/${user._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'chores', completed: false })
    
    expect(response.statusCode).toBe(200)
    expect(response.body.name).toEqual('Jane Doe')
    expect(response.body.email).toEqual('jane.doe@example.com')
  })

  test('It should delete a todo', async () => {
    const user = new User({ title: 'chores', completed: false, password: 'password123' })
    await user.save()
    const token = await user.generateAuthToken()

    const response = await request(app)
      .delete(`/users/${user._id}`)
      .set('Authorization', `Bearer ${token}`)
    
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toEqual('Todo deleted')
  })
})