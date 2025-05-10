import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiNuevaClaveServiceService } from '../../servicios/api-nueva-clave.service.service';
import { error } from 'console';
import { cedula_empleado } from '../../Modelo/DatosNuevaClaveModel';


@Component({
  selector: 'app-nueva-clave',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './nueva-clave.component.html',
  styleUrl: './nueva-clave.component.css'
})
export class NuevaClaveComponent {


  FormularioClaveEmpleado!:FormGroup;
  mensaje:string = "";
  cla:string = "";

  constructor(private form:FormBuilder, private api: ApiNuevaClaveServiceService){

    this.FormularioClaveEmpleado = this.form.group({

        cedula: ["",Validators.required],
        clave: [{value:"", disabled:true}]


      
    });

  }


  Actualizar():void{

    const formulario = this.FormularioClaveEmpleado.value;
    
    if(this.FormularioClaveEmpleado.valid){

     const ced:cedula_empleado = {
        cedula: formulario.cedula

     }

      


      this.api.PutActualizarClave(ced).subscribe({

        next: (clav:string) => {

          

          this.cla = clav;

          this.FormularioClaveEmpleado.get('clave')?.setValue(clav);

          this.mensaje = "";
          
        },

        error: (err) =>  {
          
          this.mensaje = err.error;
          
        },



      })
      
      console.log("esta es la clave" + this.cla);

    }else{

      this.mensaje = "Por favor llene el campo de cedula";

    }


  }

  
  


}
