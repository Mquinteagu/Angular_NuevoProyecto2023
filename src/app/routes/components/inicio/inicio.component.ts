import { Component } from '@angular/core';
import { MoviesDBService } from 'src/app/services/movies-db.service';
import { MoviesSeries } from 'src/app/types/moviesSeries';

@Component({
  selector: 'app-inicio',
  templateUrl:'./inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [MoviesDBService]
})
export class InicioComponent {
  movies_series: any[] = [];

  movies: any[] = [];
  series: any[] = [];

  //movieFilter: MoviesSeries[] = [];
  //movieResult: MoviesSeries[] = [];
  //filter: string = 'Todos';
  //toSearch: string = '';

  filter: 'Todos' | 'Peliculas' | 'Series' = 'Todos';

  changeFilter = (filtro: 'Todos' | 'Peliculas' | 'Series') => {
    this.filter = filtro;
    if (filtro === 'Todos' && this.movies_series.length === 0){
      this.getAllTrending();
    }
    if (filtro === 'Peliculas' && this.movies.length === 0){
      this.getAllMovies();
    }
    if(filtro === 'Series' && this.series.length === 0) {
      this.getAllTvShow();
    }
  }

  constructor(
    private _movieDBService: MoviesDBService
  ) { }

  ngOnInit() {
    this.getAllTrending();
  }

  getAllTrending() {
    this._movieDBService.getTrending().subscribe({
      next: (response) => {
        this.movies_series = response.results;
        console.log('VARIABLE movies_series', this.movies_series);
      },
      error: (error) => {
        console.log('ERROR', error);
      },
      complete() {
        console.log('LA EJECUCIÓN TERMINÓ');
      }
    })
  }

  getAllMovies() {
    this._movieDBService.getMovies().subscribe({
      next: (response) => {
        this.movies = response.results;
        console.log('VARIABLE movies', this.movies);
      },
      error: (error) => {
        console.log('ERROR', error);
      },
      complete() {
        console.log('LA EJECUCIÓN TERMINÓ');
      }
    })
  }

  getAllTvShow() {
    this._movieDBService.getSeries().subscribe({
      next: (response) => {
        this.series = response.results;
        console.log('VARIABLE series', this.series);
      },
      error: (error) => {
        console.log('ERROR', error);
      },
      complete() {
        console.log('LA EJECUCIÓN TERMINÓ');
      }
    })
  }
}


