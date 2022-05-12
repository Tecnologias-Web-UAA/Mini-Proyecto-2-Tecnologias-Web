import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../shared/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usuario!:Usuario;
  
  constructor(private usuarioService:UsuariosService) { 

    this.usuario=this.usuarioService.nuevoUsuario();
    
  }
  ngOnInit(): void {
    //this.usuario = this.usuarioService.nuevoUsuario();
  }
  registrar():void{
    
    
   
    console.log(this.usuario);
    setTimeout(() => {
      document.getElementById("confirmacion-button")?.click();
    }, 4000);
    this.usuarioService.agregarUsuario(this.usuario);
   
    this.usuario=this.usuarioService.nuevoUsuario();
  }
  limpia():void{
   this.usuario.nombre='';
   this.usuario.sexo='';
   this.usuario.correo='';
   this.usuario.fecha='';
  }  
}
