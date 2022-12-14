import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../../service/service.service";


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  video: any = [];

  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  ngOnInit(): void {
    let id_video = this.route.snapshot.params['id'];
    this.service.getVideo(id_video).subscribe((video) =>
    this.video = <any[]>video)
  }
}
