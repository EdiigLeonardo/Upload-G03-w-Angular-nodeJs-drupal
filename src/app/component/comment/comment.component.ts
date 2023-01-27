import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";
import {faFlag as faFlagSolid} from "@fortawesome/free-solid-svg-icons";
import {faFlag} from "@fortawesome/free-regular-svg-icons";


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
  @Input() id = "";
  @Input() sucess: boolean = false;
  openModal: boolean = false;
  isFlagged: boolean = false;
  faFlagSolid = faFlagSolid;
  faFlag = faFlag;

  constructor(public service: UploadService) {
  }

  ngOnInit(): void {
  }

  public toogleReport() {
    this.isFlagged = !this.isFlagged;
    let mid = parseInt(this.id);
    if (this.isFlagged) {
      this.service.postReportVideo(mid);
      window.alert("Report foi feito ");
    }
  }
}
