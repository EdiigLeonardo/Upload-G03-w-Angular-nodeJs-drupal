import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-box_page',
  templateUrl: './box_page.html',
  styleUrls: ['./box_page.component.scss']
})
export class CanalBoxComponent implements OnInit {
  @Input() img_de_capa = "";
  @Input() img_de_perfil = "";
  @Input() nome = "";
  @Input() link = "";
  @Input() botao = "";
  @Input() router_da_pagina = "";
  @Input() nome_da_pagina = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
