import { Component } from '@angular/core';
import { BotonMostrarClaveComponent } from '../botones/boton-mostrar-clave/boton-mostrar-clave.component';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiLoginServiceService } from '../servicios/api-login-service.service';
import { CuentaEmpleado, DatosCuenta } from '../Modelo/CuentaEmpleadoModel';
import { Route } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [BotonMostrarClaveComponent, FormsModule, ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  formulariologin: FormGroup;
  mensaje: string = "";

  constructor( private form: FormBuilder, private apiloginservice:ApiLoginServiceService, private router: Router){

    this.formulariologin = this.form.group({

      cedula: ['',Validators.required],
      clave: ['',Validators.required]

    })

  }


  hasErrors(controlName: string){
    return this.formulariologin.get(controlName)?.hasError('required') && this.formulariologin.get(controlName)?.touched;
  }

  enviar():void{

    if(this.formulariologin.valid){

      const datos = this.formulariologin.value;

      const cedula = this.formulariologin.get("cedula")?.value;
      const clave = this.formulariologin.get("clave")?.value;

    console.log(datos);

    this.apiloginservice.PostLoguear(cedula,clave).subscribe({

      next: (data:DatosCuenta) =>{
        
        console.log(data);
        
        const dep = data.departamento.trim();
        
        const tok = data.token;

        localStorage.setItem('token',tok);

        switch(dep){

          case "Gerencia": this.router.navigate(['gerencia']); break;
          case "Contabilidad": this.mensaje = "Lo sentimos! Por el momento el departamento de Contabilidad esta inhabilitado por reparaciones"; break;
          default: this.mensaje = data.departamento;

        }

      },

      error: (err) =>{

        this.mensaje = err.error;
        
        
        

        console.log("error" + err);



      }

    });

    }else{
      this.mensaje = "Por favor llene todos los campos";
      
    }

    
  }



}
