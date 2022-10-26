import { Router } from "express";
import { saveMoviesAtDatabase, getMoviesFromDatabase } from "./controller";
const router = Router();

router.get("/save-movies", saveMoviesAtDatabase);
router.get("/getMovies", getMoviesFromDatabase);

export default router;
