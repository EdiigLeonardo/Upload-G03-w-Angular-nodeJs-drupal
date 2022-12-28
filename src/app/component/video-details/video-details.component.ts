import { Component, OnInit } from '@angular/core';
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import {UploadService} from "../../service/upload.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  video: any = {};

  constructor(private route: ActivatedRoute, private service: UploadService) { }

  ngOnInit(): void {
    let id_video = this.route.snapshot.params['id'];
    this.service.getVideo(id_video).subscribe(video => {
      this.video = <any[]>video;
      this.video = this.video[0]
        // console.log(this.video)
      })
  }
}
