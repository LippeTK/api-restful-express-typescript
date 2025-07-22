require("dotenv").config();

import config from "config";
import express from "express";
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddleware";

const app = express();
const port = config.get<number>("port");

//middlewares
app.use(morganMiddleware);
app.use(express.json());
app.use("/api/", router);

app.listen(port, async () => {
  await db();
  Logger.info(`Rodando na porta ${port}`);
});
