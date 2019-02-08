import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './tareas/listar/listar.component';
import { TareasComponent } from './tareas/tareas.component';
const routes: Routes = [
  {
    path:  'listar',
    component:  ListarComponent,
  },
];
//  {path:'edit/:id',component:OrderComponent}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
