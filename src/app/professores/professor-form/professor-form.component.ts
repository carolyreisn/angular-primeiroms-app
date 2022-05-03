import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.scss']
})
export class ProfessorFormComponent implements OnInit {

  meuForm : FormGroup = new FormGroup({});

  isEdicao : boolean = false;
  id : number = -1;

  constructor(
    private formBuilder : FormBuilder,
    private professoresService : ProfessoresService,
    private router:Router,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [ null, [ Validators.required ] ],
      rua : [ null, [ Validators.required ] ],
      numero : [ null, [ Validators.required ] ],
      cep : [ null, [ Validators.required ] ]
    }
    );

    // pegar parâmetros das rotas

    this.activatedRoute.params
      .subscribe(
        (parametros : any) => {
          console.log(parametros);

          // é EDIÇÃO
          if (parametros.id){
            console.log(`edição id ${parametros.id}`);
            this.isEdicao = true;
            this.id = parametros.id;
            this.professoresService.getOne(parametros.id).subscribe(
              (dadosProfessores) => {
                console.log(dadosProfessores);
                this.meuForm.patchValue(dadosProfessores);
              }
            )
          }
          // é CRIAÇÃO
          else {
            console.log(`criação`);
            this.isEdicao = false;
          }
        }
      );
  }



  onSubmit(){
    // console.log(this.meuForm.value);
    if (this.isEdicao == false){
      this.professoresService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          // o navigate é para redirecionar para uma outra rota de interesse
          this.router.navigate(['/professores']);
        }
      );
    }
    //é alteração de algum registro
    else{
      this.professoresService.update(this.id, this.meuForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            // o navigate é para redirecionar para uma outra rota de interesse
            this.router.navigate(['/professores']);
          }
        );
    }

  }
}
