import { Request, Response } from "express";
import { movieModel } from "../models/MovieModel";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await movieModel.create(data);
    res.status(201).json(movie);
  } catch (error: any) {
    Logger.error(`Erro: ${error.message}`);
  }
}
