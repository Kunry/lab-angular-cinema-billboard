import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MoviesService]
})
export class MyHomeComponentComponent implements OnInit {
  movies:Object[] = [];

  constructor(private moviess : MoviesService) { }

  ngOnInit() {
    this.movies = this.moviess.getMovies();
  }

}
