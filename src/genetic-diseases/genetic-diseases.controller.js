const GeneticDiseasesServices = require("./genetic-diseases.service");


//definicion de funciones
exports.findAll = async(req, res) => {
  const { requestTime } = req;
  
  const geneticDiseases = await GeneticDiseasesServices.findAll()

  return res.status(200).json({
    requestTime,
    geneticDiseases
  })
}

exports.create = async(req, res) => {
  const { requestTime } = req;
  const { name, description, mortalityRate, treatment, symptoms } = req.body;

  const geneticDiseases = await GeneticDiseasesServices.create({ 
    name, 
    description, 
    mortalityRate, 
    treatment, 
    symptoms 
  })

  return res.status(201).json({
    requestTime,
    data: geneticDiseases
  })
}

exports.findOne = (req, res) => {
  const { requestTime } = req;
  console.log(req.params)

  return res.status(200).json({
    message: 'method get - findOne',
    id: req.params.id,
    requestTime
  })
}

exports.update = (req, res) => {
  const { requestTime, saludo2 } = req;
  const { id } = req.params;

  return res.status(200).json({
    message: 'method patch - update',
    id,
    requestTime,
    saludo2
  })
}

exports.deleteGeneticDiseases = (req, res) => {
  const { requestTime, saludo2 } = req;
  const { id } = req.params;

  return res.status(200).json({
    message: 'method delete - delete',
    id,
    requestTime,
    saludo2
  })
}

