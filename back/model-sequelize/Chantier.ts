import { Model, Sequelize, DataTypes } from "sequelize";
import { ORMResource } from "../interface/ORMResource";

class Chantier extends Model {}

export const chantier: ORMResource = {
  modelClass: Chantier,
  restName: "chantier",
  init: function (sequelize: Sequelize) {
    Chantier.init(
      {
        libelle: DataTypes.STRING,
        date_demarrage: DataTypes.STRING,
      },
      { sequelize, tableName: "chantier" }
    );
  },
};
