import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tematicas-box',
  templateUrl: './tematicas-box.component.html',
  styleUrls: ['./tematicas-box.component.scss']
})
export class TematicasBoxComponent implements OnInit {

  @Input() img_de_capa = "";
  @Input() nome = "";
  @Input() link = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
