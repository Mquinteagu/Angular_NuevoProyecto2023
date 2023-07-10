import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesDBService {
  key: string ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmYzMjY0MmE1MGY1ZTU5MmM2MjNiZmRkMTQ4ODUwZCIsInN1YiI6IjY0YTM2YTNjZDQwMGYzMDEyZDQ0MTQxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lgILvDRd0DbVzu0lkQiGNrWlbLGpvHZjC-sLtt4OUgk';

  baseURL: string = 'https://api.themoviedb.org/3'
  
  constructor(
    private _httpClient : HttpClient
  ) { }
  
  getTrending() :Observable <any> {
    let headers = new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + '/trending/all/week', {
      headers
    })
  }

  getMovies() :Observable <any> {
    let headers = new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + '/movie/popular', {
      headers
    })
  }

  getSeries() :Observable <any> {
    let headers = new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + '/tv/popular', {
      headers
    })
  }
}

