import { Component } from '@angular/core';
import { ApiNuevoEmpleadoServiceService } from '../../servicios/api-nuevo-empleado.service.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators , FormsModule} from '@angular/forms';
import { OnInit } from '@angular/core';
import { Empleado, Departamento } from '../../Modelo/EmpleadoModel';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { EmpleadoRegistro } from '../../Modelo/EmpleadoRegistroModel';

@Component({
  selector: 'app-nuevo-empleado',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './nuevo-empleado.component.html',
  styleUrl: './nuevo-empleado.component.css'
})
export class NuevoEmpleadoComponent implements OnInit {


  FormularioNuevoEmpleado!: FormGroup;
  mensaje: string = "";
  departamentos: string[] = [];


  constructor(private form:FormBuilder, private api:ApiNuevoEmpleadoServiceService){ }


  ngOnInit(): void {

    this.FormularioNuevoEmpleado = this.form.group({

      cedula:["",Validators.required],
      nombres:["",Validators.required],
      apellidos:["",Validators.required],
      correo:["",Validators.required],
      fechaDeNacimiento:["",Validators.required],
      departamento:["",Validators.required]

      

    });

    this.CargarDatos();
  }


  CargarDatos():void{

    this.api.GetALLDepartamentos().subscribe(data =>{

      this.departamentos = data;
      

    });



  }

  submit():void{

    const datos = this.FormularioNuevoEmpleado.value;

    if(this.FormularioNuevoEmpleado.valid){

         const empleado: EmpleadoRegistro = {

          cedula: datos.cedula,
          nombres: datos.nombres,
          apellidos: datos.apellidos,
          correo: datos.correo,
          fechaDeNacimiento: datos.fechaDeNacimiento,
          departamento: datos.departamento
        }

        console.log("empleado:" + empleado);

        this.api.PostRegistrarNuevoCliente(empleado).subscribe({

          next:(data) =>{
            
            this.mensaje = "Empleado registrado con exito"
          },

          error:(err) =>{

            this.mensaje = err.error;
            

          }


          
          

        })

        



    }else{

      this.mensaje = "Por favor llene todos los campos";
    }

  }

}
