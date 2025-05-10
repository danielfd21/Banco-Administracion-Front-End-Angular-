import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosClienteServiceService {


  cedula:string = "";

  constructor() { }

  getCedula():string{
    return this.cedula;
  }

  setCedula(cedula:string):void{

    this.cedula = cedula;
  }

  limpiarCedula():void{

    this.cedula = "";
  }


}
