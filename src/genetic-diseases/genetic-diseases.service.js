const GeneticDiseases = require("./genetic-diseases.model");

class GeneticDiseasesServices {
  static async findAll(specie) {
    let whereCondition = {
      status: "active",
    };

    if (specie) {
      whereCondition = {
        status: "active",
        specie: specie,
      };
    }

    return await GeneticDiseases.findAll({
      where: whereCondition,
      attributes: ["name"],
    });
  }

  static async create(data) {
    return await GeneticDiseases.create(data);
  }
  // id = 2
  static async findOne(id) {
    return await GeneticDiseases.findOne({
      where: {
        id: id,
        status: "active",
      },
    });
  }

  static async update(geneticDisease, data) {
    return await geneticDisease.update(data);
  }

  static async delete(geneticDisease) {
    return await geneticDisease.update({
      status: "inactive",
    });
  }
}

module.exports = GeneticDiseasesServices;
