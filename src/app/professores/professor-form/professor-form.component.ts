import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.scss']
})
export class ProfessorFormComponent implements OnInit {

  meuForm : FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder, private professoresService : ProfessoresService, private router:Router) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [ null, [ Validators.required ] ],
      rua : [ null, [ Validators.required ] ],
      numero : [ null, [ Validators.required ] ],
      cep : [ null, [ Validators.required ] ]
    });
  }

  onSubmit(){
    console.log(this.meuForm.value);
    this.professoresService.save(this.meuForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/professores']);
      }
      );
  }

}
