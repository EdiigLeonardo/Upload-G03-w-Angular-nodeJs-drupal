import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UploadService} from "../../service/upload.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-comment-canal',
  templateUrl: './post-comment-canal.component.html',
  styleUrls: ['./post-comment-canal.component.scss']
})
export class PostCommentCanalComponent implements OnInit {

  comment_name: string = "";
  comment_email: string = "";
  comment_body: string = "";
  id = this.route.snapshot.params['id'];
  @Output() post = new EventEmitter<any>();
  
  public submitValuesCanal() {
    this.service.postCommentCanal(this.comment_name, this.comment_email, this.comment_body, this.id);
    this.post.emit({field_nome: this.comment_name, field_comentario: this.comment_body});
    this.comment_name = "", this.comment_email = "", this.comment_body = "";
  }

  constructor(public service: UploadService, public route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }
}
