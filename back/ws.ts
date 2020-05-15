import express from "express";
import { exposeResource } from "./rest";
import "./rest-mongo";
import { exposeMongoResource } from "./rest-mongo";
import { Salarie } from "./model/Salarie";
import { Sequelize } from "sequelize/types";
import { chantier } from "./model-sequelize/Chantier";
import { exposeSequelizeResource } from "./rest-sequelize";

export const ws = async function (sequelize: Sequelize) {
  const app = express.Router();

  app.use(express.json());

  app.get("/date", (req, res) => res.json({ date: new Date() }));

  ["facture", "engin"].forEach((name) => exposeResource(app, name));

  exposeMongoResource(app, Salarie);

  exposeSequelizeResource(sequelize, app, chantier);

  return app;
};
