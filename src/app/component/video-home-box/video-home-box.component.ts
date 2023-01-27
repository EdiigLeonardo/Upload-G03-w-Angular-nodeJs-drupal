import {Component, Input, OnInit} from '@angular/core';
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {faBookmark as faBookmarkSolid} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-video-home-box',
  templateUrl: './video-home-box.component.html',
  styleUrls: ['./video-home-box.component.scss']
})
export class VideoHomeBoxComponent implements OnInit {
  //id = this.route.snapshot.params['id'];

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faBookmark = faBookmark;
  faBookmarkSolid = faBookmarkSolid;
  faShareNodes = faShareNodes;
  faComment = faComment;

  @Input() thumb = "";
  @Input() min_video_profile_photo = "";
  @Input() video_duration = "";
  @Input() tags = "";
  @Input() data_upload = "";
  @Input() video_title = "";
  @Input() video_src = "";
  @Input() canal = "";
  @Input() link_to_video = "";
  @Input() created = "";
  @Input() id = "";
  likes : any;
  comment: any;
  num_of_comments = 0;

  toggleFavorite(){
    let mid = parseInt(this.id);
    this.service.toogleFavorite(mid);
  }

  get favorite(){
    let mid = parseInt(this.id);
    return this.service.isFavorite(mid);
  }


  constructor(private route: ActivatedRoute, public service: UploadService) { }

  ngOnInit(): void {
    let mid = parseInt(this.id);

    this.service.getLikes(mid).subscribe(like => {
      this.likes = <any[]>like;
      if(Object.keys(this.likes).length !== 0){
        this.likes = this.likes[0];
      }
    })

    this.service.getComentariosVideo(mid).subscribe(comment => {
      this.comment = <any[]>comment;

      this.num_of_comments = Object.keys(this.comment).length
    })
  }

}
