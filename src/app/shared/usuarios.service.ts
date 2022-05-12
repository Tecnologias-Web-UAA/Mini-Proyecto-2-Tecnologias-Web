import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  array!:Usuario[];
  constructor() {
    this.array = JSON.parse(localStorage.getItem('users') || '[]');
    
   }
  getUsuarios():Usuario[]{
    return this.array;
  }
  agregarUsuario(usuario:Usuario):void{
    this.array.push(usuario);
    localStorage.setItem('users',JSON.stringify(this.array))
  }
  
  nuevoUsuario():Usuario{
    return {
      nombre:'',
      sexo:'',
      correo:'',
      fecha:''
    };
  }
}
