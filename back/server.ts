import express from "express";
import serveIndex from "serve-index";
import { ws } from "./ws";

const app = express();
const port = 3000;

app.use("/ws", ws);

app.use(express.static("www"));
app.use(serveIndex("www"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
