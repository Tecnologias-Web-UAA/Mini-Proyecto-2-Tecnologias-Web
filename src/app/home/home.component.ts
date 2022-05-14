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
 
  datos!:FormGroup;
  constructor(private usuarioService:UsuariosService) { 

    this.datos=new FormGroup({
      nombre:new FormControl('',[Validators.required,Validators.minLength(3)]),
      sexo:new FormControl('',Validators.required),
      correo:new FormControl('',[Validators.required,Validators.email]),
      fecha:new FormControl('',Validators.required)
      
    });
  }
  ngOnInit(): void {
   
  }
  registrar():void{
    
    
   
    
    setTimeout(() => {
      document.getElementById("confirmacion-button")?.click();
    }, 4000);
     this.usuarioService.agregarUsuario(this.datos.value);
   console.log(this.datos.value.nombre);
   
  }
  limpia():void{
   this.datos.reset();
   
  }  
  reg():void{
    
    document.getElementById('reg')?.setAttribute('disabled','');
  }
}
