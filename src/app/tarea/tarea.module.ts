import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaRoutingModule } from './tarea-routing.module';
import { TareaComponent } from './tarea/tarea.component';
import { RegistroComponent } from './tarea/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [TareaComponent, RegistroComponent],
  imports: [
    CommonModule,
    TareaRoutingModule,
    ReactiveFormsModule
  ]
})
export class TareaModule { }
