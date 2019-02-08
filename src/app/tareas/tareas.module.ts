import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas/tareas.component';
import { ListarComponent } from './tareas/listar/listar.component';


@NgModule({
  declarations: [TareasComponent, ListarComponent],
  imports: [
    CommonModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
