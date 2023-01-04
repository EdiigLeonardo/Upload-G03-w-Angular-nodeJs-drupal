import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private service: UploadService) {
  }

  ngOnInit(): void {
  }
}

