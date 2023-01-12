import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tag-videos',
  templateUrl: './tag-videos.component.html',
  styleUrls: ['./tag-videos.component.scss']
})
export class TagVideosComponent implements OnInit {

  tags: any = {};

  constructor(private route: ActivatedRoute, public service: UploadService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(q => {
      let id_tag = q['id_tag']
      this.service.getTagsVideos(id_tag).subscribe(tags => {
        this.tags = <any[]>tags;
      })
    })
  }

}
