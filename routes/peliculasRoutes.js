const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

//router.post('/', peliculasController, getPeliculaById)
router.get('/:id?', peliculasController.getPeliculaById);
router.get('/film/:title', peliculasController.getPeliculaByTitle);
router.post('/film', peliculasController.createPelicula);
router.put('/film', peliculasController.updatePelicula);
router.delete('/film', peliculasController.deletePelicula);

module.exports = router;
