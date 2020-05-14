import mongoose, { Schema } from "mongoose";

export const Salarie = mongoose.model(
  "Salarie",
  new Schema({
    nom: String,
    prenom: String,
  })
);
