import config from "config";
import mongoose from "mongoose";
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbURI");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco de dados!");
  } catch (e) {
    Logger.error("Não foi possível conectar ao banco");
    Logger.error(e);
  }
}

export default connect;
