const favoriteRouter = require('express').Router();
const { postFav } = require('../controllers/postFav') 
const { deleteFav } = require('../controllers/deleteFav') 

favoriteRouter.post('/', postFav);
favoriteRouter.delete('/:id', deleteFav);

module.exports = { favoriteRouter };