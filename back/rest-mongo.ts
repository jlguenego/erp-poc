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
      res.status(201).json(doc);
    } catch (err) {
      if (err.name === "StrictModeError") {
        return res.status(400).end();
      }
      console.error("err: ", err);
      res.status(500).end();
    }
  });

  // retrieve all
  app.get(`/${name}`, async (req, res) => {
    try {
      const results = await resource.find().exec();
      return res.json(results);
    } catch (err) {
      console.error("err: ", err);
      res.status(500).end();
    }
  });

  app.get(`/${name}/:id`, async (req, res) => {
    try {
      const result = await resource.findById(req.params.id).exec();
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

  app.put(`/${name}/:id`, async (req, res) => {
    try {
      const item = await resource.findById(req.params.id).exec();
      if (item === null) {
        return res.status(404).end();
      }
      await resource.replaceOne({ _id: req.params.id }, req.body).exec();
      res.status(204).end();
    } catch (err) {
      if (err.name === "CastError") {
        return res.status(400).end();
      }
      if (err.name === "StrictErrorMode") {
        return res.status(400).end();
      }
      console.error("err: ", err);
      res.status(500).end();
    }
  });

  app.patch(`/${name}/:id`, async (req, res) => {
    try {
      const result = await resource.findByIdAndUpdate(req.params.id, req.body).exec();
      if (result === null) {
        return res.status(404).end();
      }
      res.status(204).end();
    } catch (err) {
      if (err.name === "CastError") {
        return res.status(400).end();
      }
      console.error("err: ", err);
      res.status(500).end();
    }
  });

  app.patch(`/${name}`, async (req, res) => {
    try {
      await resource.updateMany({}, req.body).exec();
      res.status(204).end();
    } catch (err) {
      if (err.name === "StrictErrorMode") {
        return res.status(400).end();
      }
      console.error("err: ", err);
      res.status(500).end();
    }
  });

  app.delete(`/${name}`, async (req, res) => {
    try {
      await resource.deleteMany({}).exec();
      res.status(204).end();
    } catch (err) {
      console.error("err: ", err);
      res.status(500).end();
    }
  });

  app.delete(`/${name}/:id`, async (req, res) => {
    try {
      const result = await resource.findByIdAndDelete(req.params.id).exec();
      if (result === null) {
        return res.status(404).end();
      }
      res.status(204).end();
    } catch (err) {
      if (err.name === "CastError") {
        return res.status(400).end();
      }
      console.error("err: ", err);
      res.status(500).end();
    }
  });
}
