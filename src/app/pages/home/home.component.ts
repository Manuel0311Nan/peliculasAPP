import { Movie } from './../../interfaces/carteleraResponse';
import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private peliculasService: PeliculasService) {

  }
  ngOnInit(): void {

    this.peliculasService.getCartelera()
      .subscribe(resp => {
        this.movies = resp.results
      })
  }

}
