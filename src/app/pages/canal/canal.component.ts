import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.scss']
})
export class CanalComponent implements OnInit {
  channelVideos: any;
  channel: any = {};
  comment: any = {};

  constructor(private route: ActivatedRoute, public service: UploadService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.service.getChannelVideos(id).subscribe((videos) => {
      this.channelVideos = videos;
    })

    this.service.getChannel(id).subscribe((canal) => {
      this.channel = canal;
    })

    this.service.getComentariosCanal(id).subscribe(comment => {
      this.comment = <any[]>comment;
      console.log(this.comment)
    })
  }
}
