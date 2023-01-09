import {Component, OnInit} from '@angular/core';
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import {UploadService} from "../../service/upload.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  video: any = {};
  canal: any = {};


  videos: any = {};
  pronto: boolean = false;

  constructor(private route: ActivatedRoute, public service: UploadService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    let id_video = this.route.snapshot.params['id'];
    this.service.getVideo(id_video).subscribe(video => {
      this.video = <any[]>video;
      this.video = this.video[0]
      this.video.field_media_oembed_video = this.video.field_media_oembed_video.replace('watch?v=', 'embed/')
      this.video.field_media_oembed_video = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.field_media_oembed_video)

      this.video.field_tags = this.video.field_tags.replaceAll(', ', ' #')

      this.service.getCanal(this.video.field_canal).subscribe(canal => {
        this.canal = <any[]>canal;
        this.canal = this.canal[0]
        console.log(this.canal)

        this.service.getChannelVideos(this.video.field_canal).subscribe(videos => {
          this.videos = <any[]>videos;
          console.log(this.videos)
        })
      })
    });
    this.pronto = true;
  }

}
