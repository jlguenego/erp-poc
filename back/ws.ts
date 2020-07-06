import express from "express";
import { exposeResource } from "./rest";
import "./rest-mongo";
import { exposeMongoResource } from "./rest-mongo";
import { Salarie } from "./model/Salarie";
import { Sequelize } from "sequelize/types";
// import { chantier } from "./model-sequelize/Chantier";
// import { exposeSequelizeResource } from "./rest-sequelize";
import cors from "cors";

export const ws = async function (sequelize: Sequelize) {
  const app = express.Router();

  app.use(express.json());
  app.use(cors());

  app.use((req, res, next) => setTimeout(next, 2000));

  app.get("/date", (req, res) => res.json({ date: new Date() }));
  app.get("/salt", (req, res) => res.json({ salt: 'mon super salt 123#' }));

  ["facture", "engin"].forEach((name) => exposeResource(app, name));

  const chantiers = [
    { id: 0, code: "qwer", label: "toto titi", status: "En cours" },
    { id: 1, code: "asdf", label: "toto titi", status: "En cours" },
    { id: 2, code: "zxcv", label: "toto titi", status: "En cours" },
    { id: 3, code: "1234", label: "toto titi", status: "En cours" },
  ];
  exposeResource(app, "chantier", chantiers);

  exposeMongoResource(app, Salarie);

  // exposeSequelizeResource(sequelize, app, chantier);

  return app;
};
