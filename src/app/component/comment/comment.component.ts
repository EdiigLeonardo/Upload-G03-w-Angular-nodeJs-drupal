import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() name = "";
  @Input() img = "";
  @Input() comment = "";
  @Input() data_upload = "";

  constructor(public service: UploadService) {
  }

  ngOnInit(): void {
  }
}
