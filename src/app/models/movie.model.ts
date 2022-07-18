export class Movie {
  id!: number;
  title!: string;
  overview!: string;
  release_date!: Date;
  poster_path!: string

  constructor(movie: any) {
    this.id = movie.id;
    this.title = movie.title;
    this.overview = movie.overview;
    this.release_date = new Date(movie.release_date);
    this.poster_path = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
  }
}
