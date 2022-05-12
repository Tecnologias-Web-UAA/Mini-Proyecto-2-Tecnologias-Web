import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../shared/usuarios.service';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[]=[];
    
  constructor(private usuariosService: UsuariosService) {

    
   }

  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuarios();
  }

}
