import { Router, Request, Response } from "express";
import {
  createMovie,
  getMovieById,
  getAllMovies,
} from "./controllers/MovieController";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";
const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("Api Funcionando!");
  })
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", getMovieById)
  .get("/movie", getAllMovies);
