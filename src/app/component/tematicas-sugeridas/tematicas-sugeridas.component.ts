import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-tematicas-sugeridas',
  templateUrl: './tematicas-sugeridas.component.html',
  styleUrls: ['./tematicas-sugeridas.component.scss']
})
export class TematicasSugeridasComponent implements OnInit {
  tematicas_sugeridas: any;
  @Input() link_da_tematica = "./";
  @Input() field_imagem = "";
  @Input() title = "";
  @Input() user_picture = "";
  @Input() name = "";

  constructor(private route: ActivatedRoute, public service: UploadService) { }

  ngOnInit(): void {
    this.service.getTematicasSugeridas().subscribe((tematicas)=>{
      this.tematicas_sugeridas = tematicas;
    })
  }

}
