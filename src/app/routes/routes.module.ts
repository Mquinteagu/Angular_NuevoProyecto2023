import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SeriesComponent } from './components/series/series.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports:  [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent
  ]
})
export class RoutesModule { }
