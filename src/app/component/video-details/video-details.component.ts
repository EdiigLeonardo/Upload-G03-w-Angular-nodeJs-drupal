import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  video: any = [];

  constructor() { }

  ngOnInit(): void {
    // let id_video = this.route.snapshot.params['id'];
    // this.service.getVideo(id_video).subscribe((video) =>
    // this.video = <any[]>video)
  }
}
