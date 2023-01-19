import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comment_name?: string = "";
  comment_email?: string = "";
  comment_body?: string = "";

  constructor(public service: UploadService) {

  }

  ngOnInit(): void {
  }

}
