import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comment_name: string = "";
  comment_email: string = "";
  comment_body: string = "";
  id = this.route.snapshot.params['id'];

  public submitValuesVideo() {
    this.service.postComment(this.comment_name, this.comment_email, this.comment_body, this.id);
    console.log(this.comment_name, this.comment_email, this.comment_body, this.id)
  }

  constructor(public service: UploadService, public route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }
}
