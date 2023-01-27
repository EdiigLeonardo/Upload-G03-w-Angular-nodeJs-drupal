import {Component, OnInit, EventEmitter, Output, OnChanges, SimpleChanges, ChangeDetectorRef} from '@angular/core';
import {faThumbsUp as faThumbsUpSolid} from "@fortawesome/free-solid-svg-icons";
import {faThumbsDown as faThumbsDownSolid} from "@fortawesome/free-solid-svg-icons";
import {faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {faFlag as faFlagSolid} from "@fortawesome/free-solid-svg-icons";
import {faFlag} from "@fortawesome/free-regular-svg-icons";
import {UploadService} from "../../service/upload.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  faFlag = faFlag;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faThumbsUpSolid = faThumbsUpSolid;
  faThumbsDownSolid = faThumbsDownSolid;
  video: any = {};
  canal: any = {};
  comment: any = {};
  videos: any = {};
  pronto: boolean = false;
  isLiked: boolean = false;
  isDisLiked: boolean = false;
  isFlagged: boolean = false;
  faFlagSolid = faFlagSolid;
  numero: any;
  likes: any = {};
  @Output() post = new EventEmitter<any>();
  dislikes: any = {};


  constructor(private route: ActivatedRoute, public service: UploadService,
              private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {
  }

  id = this.route.snapshot.params['id']

  ngOnInit(): void {
    this.route.params.subscribe(q => {
      let id_video = q["id"];
      this.service.getVideo(id_video).subscribe(video => {
        this.video = <any[]>video;
        this.video = this.video[0]
        this.video.field_media_oembed_video = this.video.field_media_oembed_video.replace('watch?v=', 'embed/')
        this.video.field_media_oembed_video = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.field_media_oembed_video)

        this.video.field_tags = this.video.field_tags.replaceAll(', ', ' #')

        this.service.getLikes(this.video.mid).subscribe(like => {
          this.likes = <any[]>like;
          if (Object.keys(this.likes).length !== 0) {
            this.likes = this.likes[0];

          }
        })

        this.service.getDislikes(this.video.mid).subscribe(dislike => {
          this.dislikes = <any[]>dislike;
          if (Object.keys(this.dislikes).length !== 0) {
            this.dislikes = this.dislikes[0];
          }
        })

        this.service.getCanal(this.video.field_canal).subscribe(canal => {
          this.canal = <any[]>canal;
          this.canal = this.canal[0]

          this.service.getCard(this.video.field_canal).subscribe(videos => {
            this.videos = <any[]>videos;


            this.service.getComentariosVideo(this.video.mid).subscribe(comment => {
              this.comment = <any[]>comment;
            })
          })
        })
      });
      this.pronto = true;
    });
  }

  addComment(comment: any) {
    this.comment.unshift(comment)
  }

  public toggleLike() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.service.postLike(this.id);
      this.post.emit({entity_id: this.id});
    }
  }

  public toggleDislike() {
    this.isDisLiked = !this.isDisLiked;
    if (this.isDisLiked) {
      this.service.postDisLike(this.id);
      this.post.emit({entity_id: this.id});
      this.cdr.detectChanges();
    }
  }

  public toogleReport() {
    this.isFlagged = !this.isFlagged;
    let mid = parseInt(this.id);
    if (this.isFlagged) {
      this.service.postReportVideo(mid);
    }
  }
  addLikes(contador_likes: any) {
    this.likes.Contador_de_likes += 1
    console.log(this.likes.Contador_de_likes += 1);
  }
}
