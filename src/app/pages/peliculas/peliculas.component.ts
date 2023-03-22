import { MovieDetails } from './../../interfaces/movieDetail';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  public pelicula: MovieDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location : Location

  ) { }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.params['id'];

    //?Útil si tenemos que traer varios parámetros
    const { id } =     this.activatedRoute.snapshot.params;
    this.peliculasService.getPeliculaDetail(id).subscribe(movie => {
      this.pelicula = movie;
      console.log(this.pelicula);
})
  }
  onReturnHome() {
    this.location.back();
  }
}
