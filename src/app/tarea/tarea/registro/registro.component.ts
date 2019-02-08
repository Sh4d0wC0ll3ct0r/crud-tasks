import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { InfoProyectosService } from '../../../services/info-proyectos.service';
import data from '../../../../assets/proyectos.json';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../../_helpers/must-match.validator';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  proyectos : any[];

  constructor(private formBuilder: FormBuilder /*, private _InfoProyectosService: InfoProyectosService*/) { }

  ngOnInit() {
    this.registerForm = this.createFormGroup();
    this.getProyectos();
  }

  createFormGroup() {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  getProyectos(){
    console.log(data);

  }
}