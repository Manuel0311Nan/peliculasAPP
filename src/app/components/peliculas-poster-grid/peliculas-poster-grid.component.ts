import { Movie } from './../../interfaces/carteleraResponse';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.scss']
})
export class PeliculasPosterGridComponent implements OnInit {


  @Input()
  movies: Movie[] = [];


  constructor( private router : Router) { }

  ngOnInit(): void {

  }
  onMovieClick( movie: Movie) {
    this.router.navigate(['/pelicula', movie.id])
  }

}
