const GeneticDiseases = require('./genetic-diseases.model')

class GeneticDiseasesServices {

  static async findAll(){
    return await GeneticDiseases.findAll()
  }

  static async create(data){
    return await GeneticDiseases.create(data);
  }

}

module.exports = GeneticDiseasesServices