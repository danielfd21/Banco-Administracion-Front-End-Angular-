import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../../Modelo/EmpleadoModel';
import { ApiVentanaEmpleadosServiceService } from '../../servicios/api-ventana-empleados.service.service';
import { DatosClienteServiceService } from '../../servicios/datos-cliente.service.service';
import { EmpleadoCedula } from '../../Modelo/EmpleadoFiltroModel';
import { ApiNuevoEmpleadoServiceService } from '../../servicios/api-nuevo-empleado.service.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { ApiActualizarEmpleadoServiceService } from '../../servicios/api-actualizar-empleado.service.service';
import { EmpleadoRegistro } from '../../Modelo/EmpleadoRegistroModel';

@Component({
  selector: 'app-actualizar-empleado',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './actualizar-empleado.component.html',
  styleUrl: './actualizar-empleado.component.css'
})
export class ActualizarEmpleadoComponent implements OnInit{


 FormularioActualizar!: FormGroup;
 mensaje:string = "";
 ced:string = "";
 ant_ced:string = "";
 ant_cor:string = "";
 empleados: Empleado[] = [];
 departamentos: string[] = [];

  constructor(private form:FormBuilder, private api_filtro:ApiVentanaEmpleadosServiceService, private datos_servicio:DatosClienteServiceService, private api_dep:ApiNuevoEmpleadoServiceService, private api_act:ApiActualizarEmpleadoServiceService){

    this.FormularioActualizar = this.form.group({

        cedula: ['',Validators.required],
        nombres: ['',Validators.required],
        apellidos: ['',Validators.required],
        correo: ['',Validators.required],
        fechaDeNacimiento: ['',Validators.required],
        idDepartamento:['',Validators.required]

    });

  }

  




  ngOnInit(): void {
      
    this.api_dep.GetALLDepartamentos().subscribe({

      next:(data:string[])=>{

        this.departamentos = data;

      },

      error:(err)=>{

        console.log("error departamentos" + err.error);
      }


    });

    
    const formulario = this.FormularioActualizar.value;

    const empleado:Empleado = {

      cedula: formulario.cedula,
      nombre: formulario.nombre,
      apellidos: formulario.apellidos,
      correo: formulario.correo,
      fechaDeNacimiento: formulario.fechaDeNacimiento,
      idDepartamento: formulario.idDepartamento
    }


      
      this.ced = this.datos_servicio.getCedula();
      
      

      const objeto_cedula:EmpleadoCedula = {
        cedula: this.ced
      }

      this.api_filtro.PostFiltroEmpleadosCedula(objeto_cedula).subscribe({
        
          next:(data:Empleado[])=>{


              if(data.length > 0){  

                  

                  const emp = data[0];

                  this.ant_ced = emp.cedula;
                  this.ant_cor = emp.correo;

                  this.FormularioActualizar.patchValue({

                      cedula: emp.cedula,
                      nombres: emp.nombre,
                      apellidos: emp.apellidos,
                      correo: emp.correo,
                      fechaDeNacimiento: emp.fechaDeNacimiento,
                      idDepartamento: emp.idDepartamento.nombre

                  });
              }


          },

          error:(err)=>{

            console.log("error oninit" + err.error);

          }

      });


    


    


  }

  
  Actualizar():void{

    const formulario = this.FormularioActualizar.value;

    if(this.FormularioActualizar.valid){

      const empleado_actualizar:EmpleadoRegistro = {

        cedula: formulario.cedula,
        nombres: formulario.nombres,
        apellidos: formulario.apellidos,
        correo: formulario.correo,
        fechaDeNacimiento: formulario.fechaDeNacimiento,
        departamento: formulario.idDepartamento


      }

      this.api_act.PutActualizarEmpleados(empleado_actualizar,this.ant_ced,this.ant_cor).subscribe({

        next:(data:string)=>{

            this.ant_ced = empleado_actualizar.cedula;
            this.ant_cor = empleado_actualizar.correo;

            this.mensaje = data;

            

        },

        error:(err)=>{

          this.mensaje = err.error;
        }

      });


    }else{

      this.mensaje = "Por favor llene todos los campos";
    }

  
    
    
  }

}
