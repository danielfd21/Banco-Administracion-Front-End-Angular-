import { Injectable } from '@angular/core';
import { Empleado } from '../Modelo/EmpleadoModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadoApellidos, EmpleadoCedula } from '../Modelo/EmpleadoFiltroModel';

@Injectable({
  providedIn: 'root'
})
export class ApiVentanaEmpleadosServiceService {



  private url = "http://localhost:8081/gerencia/mostrar-empleados";

  private url_filtro_cedula = "http://localhost:8081/gerencia/filtrar-empleados-cedula";

  private url_fitlro_apellido = "http://localhost:8081/gerencia/filtrar-empleado-apellidos";


  constructor(private http:HttpClient) { }


  GetAllEmpleados():Observable<Empleado[]>{

    return this.http.get<Empleado[]>(this.url,{responseType: 'json'}); 
  
  } 


  PostFiltroEmpleadosCedula(empleado:EmpleadoCedula):Observable<Empleado[]>{

    return this.http.post<Empleado[]>(this.url_filtro_cedula,empleado,{responseType: 'json'}); 
  }


  PostFiltroEmpleadosApellidos(empleado:EmpleadoApellidos):Observable<Empleado[]>{

      return this.http.post<Empleado[]>(this.url_fitlro_apellido,empleado,{responseType: 'json'}); 
  }



  


  
}
