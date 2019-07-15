import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;
   usuario: Object = {
     nombreCompleto : {
       nombre: 'Armando',
       apellido: 'Tapia'
     },
     correo: 'armandotapia115@hotmail.com',
     pasatiempos: ["Correr", "Estudiar", "Muchar"]
   }

  constructor() {
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
                           'nombre': new FormControl('', [
                                                Validators.required,
                                                Validators.minLength(5)
        ]),
                            'apellido': new FormControl('', [Validators.required, this.noTapia]),
       }),



      'correo': new FormControl('', [
                                    Validators.required,
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required,this.existeUsuario ),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    // this.forma.setValue(this.usuario);
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ])

  }

  agregarPasatiempo(){
    // para hacer un casteo en ts
    (<FormArray> this.forma.controls['pasatiempos']).push( new FormControl('Dormir', Validators.required));
  }

  // este es una validador que no permite que se registre ningun tapia

  noTapia( control: FormControl): {[s:string]:boolean}{
    if(control.value === "tapia"){
      return { noTapia: true}
    }
    // si retorna null es que no hay problema, se puede registrar
    return null;
  }

  // {[s:string]:boolean}
  noIgual(control: FormControl): any {
    // console.log('el this con el bind ',this);
    let forma: any = this;
    if( control.value !== forma.controls['password1'].value){
       return {noiguales: true}
     }
     return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
      let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
              if(control.value === 'strider'){
                resolve({existe: true});
              } else {
                 resolve(null)
              }
            },3000)
      } );
      return promesa;
  }

  guardarCambios(){
    console.log("Forma: ",this.forma);
    console.log("Values: ",this.forma.value);
    // this.forma.reset(this.usuario);
    // this.forma.reset({nombreCompleto: {nombre: "", apellido:""}, correo:""});


  }


}
