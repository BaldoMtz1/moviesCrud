
//? En este archivo van las rutas con sus respectivos verbos y servicios.

//TODO Importacion de : movies.services. 
const { getAllMovies, postNewMovie, getMovieById } = require("./movies.services");

const router = require('express').Router

router.get('/movies', getAllMovies)
router.post('/movies', postNewMovie)
router.get('/movies/:id', getMovieById)


//TODO asi se exporta por default 'router' y poderlo agregar a otros archivos, ejempo a "app.js"
module.exports = router



