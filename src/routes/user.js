const userRouter = require('express').Router();
const { login } = require('../controllers/login');
const { postUser } = require('../controllers/postUser');

userRouter.get('/login', login);
userRouter.post('/login', postUser);

module.exports = { userRouter };