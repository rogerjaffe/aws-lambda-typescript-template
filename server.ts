// @ts-nocheck
import express from "express";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
import { handler } from "./src/index";

const port = 5000;
const app = express();

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLiveReload());

app.get("/", async (req, res) => {
  res.send(await handler());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
