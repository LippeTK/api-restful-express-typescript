import { Request, Response } from "express";
import { movieModel } from "../models/MovieModel";
import Logger from "../../config/logger";
import { ModifiedPathsSnapshot } from "mongoose";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await movieModel.create(data);
    res.status(201).json(movie);
  } catch (error: any) {
    Logger.error(`Erro: ${error.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde" });
  }
}

export async function getMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await movieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ error: "O filme não existe!" });
    }
    return res.status(200).json(movie);
  } catch (error: any) {
    Logger.error(`Erro: ${error.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde" });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await movieModel.find();
    return res.status(200).json(movies);
  } catch (error: any) {
    Logger.error(`Erro: ${error.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde" });
  }
}

export async function removeMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await movieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ error: "O filme não existe!" });
    }
    await movie.deleteOne();
    return res.status(200).json({ msg: "Filme removido com sucesso" });
  } catch (error: any) {
    Logger.error(`Erro: ${error.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde" });
  }
}
