import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }
  buscarUnHeroe(nombre:string){

  
    this.router.navigate(['/buscador',nombre]);
  }
}
