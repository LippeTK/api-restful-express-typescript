import config from "config";
import mongoose from "mongoose";

async function connect() {
  const dbUri = config.get<string>("dbURI");

  try {
    await mongoose.connect(dbUri);
    console.log("Conectou ao banco de dados!");
  } catch (e) {
    console.log("Não foi possível conectar ao banco");
    console.log(e);
  }
}

export default connect;
