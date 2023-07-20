const express = require('express');
const { characterRouter } = require('./routes/characters');
const { userRouter } = require('./routes/user');
const { favoriteRouter } = require('./routes/favorites');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());
server.use('/characters', characterRouter);
server.use('/user', userRouter);
server.use('/favorites', favoriteRouter);

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

module.exports = { server };