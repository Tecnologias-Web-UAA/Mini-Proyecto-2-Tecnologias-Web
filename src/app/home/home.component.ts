import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../shared/usuarios.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usuario!:Usuario;
  datos!:FormGroup;
  constructor(private usuarioService:UsuariosService) { 

    this.usuario=this.usuarioService.nuevoUsuario();
    this.datos=new FormGroup({
      nombre:new FormControl('',[Validators.required,Validators.minLength(3)]),
      sexo:new FormControl('',Validators.required),
      correo:new FormControl('ejemplo@outlook.com',[Validators.required,Validators.email]),
      fecha:new FormControl('',Validators.required)
      
    });
  }
  ngOnInit(): void {
   
  }
  registrar():void{
    
    
   
    console.log(this.usuario);
    setTimeout(() => {
      document.getElementById("confirmacion-button")?.click();
    }, 4000);
     this.usuarioService.agregarUsuario(this.datos.value);
   console.log(this.datos.value.nombre);
   
  }
  limpia():void{
   this.datos.reset();
   
  }  
}
