import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-angular2';
  empresa = 'NAVA';

  corFundo = 'background-color:blueviolet;';

  getColor() {
    let color : string = 'yellow'
    return color;
  }

  clicar(){
    alert('Botão clicado');
  }

  getTextoDigitado(elemento :any){
    console.log(elemento.value);
    this.empresa = elemento.value;
  }


}
