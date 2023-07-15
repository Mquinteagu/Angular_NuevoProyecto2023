import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MoviesSeries } from 'src/app/types/moviesSeries';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input() title : string = 'Titulo';
  @Input() img : string = 'imagen';
  @Input() id: number = 0;
  @Input() estadoBoton: boolean = true;
  @Output() AddMovie = new EventEmitter<number>();
  @Output() DeleteMovie = new EventEmitter<number>();


  constructor(){}

  ngOnInit(){}

  addMovie() {
    this.AddMovie.emit(this.id);
  }

  deleteMovie() {
    this.DeleteMovie.emit(this.id);
  }

}
