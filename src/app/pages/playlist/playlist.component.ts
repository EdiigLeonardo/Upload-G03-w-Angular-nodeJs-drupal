import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  videos: any = {};

  constructor(private route: ActivatedRoute, public service: UploadService) {
  }

  ngOnInit(): void {
    let id_playlist = this.route.snapshot.params['id_playlist']
    this.service.getPlaylistVideos(id_playlist).subscribe(videos => {
      this.videos = <any[]>videos;
    })
  }

}
