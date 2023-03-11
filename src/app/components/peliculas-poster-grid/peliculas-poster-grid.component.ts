import { Movie } from './../../interfaces/carteleraResponse';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.scss']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input()
  movies: Movie[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}