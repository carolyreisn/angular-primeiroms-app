import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessoresGpModel } from '../professores-gp.model';
import { ProfessoresGpService } from '../professores-gp.service';

@Component({
  selector: 'app-listar-gp',
  templateUrl: './listar-gp.component.html',
  styleUrls: ['./listar-gp.component.scss']
})
export class ListarGpComponent implements OnInit {

  professoresGp : Array<ProfessoresGpModel> = [];

  constructor(private activatedRoute : ActivatedRoute, private professoresGpService : ProfessoresGpService, private route :Router) { }

  ngOnInit(): void {

    this.professoresGpService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.professoresGp= data;
      }
    )

    this.activatedRoute.params.subscribe(
      (data) =>{
        console.log(data);

      }
    );
  }

  onDelete(id :number) {
    this.professoresGpService.delete(id).subscribe(
      ()=>{
        console.log(`Deletou o registro com o ID ${id}`)
        this.getAll();
      }
    );
  }

  private getAll(){

    this.professoresGpService.getAll()
    .subscribe(
      (data) => {
        console.log(data);
        this.professoresGp = data;
      }
    );
  }

}
