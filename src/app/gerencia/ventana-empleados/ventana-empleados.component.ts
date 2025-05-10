import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ApiVentanaEmpleadosServiceService } from '../../servicios/api-ventana-empleados.service.service';
import { Empleado } from '../../Modelo/EmpleadoModel';
import { error } from 'console';
import { DatosClienteServiceService } from '../../servicios/datos-cliente.service.service';
import { Router } from '@angular/router';
import { EmpleadoApellidos, EmpleadoCedula } from '../../Modelo/EmpleadoFiltroModel';
import { ApiEliminarEmpleadosServiceService } from '../../servicios/api-eliminar-empleados.service.service';

@Component({
  selector: 'app-ventana-empleados',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ventana-empleados.component.html',
  styleUrl: './ventana-empleados.component.css'
})
export class VentanaEmpleadosComponent {


  FormularioVentana!:FormGroup;
  empleados: Empleado[] = [];
  mensaje:string = "";
  filaSeleccionada: Empleado | null = null; 


  

  constructor(private form:FormBuilder, private api:ApiVentanaEmpleadosServiceService, private serviciodatos: DatosClienteServiceService, private router:Router, private api_eliminar:ApiEliminarEmpleadosServiceService){

    this.FormularioVentana = this.form.group({

      cedula: [""],
      apellidos: [""]

    });

    

  }
  


  OnSubmit(event:Event):void{

    const form = event.target as HTMLFormElement;
    const BotonActivado = form.querySelector('input[type="submit"]:focus') as HTMLInputElement;

    if(BotonActivado){
      if(BotonActivado.name === "btn_bus"){


        this.Buscar();


      }else if(BotonActivado.name === "btn_mos"){


        this.Mostrar();

      }

      
    }


  }


 Buscar():void{

  const cedula = this.FormularioVentana.get("cedula")?.value.trim();
  const apellidos = this.FormularioVentana.get("apellidos")?.value.trim();

  

  const emp_ced:EmpleadoCedula = {

    cedula: cedula

  }


  const emp_ape:EmpleadoApellidos = {
    apellidos: apellidos
  }

  

  if(cedula && !apellidos){

    this.api.PostFiltroEmpleadosCedula(emp_ced).subscribe({
      next:(data:Empleado[]) =>{

        this.empleados = data;
        this.mensaje = "";
      },
      error:(err)=>{

        console.log("error filtro cedula:" + err.error);
        

      }
    });

  }else if(!cedula && apellidos){

    this.api.PostFiltroEmpleadosApellidos(emp_ape).subscribe({

      next:(data: Empleado[])=>{

        this.empleados = data;
        this.mensaje = "";

      },

      error:(err)=>{

        console.log("error filtro apellidos:" + err.erro);
      }


    });
  }else if(cedula && apellidos){

    this.api.PostFiltroEmpleadosCedula(emp_ced).subscribe({

      next:(data:Empleado[])=>{

        this.empleados = data;
        this.mensaje = "";

      },

      error:(err)=>{

        console.log("error todo:" + err.error);
      } 

    });

  }else{

    this.mensaje = "Por favor debe ingresar por lo menos un campo antes de buscar";
    this.empleados = [];
  }
    


  }



  Mostrar():void{

    

    this.api.GetAllEmpleados().subscribe({

      next:(data:Empleado[]) =>{

        this.empleados = data;
       


      },

      error:(err) =>{

        this.mensaje = err.error;
        console.log(this.mensaje);
       

      }

      
    });
   

    
    
  }

  Enviar(cedula:string):void{

    
   
    this.serviciodatos.setCedula(cedula);

    this.router.navigate(['/actualizar-empleado']);
    
  }

  Eliminar(cedula:string):void{

    
    this.api_eliminar.DeleteEliminarEmpleados(cedula).subscribe({

      next:(data:string) =>{


        alert(data);

        

      },

      error:(err)=>{


        console.log("error eliminar" + err.error );

      }


    });





  }

}
