import { Router } from "express";
import mongoose, { Schema, Model, Document } from "mongoose";

export function exposeMongoResource(
  app: Router,
  resource: Model<Document, {}>
) {
  const name = resource.modelName.toLowerCase();
  app.post(`/${name}`, async (req, res) => {
    try {
      console.log("req.body", req.body);
      const instance = new resource(req.body);
      const doc = await instance.save();
      res.status(201).json(req.body);
    } catch (err) {
      res.status(500).end();
    }
  });

  //   app.get(`/${name}`, (req, res) => res.json(records));

  //   app.get(`/${name}/:id`, (req, res) => {
  //     const item = records.find((s) => s.id === +req.params.id);
  //     if (!item) {
  //       return res.status(404).end();
  //     }
  //     res.json(item);
  //   });

  //   app.put(`/${name}/:id`, (req, res) => {
  //     const item = req.body;
  //     item.id = +req.params.id;
  //     const index = records.findIndex((s) => s.id === +req.params.id);
  //     if (index === -1) {
  //       return res.status(404).end();
  //     }
  //     records.splice(index, 1, item);
  //     res.status(204).end();
  //   });

  //   app.patch(`/${name}/:id`, (req, res) => {
  //     const item = records.find((s) => s.id === +req.params.id);
  //     if (!item) {
  //       return res.status(404).end();
  //     }
  //     Object.keys(req.body).forEach((key) => (item[key] = req.body[key]));
  //     res.status(204).end();
  //   });

  //   app.patch(`/${name}`, (req, res) => {
  //     Object.keys(req.body).forEach((key) => {
  //       records.forEach((s) => (s[key] = req.body[key]));
  //     });
  //     res.status(204).end();
  //   });

  //   app.delete(`/${name}`, (req, res) => {
  //     records.length = 0;
  //     res.status(204).end();
  //   });

  //   app.delete(`/${name}/:id`, (req, res) => {
  //     const index = records.findIndex((s) => s.id === +req.params.id);
  //     if (index === -1) {
  //       return res.status(404).end();
  //     }
  //     records.splice(index, 1);
  //     res.status(204).end();
  //   });
}
