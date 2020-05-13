import { Router } from "express";

export function exposeResource(app: Router, name: string, records: any[] = []) {
  let lastid = records.length;
  app.post(`/${name}`, (req, res) => {
    console.log("req.body", req.body);
    req.body.id = lastid;
    lastid++;
    records.push(req.body);
    res.status(201).json(req.body);
  });

  app.get(`/${name}`, (req, res) => res.json(records));

  app.get(`/${name}/:id`, (req, res) => {
    const item = records.find((s) => s.id === +req.params.id);
    if (!item) {
      return res.status(404).end();
    }
    res.json(item);
  });

  app.put(`/${name}/:id`, (req, res) => {
    const item = req.body;
    item.id = +req.params.id;
    const index = records.findIndex((s) => s.id === +req.params.id);
    if (index === -1) {
      return res.status(404).end();
    }
    records.splice(index, 1, item);
    res.status(204).end();
  });

  app.patch(`/${name}/:id`, (req, res) => {
    const item = records.find((s) => s.id === +req.params.id);
    if (!item) {
      return res.status(404).end();
    }
    Object.keys(req.body).forEach((key) => (item[key] = req.body[key]));
    res.status(204).end();
  });

  app.patch(`/${name}`, (req, res) => {
    Object.keys(req.body).forEach((key) => {
      records.forEach((s) => (s[key] = req.body[key]));
    });
    res.status(204).end();
  });

  app.delete(`/${name}`, (req, res) => {
    records.length = 0;
    res.status(204).end();
  });

  app.delete(`/${name}/:id`, (req, res) => {
    const index = records.findIndex((s) => s.id === +req.params.id);
    if (index === -1) {
      return res.status(404).end();
    }
    records.splice(index, 1);
    res.status(204).end();
  });
}
