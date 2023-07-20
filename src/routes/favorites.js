const favoriteRouter = require('express').Router();
const { postFav, deleteFav } = require('../controllers/handleFavorites');

favoriteRouter.post('/', postFav);
favoriteRouter.delete('/:id', deleteFav);

module.exports = { favoriteRouter };