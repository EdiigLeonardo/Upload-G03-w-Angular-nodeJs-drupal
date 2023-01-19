import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Videos: any;

  constructor(private route: ActivatedRoute, public service: UploadService) {
  }

  ngOnInit(): void {
    this.service.getVideos().subscribe((videos) => {
      this.Videos = videos;
    })
  }

}
