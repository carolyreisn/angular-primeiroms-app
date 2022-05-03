import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessoresModel } from '../professores.model';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  @Input()
  empresaFilho: string = '';

  // professores = [
  //   {id:1, nome: 'Fabrizio', email: 'fabrizio@grandeporte.com.br '},
  //   {id:2, nome: 'Nelson', email: 'nelson@grandeporte.com.br '}
  // ]

  professores : Array<ProfessoresModel> = [];

  //modificador de acesso, nome de variável e Classe do objeto a ser injetado
  constructor(private activatedRoute : ActivatedRoute, private professoresService : ProfessoresService, private route :Router) {
    //this.activeRoute = new ActivatedRoute();
   }

  ngOnInit(): void {

    this.professoresService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.professores = data;
      }
    )

    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  onDelete(id :number) {
    this.professoresService.delete(id).subscribe(
      ()=>{
        console.log(`Deletou o registro com o ID ${id}`)
        this.getAll();
      }
    );
  }

  private getAll(){

    this.professoresService.getAll()
    .subscribe(
      (data) => {
        console.log(data);
        this.professores = data;
      }
    );
  }

}
