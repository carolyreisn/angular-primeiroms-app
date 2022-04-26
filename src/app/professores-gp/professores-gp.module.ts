import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresGpRoutingModule } from './professores-gp-routing.module';
import { ListarGpComponent } from './listar-gp/listar-gp.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProfessorGpFormComponent } from './professor-gp-form/professor-gp-form.component';


@NgModule({
  declarations: [
    ListarGpComponent,
    ProfessorGpFormComponent
  ],
  imports: [
    CommonModule,
    ProfessoresGpRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports:[
    ListarGpComponent
  ]
})
export class ProfessoresGpModule { }
