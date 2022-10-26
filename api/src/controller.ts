import { Request, Response } from "express";
import axios from "axios";

const saveMoviesAtDatabase = async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    console.log(response.data.length);
    console.log(response.data[0]);
    return res.status(200).send(response.data);
  } catch {
    return res.status(500).send("Error trying get movies at ghibliapi");
  }
};

const getMoviesFromDatabase = async (req: Request, res: Response) => {
  try {
    console.log("getMoviesFromDatabase");
    return res.status(200).send("getMoviesFromDatabase");
  } catch {
    return res.status(500).send("Error trying get movies from database");
  }
};

export { saveMoviesAtDatabase, getMoviesFromDatabase };
