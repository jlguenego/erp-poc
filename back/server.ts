import express from "express";
import serveIndex from "serve-index";

const app = express();
let port = 3000;
app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});



app.get("/now", (req, res) => {
  res.json({ date: new Date() });
});

app.use(express.static("www"));
app.use(serveIndex("www"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
