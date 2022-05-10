import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  [x: string]: any;
  nombreh:string="";
  indice:number=0;
  miheroe!:Heroe;
  constructor(private heroeService:HeroeService,private activatedRoute:ActivatedRoute,private router:Router) { 
    this.activatedRoute.params.subscribe(params=>{
      this.nombreh = params['nombreh'];
      this.indice = this.heroeService.searchUnHeroe(this.nombreh);
      console.log(this.indice);

      if(this.indice != -1){
        this.miheroe = this.heroeService.getUnHeroe(this.indice);
      }



    });



  }

  ngOnInit(): void {

    setTimeout(()=>{
      this.router.navigate(['/heroes']);
    },6000);

  }

}
