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

  async submitValues() {
    try {
      const response = await this.service.postComment(this.comment_name,this.comment_email,this.comment_body, this.id);
      this.comment_name= "";
      this.comment_email= "";
      this.comment_body= "";
    } catch (error) {
      console.error(error);
    }
  }


  constructor(public service: UploadService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }
}
