import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-boton-mostrar-clave',
  imports: [],
  standalone: true,
  templateUrl: './boton-mostrar-clave.component.html',
  styleUrl: './boton-mostrar-clave.component.css'
})
export class BotonMostrarClaveComponent {

  @Input() id!: string ;

  visible: boolean = false;

  MostrarClave():void{

    const password = document.getElementById(this.id) as HTMLInputElement;


    if(password){

      if(password.type == 'text'){

        password.type = 'password';

        this.visible = false;
      
      }else{

        password.type = 'text';

        this.visible = true;
      }

    

    }


  }



}
