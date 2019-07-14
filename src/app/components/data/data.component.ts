import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;
  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(5)
                                    ]),
      'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('', [
                                    Validators.required,
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    });
  }

  guardarCambios(){
    console.log("Forma: ",this.forma);
    console.log("Values: ",this.forma.value);

  }


}
