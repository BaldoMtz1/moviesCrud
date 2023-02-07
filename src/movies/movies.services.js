

//? Funciones que van a manejar 2 cosas. 1) relacionado con req y res 2)


//TODO Importacion de --> movies.controllers.
const { findAllMovies,createNewMovie, findMoviesById } = require("./movies.controllers")

// EJEMPLO DE IMPORTACION : 

// const movieControllers = require("./movies.controllers")
// movieControllers.createNewMovie , movieControllers.findAllMovies , movieControllers.findMoviesById

const getAllMovies = (req, res) => {
    findAllMovies()
      .then((data) => {
        res.status(200).json(data)

      })
      .catch((error) => {
        res.status(400).json(error)

      })

} 

const getMovieById = (req, res) => {
    const id = Number(req.params.id)

    findMoviesById(id)
      .then(data => {
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({
                message: 'Invalid ID'
            })
        }
      })
      .catch((error) => {
        res.status(400).json(error)

      })

}
 
const postNewMovie = (req, res) => {
    const movieObj = req.body 

    createNewMovie(movieObj)
      .then(data => {
        res.status(201).json(data)

      })
      .catch(err => {
        res.status(400).json(err)

      })

}


module.exports = {
    postNewMovie,
    getAllMovies,
    getMovieById
}
