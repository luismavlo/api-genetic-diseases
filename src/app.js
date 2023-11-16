//1. importar express
const express = require('express');

//2. crearnos una constante app que tendra
//todas las funcionalidades de express
const app = express();

app.use(express.json()); //permitir poder obtener el body en formato json
app.use(express.urlencoded({ extended: true })); //permitir poder obtener el body en formato url-encoded

//definicion de funciones
const findAll = (req, res) => {

  return res.status(200).json({
    message: 'method get - findAll'
  })
}

const create = (req, res) => {

  const disease = req.body;

  return res.status(201).json({
    message: 'method post - create',
    data: disease
  })
}

//3. definir el endpoint
//endpoint para buscar todas las enfermedades geneticas
app.get('/api/v1/genetic-diseases', findAll)

//endpoint para crear una enfermedad genetica
app.post('/api/v1/genetic-diseases', create)

//endpoint para buscar UNA enfermedad gentica
app.get('/api/v1/genetic-diseases/:id', (req, res) => {

  console.log(req.params)

  return res.status(200).json({
    message: 'method get - findOne',
    id: req.params.id
  })
})

//endpoint para actualizar UNA enfermedad genetica
app.patch('/api/v1/genetic-diseases/:id', (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    message: 'method patch - update',
    id,
  })
})

app.delete('/api/v1/genetic-diseases/:id', (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    message: 'method delete - delete',
    id
  })
})


//4.poner a escuchar el servidor por un puerto
app.listen(3000, () => {
  console.log("Server running on port: " + 3000)
})

//servidor local -> direccion ip de loopback
//127.0.0.1 -> localhost
//localhost:3000

