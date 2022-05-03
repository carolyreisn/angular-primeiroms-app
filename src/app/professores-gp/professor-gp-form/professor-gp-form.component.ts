import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessoresGpService } from '../professores-gp.service';

@Component({
  selector: 'app-professor-gp-form',
  templateUrl: './professor-gp-form.component.html',
  styleUrls: ['./professor-gp-form.component.scss']
})
export class ProfessorGpFormComponent implements OnInit {

  meuForm : FormGroup = new FormGroup({});
  isEdicao : boolean = false;
  id : number = -1;



  constructor(
    private activatedRoute : ActivatedRoute,
    private formBuilder : FormBuilder,
    private professorGpService : ProfessoresGpService,
    private router: Router ) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [null, [Validators.required]],
      email : [null, [Validators.required, Validators.email]]
    });

    this.activatedRoute.params
    .subscribe(
      (parametros : any) => {
        console.log(parametros);

        if(parametros.id) {
          console.log(`edição id ${parametros.id}`);
            this.isEdicao = true;
            this.id = parametros.id;
            this.professorGpService.getOne(parametros.id).subscribe(
              (dadosProfessoresGP) => {
                console.log(dadosProfessoresGP);
                this.meuForm.patchValue(dadosProfessoresGP);
              }
            )
          }
          // é CRIAÇÃO
          else {
            console.log(`criação`);
            this.isEdicao = false;
          }
        });

  }

  onSubmit(){
    if (this.isEdicao == false){
      this.professorGpService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          // o navigate é para redirecionar para uma outra rota de interesse
          this.router.navigate(['/professoresGP']);
        }
      );
    }
    else{
      this.professorGpService.update(this.id, this.meuForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['/professoresGP']);
          }
        );
    }

  }
}
