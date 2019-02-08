import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'task',
    loadChildren : './tarea/tarea.module#TareaModule'
  },
  {
    path: 'tasks',
    loadChildren : './tareas/tareas.module#TareasModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
