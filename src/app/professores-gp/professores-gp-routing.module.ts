import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarGpComponent } from './listar-gp/listar-gp.component';
import { ProfessorGpFormComponent } from './professor-gp-form/professor-gp-form.component';

const routes: Routes = [
  {path: 'professoresGP', component: ListarGpComponent},
  {path: 'professoresGP/criar', component: ProfessorGpFormComponent},
  {path: 'professoresGp/editar/:id', component:ProfessorGpFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresGpRoutingModule { }
