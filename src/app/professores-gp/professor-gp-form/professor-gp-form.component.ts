import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfessoresGpService } from '../professores-gp.service';

@Component({
  selector: 'app-professor-gp-form',
  templateUrl: './professor-gp-form.component.html',
  styleUrls: ['./professor-gp-form.component.scss']
})
export class ProfessorGpFormComponent implements OnInit {

  meuForm : FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder, private professorGpService : ProfessoresGpService, private router: Router ) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [null, [Validators.required]],
      email : [null, [Validators.required, Validators.email]]
    })
  }

  onSubmit(){
    console.log(this.meuForm.value);
    this.professorGpService.save(this.meuForm.value).subscribe(
    (data) => {
      console.log(data);
      this.router.navigate(['/professoresGP']);
    }
    )
  }

}
