import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-canais_sugeridos',
  templateUrl: './canais-sugeridos.component.html',
  styleUrls: ['./canais-sugeridos.component.scss']
})

export class CanaisSugeridosComponent implements OnInit {


  canal:any;
  channel:any;

  constructor(private route: ActivatedRoute, public service: UploadService) { }

  ngOnInit(): void {



    this.service.getCanaisSugeridos().subscribe((canal)=>{
      this.channel = canal;
    })
  }
}
