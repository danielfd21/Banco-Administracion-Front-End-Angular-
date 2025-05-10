import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cedula_empleado } from '../Modelo/DatosNuevaClaveModel';

@Injectable({
  providedIn: 'root'
})
export class ApiNuevaClaveServiceService {

  url:string = "http://localhost:8081/gerencia/actualizar-clave-empleado";

  constructor(private http:HttpClient) { }


  PutActualizarClave(cedula:cedula_empleado):Observable<string>{


    return this.http.put<string>(this.url,cedula,{responseType: 'text' as 'json'}); 


  }

  

  


}
