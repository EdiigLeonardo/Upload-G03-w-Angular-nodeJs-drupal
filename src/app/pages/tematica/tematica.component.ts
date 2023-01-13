import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-tematica',
  templateUrl: './tematica.component.html',
  styleUrls: ['./tematica.component.scss']
})
export class TematicaComponent implements OnInit {

  tematica: any = {};

  constructor(private route: ActivatedRoute, public service: UploadService) {
  }

  ngOnInit(): void {
    let id_tematica = this.route.snapshot.params['id_tematica']
    this.service.getTematica(id_tematica).subscribe(tematica => {
      this.tematica = <any[]>tematica;
      console.log(this.tematica)
    })
  }
}
