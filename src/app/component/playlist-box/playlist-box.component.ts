import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-playlist-box',
  templateUrl: './playlist-box.component.html',
  styleUrls: ['./playlist-box.component.scss']
})
export class PlaylistBoxComponent implements OnInit {
  @Input() img_de_capa = "";
  @Input() img_de_perfil = "";
  @Input() nome_da_playlist = "";
  @Input() link_da_playlist = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
