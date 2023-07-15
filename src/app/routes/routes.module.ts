import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SeriesComponent } from './components/series/series.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DasboardComponent } from './components/dasboard/dasboard.component';



@NgModule({
  declarations: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent,
    DasboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:  [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent,
    DasboardComponent
  ]
})
export class RoutesModule { }
