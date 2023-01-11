import { Component, OnInit } from '@angular/core';
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {faBookmark as faBookmarkSolid} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-video-home-box',
  templateUrl: './video-home-box.component.html',
  styleUrls: ['./video-home-box.component.scss']
})
export class VideoHomeBoxComponent implements OnInit {

  faBookmark = faBookmark;
  faBookmarkSolid = faBookmarkSolid;
  faShareNodes = faShareNodes;

  constructor() { }

  ngOnInit(): void {
  }

}
