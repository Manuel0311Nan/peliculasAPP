import { Cartelera } from './../interfaces/carteleraResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  api: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=7830ba0288fa8dc41ffe4fa9972704b1&language=en-US&page=1';

  constructor(private http: HttpClient) { }

  getCartelera(): Observable<Cartelera>{
    let api = `${this.api}`
   return  this.http.get<Cartelera>(api)

  }
}
