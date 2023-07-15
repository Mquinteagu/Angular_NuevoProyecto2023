import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MoviesDBService } from 'src/app/services/movies-db.service';
import { Serie } from 'src/app/types/Series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  consulta: string = 'Consulta de prueba';
  series: any[] = [];

  constructor(
    private _moviesDBService: MoviesDBService,
    private _firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.getAllSeries();
  }

  estaListo: boolean = false;
  getAllSeries() {
    this._moviesDBService.getSeries().subscribe({
      next: (response) => {
        this.series = response.results;
        console.log('VARIABLE series', this.series);
      },
      error: (error) => {
        console.log('ERROR', error);
      },
      complete() {
        console.log('LA EJECUCión terminó');
      },
    })
  }

  addSerieToFirebase(id: number) {
    console.log('Serie para agregar', id);
    const auxiliar = this.series.find((value) => value.id == id);
    const serieParaGuardar: Serie = {
      id_api: auxiliar.id,
      title: auxiliar.title,
      poster_path: auxiliar.poster_path,
      media_type: 'serie',
      vote_average: auxiliar.vote_average,
      name: auxiliar.name
    }
    !serieParaGuardar.name && delete serieParaGuardar.name;
    !serieParaGuardar.title && delete serieParaGuardar.title;
    this._firestoreService.addSerie(serieParaGuardar).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })

  }

  mostrarCambios = () => {
    console.log('la variable consulta tiene:', this.consulta);
    console.log('Cantidad de caracteres: ', this.consulta.length);
  }

  deleteSerieFromFirebase(id: number) {
    console.log('Serie para eliminar', id);
    let auxResponseMovies: Serie[] = [];
    let serieEncontrada: Serie | undefined;
    this._firestoreService.getSerie().subscribe({
      next: (response) => {
        auxResponseMovies = response;
        console.log('RESPONSE', response);
        serieEncontrada = auxResponseMovies.find((value) => value.id_api === id);
        console.log('serieEncontrada', serieEncontrada);
        this._firestoreService.deleteMovie(serieEncontrada!.id!).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        })
      }
    })
  }
}
