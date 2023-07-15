import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MoviesDBService } from 'src/app/services/movies-db.service';
import { Movie } from 'src/app/types/Movies';
import { MoviesSeries } from 'src/app/types/moviesSeries';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [FirestoreService]
})
export class PeliculasComponent {

  consulta: string = 'Consulta de prueba';
  movies: any[] = [];

  constructor(
    private _moviesDBService: MoviesDBService,
    private _firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.getAllMovies();
  }

  estaListo: boolean = false;
  getAllMovies() {
    this._moviesDBService.getMovies().subscribe({
      next: (response) => {
        this.movies = response.results;
        console.log('VARIABLE movies', this.movies);
      },
      error: (error) => {
        console.log('ERROR', error);
      },
      complete() {
        console.log('LA EJECUCión terminó');
      },
    })
  }

  addMovieToFirebase(id: number) {
    console.log('Pelicula para agregar', id);
    const auxiliar = this.movies.find((value) => value.id == id);
    const peliculaParaGuardar: Movie = {
      id_api: auxiliar.id,
      title: auxiliar.title,
      poster_path: auxiliar.poster_path,
      media_type: 'movie',
      vote_average: auxiliar.vote_average,
      name: auxiliar.name
    }
    !peliculaParaGuardar.name && delete peliculaParaGuardar.name;
    !peliculaParaGuardar.title && delete peliculaParaGuardar.title;
    this._firestoreService.addMovie(peliculaParaGuardar).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })

  }

  mostrarCambios = () => {
    console.log('la variable consulta tiene:', this.consulta);
    console.log('Cantidad de caracteres: ', this.consulta.length);
  }

  deleteMovieFromFirebase(id: number) {
    console.log('Película para eliminar', id);
    let auxResponseMovies: Movie[] = [];
    let peliculaEncontrada: Movie | undefined;
    this._firestoreService.getMovie().subscribe({
      next: (response) => {
        auxResponseMovies = response;
        console.log('RESPONSE', response);
        peliculaEncontrada = auxResponseMovies.find((value) => value.id_api === id);
        console.log('peliculaEncontrada', peliculaEncontrada);
        this._firestoreService.deleteMovie(peliculaEncontrada!.id!).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        })
      }
    })
  }
}