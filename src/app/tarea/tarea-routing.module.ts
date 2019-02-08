import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TareaComponent} from './tarea/tarea.component';
import {RegistroComponent} from './tarea/registro/registro.component';

const routes: Routes = [
    {
      path:  '',
      component:  RegistroComponent,
    },
    {
      path:  'edit/:id',
      component:  RegistroComponent,
    }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareaRoutingModule { }
