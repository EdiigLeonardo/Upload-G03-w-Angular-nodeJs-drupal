import { Component, OnInit } from '@angular/core';
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-canais_sugeridos',
  templateUrl: './canais-sugeridos.component.html',
  styleUrls: ['./canais-sugeridos.component.scss']
})

export class CanaisSugeridosComponent implements OnInit {

  title: any;
  constructor(private service: UploadService) { }

  ngOnInit(): void {
/*    this.service.getCanaisSugeridos().subscribe((title)=>{
      this.title = <any[]> title;
    })*/
  }
}
