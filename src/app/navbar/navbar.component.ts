import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name:string="";
  constructor(private router:Router) {

   }

  ngOnInit(): void {
    this.name="";
  }
  buscarUnHeroe(nombre:string){
    this.ngOnInit();
  
    this.router.navigate(['/buscador',nombre]);
  }
}
