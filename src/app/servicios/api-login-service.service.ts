import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentaEmpleado, DatosCuenta } from '../Modelo/CuentaEmpleadoModel';
import { ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ApiLoginServiceService {


  

  constructor(private http:HttpClient) { }


  PostLoguear(usuario:string, clave:string):Observable<any>{

      const url:string = 'http://localhost:8080/autentificacion/login';

      const params= new HttpParams().set("usu", usuario).set("cla",clave);

      return this.http.post(url, null, {params});

  }

  
}
