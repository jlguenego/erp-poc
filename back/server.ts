import express from "express";
import serveIndex from "serve-index";
import mongoose from "mongoose";
import { ws } from "./ws";

const app = express();
const port = 3000;

app.use("/ws", ws);

app.use(express.static("www"));
app.use(serveIndex("www"));

async function main() {
  try {
    console.log("about to connect to mongo...");
    await mongoose.connect("mongodb://localhost:27017/erp-poc", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("connected to mongo.");
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  } catch (error) {
    console.log("error: ", error);
  }
}

main();
