import { Component, Input } from '@angular/core';
import { MoviesSeries } from 'src/app/types/moviesSeries';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input() data: MoviesSeries[] = [];
  @Input() title : string = 'Titulo';
  @Input() img : string = 'imagen';

  constructor() {}

  ngOnInit(): void {}
}
