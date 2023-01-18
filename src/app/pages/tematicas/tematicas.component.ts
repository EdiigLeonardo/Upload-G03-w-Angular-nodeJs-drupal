import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-tematicas',
  templateUrl: './tematicas.component.html',
  styleUrls: ['./tematicas.component.scss']
})
export class TematicasComponent implements OnInit {

  tematicas: any;

  constructor(public service: UploadService) {
  }

  ngOnInit(): void {
    this.service.getTematicas().subscribe((tematica) => {
      this.tematicas = tematica;
    })
  }
}
