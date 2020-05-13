import express from "express";
import { exposeResource } from "./rest";
const app = express.Router();

app.use(express.json());

app.get("/date", (req, res) => res.json({ date: new Date() }));

exposeResource(app, "salarie", [
  {
    nom: "GUÉNÉGO",
    prenom: "Jean-Louis",
    date: "19740519-210500",
    permis: true,
    taux_horaire: 31.4,
    diplomes: [
      "BAC",
      "CADES",
      {
        libelle: "BTS",
        option: "Electronique",
      },
    ],
    adresse: {
      normal: "2 allee du commandant charcot 77200 TORCY",
      parent: "4 rue Lavoisier 54300 CHANTEHEUX",
    },
    id: 0,
  },
]);

exposeResource(app, "facture", []);
exposeResource(app, "engin", []);
exposeResource(app, "fournisseur", []);
exposeResource(app, "client", []);


export const ws = app;
