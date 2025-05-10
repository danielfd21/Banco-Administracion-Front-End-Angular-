import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEliminarEmpleadosServiceService {



  

  constructor(private http:HttpClient) { }

    
  
  DeleteEliminarEmpleados(cedula:string):Observable<string>{
    const url:string = `http://localhost:8081/gerencia/eliminar-empleados/${cedula}`;

    return this.http.delete<string>(url, {responseType: 'text' as 'json'}); 
  }
}
