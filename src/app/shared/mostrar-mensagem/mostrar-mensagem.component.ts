import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mostrar-mensagem',
  templateUrl: './mostrar-mensagem.component.html',
  styleUrls: ['./mostrar-mensagem.component.scss']
})
export class MostrarMensagemComponent implements OnInit {

  @Input()
  // meuForm : FormGroup = new FormGroup({});
  controles : any;

  @Input()
  mensagem :string = 'Erro ao preencher campo';

  @Input()
  debug : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
