import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../Modelo/EmpleadoModel';
import { EmpleadoRegistro } from '../Modelo/EmpleadoRegistroModel';



@Injectable({
  providedIn: 'root'
})
export class ApiNuevoEmpleadoServiceService {


  private url = "http://localhost:8081/gerencia/departamentos";

  private url_nue_emp = "http://localhost:8081/gerencia/registrar-empleado";

  constructor(private http:HttpClient) { }


    GetALLDepartamentos():Observable<string[]>{

      return this.http.get<string[]>(this.url);

    }


    PostRegistrarNuevoCliente(empleado:EmpleadoRegistro):Observable<EmpleadoRegistro>{

      return this.http.post<EmpleadoRegistro>(this.url_nue_emp, empleado , {responseType: 'text' as 'json'});

    }

}
