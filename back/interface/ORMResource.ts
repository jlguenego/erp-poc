import { Model, Sequelize } from "sequelize";

export interface ORMResource {
  modelClass: typeof Model;
  restName: string;
  init(sequelize: Sequelize): void;
}
