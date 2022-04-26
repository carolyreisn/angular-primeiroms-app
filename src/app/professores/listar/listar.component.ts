import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  professores : any = [];

  //modificador de acesso, nome de variável e Classe do objeto a ser injetado
  constructor(private activatedRoute : ActivatedRoute, private professoresService : ProfessoresService) {
    //this.activeRoute = new ActivatedRoute();
   }

  ngOnInit(): void {

    this.professoresService.getAll().subscribe(
      (data : any) => {
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

}
