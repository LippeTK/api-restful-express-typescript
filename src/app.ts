import config from "config";
import express from "express";
import router from "./router";

const app = express();
const port = config.get<number>("port");

//middleware json
app.use(express.json());

//routes
app.use("/api/", router);

app.listen(port, async () => {
  console.log(`Rodando na porta ${port}`);
});
