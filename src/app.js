
const express = require('express').Router()
const moviesRouter = require('./movies/movies.router')  //TODO -> export de router con variable

const app = express()




//?---> habilita recibir informacion en formato JSON.

app.use(express.json()) //TODO -> se usa como comodin la peticion tipo "use" y ser ejecutada de manera exitosa


//? HOST: localhost:9000 ---  recibe peticiones a la raiz de tipo "get" al 

app.get('/' , (req, res) => {
    res.status(200).json({
        message: 'Server ok!'
    })
})

// app.use('/', moviesRouter)

//? Escucha en el puerto 9000 y saber como se comunican. 

app.listen(9000, () => {
    console.log('Server started at: http://localhost:9000')

})