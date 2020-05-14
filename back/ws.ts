import express from "express";
import { exposeResource } from "./rest";
const app = express.Router();

app.use(express.json());

app.get("/date", (req, res) => res.json({ date: new Date() }));

["salarie", "facture", "engin"].forEach(name => exposeResource(app, name));

export const ws = app;
