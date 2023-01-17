import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-canais_sugeridos',
  templateUrl: './canais-sugeridos.component.html',
  styleUrls: ['./canais-sugeridos.component.scss']
})

export class CanaisSugeridosComponent implements OnInit {
  canais:any;

  @Input() link_do_canal = "./";

  constructor(private route: ActivatedRoute, public service: UploadService) { }

  ngOnInit(): void {

    this.service.getCanaisSugeridos().subscribe((canais)=>{
      this.canais = canais;
    })
  }
}
