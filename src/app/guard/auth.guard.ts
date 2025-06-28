import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { JwtModel } from '../Modelo/JWTModel';


export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  
  if (!isPlatformBrowser(platformId)) {
   
    return true; 
  }

  const token = localStorage.getItem('token');

  function TokenExpirado(tok:string):boolean{

    try{

       const payloadbase64 = tok.split('.')[1];
       if (!payloadbase64) return true;
       const json = atob(payloadbase64);  
       const payload:JwtModel = JSON.parse(json);
      
       const tiempo = Math.floor(Date.now() /1000);

       return payload.exp < tiempo;


    }catch(err){
      console.log("error del token expirado" + err);
      return true;
    }

  }

  if(!token || TokenExpirado(token)){
    localStorage.removeItem('token');
    router.navigate(['']);
    return false;
  }
  
  return true;
};
