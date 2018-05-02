import { Injectable } from "@angular/core";
 //import { moviesList } from "../sample-movies"

interface Movie {
  id: Number;
  title: String;
  poster: String;
  synopsis: String;
  genres: Array<String>;
  year: Number;
  director: String;
  actors: Array<String>;
  // hours: string[];
  // room: number;
}

@Injectable()
export class MoviesService {
  
  movies:Movie[];

  constructor() {
  //   this.movies = moviesList;
  }


  getMovies(){
    return this.movies;
  }
  getMovie(id){
    return this.movies.filter(e => e.id === id );
  }
}
