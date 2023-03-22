
import { Cartelera, Movie } from './../interfaces/carteleraResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, of, catchError } from 'rxjs';
import { MovieDetails } from '../interfaces/movieDetail';
import { CastDetail } from '../interfaces/castDetail';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: '7830ba0288fa8dc41ffe4fa9972704b1',
      language: 'es-ES',
      page: this.carteleraPage.toString(),
    };
  }
  resetCartelera() {
    this.carteleraPage = 1;
}

  getCartelera(): Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;

    return this.http
      .get<Cartelera>(`${this.baseUrl}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.carteleraPage += 1;
          this.cargando = false;
        })
      );
  }
  //https://api.themoviedb.org/3/search/movie?api_key=7830ba0288fa8dc41ffe4fa9972704b1&language=es-ES&page=1&include_adult=false
  buscarPelicular(texto: string): Observable<Movie[]> {
    const params = { ...this.params, page: 1, query: texto };
    return  this.http.get<Cartelera>(`${this.baseUrl}/search/movie`, {
    params
    }).pipe(
        map(resp => resp.results)
        )
  }
  getPeliculaDetail(id: string) {
    const params = { ...this.params };
    return this.http.get<MovieDetails>(`${this.baseUrl}/movie/${id}`, {
      params
    }).pipe(
      catchError(err => of(null ) )
    )
  }

  getCastDetail(id: string) {
    const params = { ...this.params };
    return this.http.get<CastDetail>(`${this.baseUrl}/movie/${id}/credits`, {
      params
    }).pipe(
      map(resp => resp.cast),
      catchError(err => of( [] ) ),
    );
    }
}
