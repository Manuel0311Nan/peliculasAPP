import { Movie } from './../../interfaces/carteleraResponse';
import { Component, OnInit, HostListener,OnDestroy } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public moviesSlidesShow: Movie[] = [];

  @HostListener('window:scroll', ['event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight)

    if (pos > max) {
      if (this.peliculasService.cargando) { return; }
      this.peliculasService.getCartelera().subscribe(movies => {
        this.movies.push(...movies);

      })
    }
    }
  constructor(private peliculasService: PeliculasService) {

  }
  ngOnInit(): void {

    this.peliculasService.getCartelera()
      .subscribe(movies => {
        this.movies = movies;
        this.moviesSlidesShow =movies;
      })
  }
  ngOnDestroy(): void {
    this.peliculasService.resetCartelera();
  }

}
