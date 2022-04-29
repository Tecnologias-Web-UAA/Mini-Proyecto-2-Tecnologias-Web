import { Component, OnInit,Input } from '@angular/core';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-unheroe',
  templateUrl: './unheroe.component.html',
  styleUrls: ['./unheroe.component.scss']
})
export class UnheroeComponent implements OnInit {
  @Input() heroe!:Heroe;
  myid:number=0;
  constructor(private heroeService:HeroeService,private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params=>{
      
      
      console.log(this.myid);
      this.heroe = heroeService.getUnHeroe( params['id']);


    });


  }

  ngOnInit(): void {
  }

}
