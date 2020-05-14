import express from "express";
import { exposeResource } from "./rest";
import "./rest-mongo";
import { exposeMongoResource } from "./rest-mongo";
import { Salarie } from "./model/Salarie";
const app = express.Router();

app.use(express.json());

app.get("/date", (req, res) => res.json({ date: new Date() }));

["facture", "engin"].forEach((name) => exposeResource(app, name));

exposeMongoResource(app, Salarie);

export const ws = app;
