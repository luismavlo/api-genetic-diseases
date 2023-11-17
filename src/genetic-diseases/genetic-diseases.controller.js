

//definicion de funciones
exports.findAll = (req, res) => {
  const { requestTime } = req;
  

  return res.status(200).json({
    message: 'method get - findAll',
    requestTime
  })
}

exports.create = (req, res) => {
  const { requestTime } = req;
  const disease = req.body;

  return res.status(201).json({
    message: 'method post - create',
    data: disease,
    requestTime
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
  const { requestTime } = req;
  const { id } = req.params;

  return res.status(200).json({
    message: 'method patch - update',
    id,
    requestTime
  })
}

exports.deleteGeneticDiseases = (req, res) => {
  const { requestTime } = req;
  const { id } = req.params;

  return res.status(200).json({
    message: 'method delete - delete',
    id,
    requestTime
  })
}

