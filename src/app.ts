require("dotenv").config();

import config from "config";
import express from "express";
import router from "./router";
import db from "../config/db";

import Logger from "../config/logger";
const app = express();
const port = config.get<number>("port");

//middleware json
app.use(express.json());

//routes
app.use("/api/", router);

app.listen(port, async () => {
  await db();
  Logger.info(`Rodando na porta ${port}`);
});
