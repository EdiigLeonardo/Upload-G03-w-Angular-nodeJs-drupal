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
  channel: any;
  comment: any = {};

  constructor(private route: ActivatedRoute, public service: UploadService) {
  }

  ngOnInit(): void {
    let id_canal = this.route.snapshot.params['id_canal'];

    this.service.getChannelVideos(id_canal).subscribe((videos) => {
      this.channelVideos = videos;
    })

    this.service.getChannel(id_canal).subscribe((canal) => {
      this.channel = canal;
    })

    this.service.getComentariosCanal(this.channel.mid).subscribe(comment => {
      this.comment = <any[]>comment;
      console.log(this.comment)
    })
  }
}
