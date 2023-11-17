const express = require('express');

//controllers
const geneticController = require('./genetic-diseases.controller')

//TODO: saludo 1 se debe ejecutar solo para la ruta del findAll y en ese controlador se debera
//traer el saludo y enviarlo por la respuesta
const saludo1 = (req ,res ,next) => {
   const saludo1 = "hola soy el saludo 1"

   req.saludo1 = saludo1;
   next();
}
//TODO: saludo 2 se debe ejecutar solo para la ruta patch y delete y en ese controlador se debera
//traer el saludo y enviarlo por la respuesta
const saludo2 = (req,res,next) => {
  const saludo1 = "hola soy el saludo 1"

  req.saludo1 = saludo1;
  next();
}

const router = express.Router();

//3. definir el endpoint
//endpoint para buscar todas las enfermedades geneticas
router.get('/genetic-diseases', geneticController.findAll)

//endpoint para crear una enfermedad genetica
router.post('/genetic-diseases', geneticController.create)

//endpoint para buscar UNA enfermedad gentica
router.get('/genetic-diseases/:id', geneticController.findOne)

//endpoint para actualizar UNA enfermedad genetica
router.patch('/genetic-diseases/:id', geneticController.update)

router.delete('/genetic-diseases/:id', geneticController.deleteGeneticDiseases)


module.exports = router;
