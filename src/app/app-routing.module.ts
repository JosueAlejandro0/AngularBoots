import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { ControlComponent } from './control/control.component';
import { AcuseComponent } from './acuse/acuse.component';

const routes: Routes = [
  {path:'control',component:ControlComponent},
  {path:'consulta',component:ConsultaComponent},
  {path:'bitacora',component:BitacoraComponent},
  {path:'acuse',component:AcuseComponent},
  {path: '**', component: ConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
