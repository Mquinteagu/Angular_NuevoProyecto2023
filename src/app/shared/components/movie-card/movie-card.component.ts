import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MoviesSeries } from 'src/app/types/moviesSeries';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Serie } from 'src/app/types/Series';
import { Movie } from 'src/app/types/Movies';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input() title : string = 'Titulo';
  @Input() img : string = 'imagen';
  @Input() id: number = 0;
  @Input() showButtons: boolean = false;
  @Input() estadoBoton: boolean = true;
  @Input() data: Serie [] | undefined;
  @Input() filter: string | undefined;

  @Output() AddMovie = new EventEmitter<number>();
  @Output() DeleteMovie = new EventEmitter<number>();
  @Output() AddSerie = new EventEmitter<number>();
  @Output() DeleteSerie = new EventEmitter<number>();


  constructor(){}

  ngOnInit(){}

  addMovie() {
    this.AddMovie.emit(this.id);
  }

  deleteMovie() {
    this.DeleteMovie.emit(this.id);
  }

  addSerie() {
    this.AddSerie.emit(this.id);
  }

  deleteSerie() {
    this.DeleteSerie.emit(this.id);
  }
}
