import { Component } from '@angular/core';
import { BotonMostrarClaveComponent } from '../botones/boton-mostrar-clave/boton-mostrar-clave.component';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiLoginServiceService } from '../servicios/api-login-service.service';
import { CuentaEmpleado } from '../Modelo/CuentaEmpleadoModel';
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

    console.log(datos);

    this.apiloginservice.PostLoguear(datos).subscribe({

      next: (data:string) =>{

        console.log(data);
        switch(data){

          case "Gerencia": this.router.navigate(['gerencia']); break;
          case "Contabilidad": this.router.navigate(['contabilidad']); break;

          default: this.mensaje = "¡Lo sentimos! Por el momento no existe una pagina para su departemnto"; break;

        }

      },

      error: (err) =>{

        this.mensaje = typeof err.error === "string"? err.error:"error";
        
        
        

        console.log("error" + err);



      }

    });

    }else{
      this.mensaje = "Por favor llene todos los campos";
      
    }

    
  }



}
