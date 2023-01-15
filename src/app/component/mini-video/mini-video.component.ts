import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-mini-video_details',
  templateUrl: './mini-video.component.html',
  styleUrls: ['./mini-video.component.scss']
})

export class MiniVideoComponent implements OnInit {
  @Input() thumb = "";
  @Input() min_video_profile_photo = "";
  @Input() video_duration = "";
  @Input() tags = "";
  @Input() data_upload = "";
  @Input() video_title = "";
  @Input() video_src = "";
  @Input() canal = "";
  @Input() link_to_video = "";


  constructor(private service: UploadService) {
  }

  ngOnInit(): void {
  }

}
