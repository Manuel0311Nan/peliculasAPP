import { PeliculasService } from 'src/app/services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/carteleraResponse';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  public texto: string = '';
  public movies: Movie[] = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasServices: PeliculasService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.texto = params['texto'];
      console.log(params['texto']);
      this.peliculasServices.buscarPelicular(params['texto']).subscribe(movies => {
        this.movies = movies;

      })
    })
  }

}
