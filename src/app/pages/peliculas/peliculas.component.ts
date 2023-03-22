import { Cast} from './../../interfaces/castDetail';
import { MovieDetails } from './../../interfaces/movieDetail';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  public pelicula: MovieDetails;
  public cast: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location,
    private router : Router

  ) { }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.params['id'];

    //?Útil si tenemos que traer varios parámetros
    const { id } = this.activatedRoute.snapshot.params;

    this.peliculasService.getPeliculaDetail(id).subscribe(movie => {
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula = movie;
    });
  this.peliculasService.getCastDetail( id ).subscribe( cast => {
      console.log(cast)
      this.cast = cast
    });
  }
  onReturnHome() {
    this.location.back();
  }
}
