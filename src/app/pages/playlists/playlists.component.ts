import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  playlists: any;

  constructor(private route: ActivatedRoute, public service: UploadService) {
  }

  ngOnInit(): void {

    this.service.getPlaylists().subscribe((playlist) => {
      this.playlists = playlist;
    })
  }
}
