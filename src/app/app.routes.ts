import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { IndexGerenciaComponent } from './gerencia/index-gerencia/index-gerencia.component';
import { NuevoEmpleadoComponent } from './gerencia/nuevo-empleado/nuevo-empleado.component';
import { NuevaClaveComponent } from './gerencia/nueva-clave/nueva-clave.component';
import { VentanaEmpleadosComponent } from './gerencia/ventana-empleados/ventana-empleados.component';
import { ActualizarEmpleadoComponent } from './gerencia/actualizar-empleado/actualizar-empleado.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    
    {path:'',component: LoginComponent},
    {path:'gerencia',component: IndexGerenciaComponent, canActivate:[authGuard]},
    {path: 'nuevo-empleado', component: NuevoEmpleadoComponent},
    {path: 'nueva-clave', component: NuevaClaveComponent},
    {path: 'ventana-empleados',component:VentanaEmpleadosComponent},
    {path:'actualizar-empleado',component: ActualizarEmpleadoComponent}
   


];
