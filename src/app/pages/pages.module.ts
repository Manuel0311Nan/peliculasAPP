import { PipesModule } from './../pipes/pipes.module';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [
    HomeComponent,
    PeliculasComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule
  ]
})
export class PagesModule { }
