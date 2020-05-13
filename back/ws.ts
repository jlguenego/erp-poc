import express from "express";
const app = express.Router();

app.use(express.json());

app.get("/date", (req, res) => res.json({ date: new Date() }));

const salaries = [
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
];

let lastid = 1;
app.post("/salarie", (req, res) => {
  console.log("req.body", req.body);
  req.body.id = lastid;
  lastid++;
  salaries.push(req.body);
  res.status(201).json(req.body);
});

app.get("/salarie", (req, res) => res.json(salaries));

app.get("/salarie/:id", (req, res) => {
  const salarie = salaries.find((s) => s.id === +req.params.id);
  if (!salarie) {
    return res.status(404).end();
  }
  res.json(salarie);
});

app.put("/salarie/:id", (req, res) => {
  const salarie = req.body;
  salarie.id = +req.params.id;
  const index = salaries.findIndex((s) => s.id === +req.params.id);
  if (index === -1) {
    return res.status(404).end();
  }
  salaries.splice(index, 1, salarie);
  res.status(204).end();
});

app.patch("/salarie/:id", (req, res) => {
  const salarie = salaries.find((s) => s.id === +req.params.id);
  if (!salarie) {
    return res.status(404).end();
  }
  Object.keys(req.body).forEach((key) => (salarie[key] = req.body[key]));
  res.status(204).end();
});

app.patch("/salarie", (req, res) => {
  Object.keys(req.body).forEach((key) => {
    salaries.forEach((s) => (s[key] = req.body[key]));
  });
  res.status(204).end();
});

app.delete("/salarie", (req, res) => {
  salaries.length = 0;
  res.status(204).end();
});

app.delete("/salarie/:id", (req, res) => {
  const index = salaries.findIndex((s) => s.id === +req.params.id);
  if (index === -1) {
    return res.status(404).end();
  }
  salaries.splice(index, 1);
  res.status(204).end();
});

export const ws = app;
