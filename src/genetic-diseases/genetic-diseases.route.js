const express = require('express');

//controllers
const geneticController = require('./genetic-diseases.controller')

const router = express.Router();

router.get('/genetic-diseases', geneticController.findAll)

router.post('/genetic-diseases', geneticController.create)

router.get('/genetic-diseases/:id', geneticController.findOne)

router.patch('/genetic-diseases/:id', geneticController.update)

router.delete('/genetic-diseases/:id', geneticController.deleteGeneticDiseases)


module.exports = router;
