import { Model, Sequelize, BuildOptions } from "sequelize";

export interface ORMResource {
  modelClass: typeof Model & {
    new (values?: object, options?: BuildOptions): Model;
  };
  restName: string;
  init(sequelize: Sequelize): void;
}
