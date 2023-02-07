

//? Este archivo tendra funiones que hagan acciones a la base de datos y "retornar promesas"

const moviesDB = []
let baseId = 1

const findAllMovies = async () => {
    return await moviesDB

}

const findMoviesById = async (id) => {
    const filterMovie = await moviesDB.find(movie => movie.id === id)
    return filterMovie

}

const createNewMovie = async (movieObj) => {
    const newMovie = {
        id: baseId++,
        title: movieObj.title,
        synopsis: movieObj.synopsis,
        director: movieObj.director,
        year: movieObj.year

    }

    await moviesDB.push(newMovie)

    return newMovie

}

module.exports = {
    findAllMovies,
    findMoviesById,
    createNewMovie

}
