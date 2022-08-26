import { PathMoviesController } from '../modules/movies/useCases/movies/pathMovies/PathMoviesController';
import { GetIdMoviesController } from '../modules/movies/useCases/movies/getIdMoviesUseCase/GetIdMoviesController';
import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/movies/createMovie/CreateMovieController";
import { GetMoviesByReleaseDateController } from "../modules/movies/useCases/movies/getMoviesByReleaseDate/GetMoviesByReleaseDateController";
import { CreateMovieRentController } from '../modules/movies/useCases/moviesRent/createMovieRent/CreateMovieRentController';
import { DeleteMoviesController } from '../modules/movies/useCases/movies/deleteMovie/DeleteMoviesController';

const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();
const createMovieRentController = new CreateMovieRentController();
const getIdMoviesController = new GetIdMoviesController();
const patchMoviesController = new PathMoviesController();
const deleteMoviesController = new DeleteMoviesController();
const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);
movieRoutes.get("/id", getIdMoviesController.handle);
movieRoutes.patch("/", patchMoviesController.handle);
movieRoutes.post("/", patchMoviesController.handle);
movieRoutes.delete("/", deleteMoviesController.handle);
export { movieRoutes };
