import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentaEmpleado } from '../Modelo/CuentaEmpleadoModel';
import { ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ApiLoginServiceService {


  private url = 'http://localhost:8080/autentificacion';

  constructor(private http:HttpClient) { }


  PostLoguear(credenciales: CuentaEmpleado):Observable<string>{

      return this.http.post<string>(this.url, credenciales, {responseType: 'text' as 'json'});

  }

  
}
