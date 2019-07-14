import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
        .ng-invalid.ng-touched:not(form) { border: 1px solid red;} `]
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo: "Masculino",
    acepta: false
  }

  paises = [
    {codigo:'ECU', nombre: "Ecuador"},
    {codigo:'CRI', nombre: "Costa Rica"},
    {codigo:'ESP', nombre: "España"}];

    sexos: string[] = ['Masculino', 'Femenino', 'Sin definir']
  constructor() { }

  guardar(forma: NgForm){
    console.log("Forma: ", forma );
    console.log("Valores: ", forma.value);
    console.log("Usuario: ", this.usuario);
  }

}
