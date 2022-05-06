import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  title:string="pipe";
  video:string="5bpF60IuD9Y";
  constructor() { }

  ngOnInit(): void {
  }

}
