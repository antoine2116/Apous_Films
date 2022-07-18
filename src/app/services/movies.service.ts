import {Injectable} from "@angular/core";
import {TMBDService} from "./tmdb.service";
import {Movie} from "../models/movie.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MoviesService {

  constructor(private TMBDService: TMBDService) {
  }

  getPopularMovies() {
    return this.TMBDService.get("/movie/popular");
  }
}
