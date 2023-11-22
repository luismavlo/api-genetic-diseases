const GeneticDiseasesServices = require("./genetic-diseases.service");


//definicion de funciones
exports.findAll = async(req, res) => {
  try {
    const { requestTime } = req;
  
    const geneticDiseases = await GeneticDiseasesServices.findAll()

    return res.status(200).json({
      requestTime,
      geneticDiseases
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
      error
    })
  }
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

exports.findOne = async (req, res) => {
  const { requestTime } = req;
  const { id } = req.params;

  const geneticDisease = await GeneticDiseasesServices.findOne(id)

  if(!geneticDisease){
    return res.status(404).json({
      status: 'error',
      message: `Genetic Disease with id: ${ id } not found`
    })
  }

  return res.status(200).json({
    requestTime,
    geneticDisease
  })
}

exports.update = async(req, res) => {
  try {
    const { requestTime } = req;
    const { id } = req.params;
    const { name, description } = req.body;

    const geneticDisease = await GeneticDiseasesServices.findOne(id)

    if(!geneticDisease){
      return res.status(404).json({
        status: 'error',
        message: `Genetic Disease with id: ${ id } not found`
      })
    }

    const geneticDiseaseUpdated = await GeneticDiseasesServices.update(geneticDisease, {
      name,
      description
    })

    return res.status(200).json({
      requestTime,
      geneticDiseaseUpdated
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
      error
    })
  }
}

exports.deleteGeneticDiseases = async(req, res) => {
  const { id } = req.params;

  const geneticDisease = await GeneticDiseasesServices.findOne(id)

  if(!geneticDisease){
    return res.status(404).json({
      status: 'error',
      message: `Genetic Disease with id: ${ id } not found`
    })
  }

  await GeneticDiseasesServices.delete(geneticDisease)

  return res.status(204).json(null)
}

