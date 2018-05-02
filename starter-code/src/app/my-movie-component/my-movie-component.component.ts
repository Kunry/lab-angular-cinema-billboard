import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [MoviesService]
  
})
export class MyMovieComponentComponent implements OnInit {

  movie:Object = {}

  constructor(private route: ActivatedRoute, private moviess : MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.movie = this.moviess.getMovie(params["id"])) //Nota, params[id]
  }

}
