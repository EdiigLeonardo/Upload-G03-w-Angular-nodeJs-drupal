import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-canais',
  templateUrl: './canais.component.html',
  styleUrls: ['./canais.component.scss']
})
export class CanaisComponent implements OnInit {

  channel: any;

  constructor(private route: ActivatedRoute, public service: UploadService) { }

  ngOnInit(): void {

    this.service.getChannels().subscribe((canal)=>{
      this.channel = canal;
    })
  }
}
