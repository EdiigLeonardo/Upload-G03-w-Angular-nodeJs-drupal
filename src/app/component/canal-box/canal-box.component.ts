import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-canal-box',
  templateUrl: './canal-box.component.html',
  styleUrls: ['./canal-box.component.scss']
})
export class CanalBoxComponent implements OnInit {
  @Input() img_de_capa = "";
  @Input() img_de_perfil = "";
  @Input() nome_do_canal = "";
  @Input() link_do_canal = "";

  constructor() { }

  ngOnInit(): void {
  }

}
