import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from 'express';
import { EmpleadoRegistro } from '../Modelo/EmpleadoRegistroModel';


@Injectable({
  providedIn: 'root'
})
export class ApiActualizarEmpleadoServiceService {


 

  constructor(private http: HttpClient) { }


  PutActualizarEmpleados(empleado:EmpleadoRegistro,  AnteriorCedula:string,  CorreoAnterior:string ):Observable<string>{
    const url:string = `http://localhost:8081/gerencia/actualizar-empleados/${AnteriorCedula}/${CorreoAnterior}`;

    return this.http.put<string>(url,empleado,{responseType: 'text' as 'json'});

  }




}
