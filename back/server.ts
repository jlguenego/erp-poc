import express from "express";
import serveIndex from "serve-index";
import mongoose from "mongoose";
import { ws } from "./ws";
// import { Sequelize } from "sequelize";

async function main() {
  try {
    console.log("about to connect to mongo...");
    await mongoose.connect("mongodb://localhost:27017/erp-poc", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("connected to mongo.");

    // console.log("about to connect to postgres...");
    // const sequelize = new Sequelize("mydb", "postgres", "admin", {
    //   host: "localhost",
    //   port: 5432,
    //   dialect: "postgres",
    // });
    // await sequelize.authenticate();
    // console.log("connected to postgres.");
    const sequelize = undefined;

    const app = express();
    const port = 3000;
    const www = "../front/dist/front";
    // const www = "www";

    app.use("/ws", await ws(sequelize));
    // console.log("about to sync sequelize...");
    // await sequelize.sync({ force: false });
    // console.log("sync done...");

    app.use(express.static(www));
    app.use(serveIndex(www));
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  } catch (error) {
    console.log("error: ", error);
  }
}

main();
