import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import data from '../../../../assets/proyectos.json';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  proyectos : any;
  tareas : any[];
  constructor(private formBuilder: FormBuilder) {
    this.proyectos =  data;
  }

  ngOnInit() {
    this.registerForm = this.createFormGroup();
  }

  createFormGroup() {
    return this.formBuilder.group({
      nombreTa: ['', Validators.required],
      nombrePro: ['', Validators.required],
      horas: ['', Validators.required]
    });

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.tareas = [];
    if (localStorage.length > 0)
    {
            this.tareas = JSON.parse(localStorage.getItem("tareas"));
            this.tareas.push(this.registerForm.value);
            if (typeof(Storage) !== "undefined") {
              localStorage.setItem("tareas", JSON.stringify(this.tareas));
            }
            else {
              alert("browser doesn't support local storage!");
            }
            if (this.registerForm.invalid) {
              return;
            }
    }
    else{
      this.tareas.push(this.registerForm.value);
      localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }


  }


}
