import { Router } from "express";
import mongoose, { Schema, Model, Document } from "mongoose";

export function exposeMongoResource(
  app: Router,
  resource: Model<Document, {}>
) {
  const name = resource.modelName.toLowerCase();

  // add a record
  app.post(`/${name}`, async (req, res) => {
    try {
      console.log("req.body", req.body);
      const instance = new resource(req.body);
      const doc = await instance.save();
      res.status(201).json(req.body);
    } catch (err) {
      console.error("err: ", err);
      res.status(500).end();
    }
  });

  // retrieve all
  app.get(`/${name}`, async (req, res) => {
    try {
      const results = await resource.find();
      return res.json(results);
    } catch (err) {
      console.error("err: ", err);
      res.status(500).end();
    }
  });

  app.get(`/${name}/:id`, async (req, res) => {
    try {
      const result = await resource.findById(req.params.id);
      if (result === null) {
        return res.status(404).end();
      }
      return res.json(result);
    } catch (err) {
      if (err.name === "CastError") {
        return res.status(400).end();
      }
      console.error("err: ", err);
      res.status(500).end();
    }
  });

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
