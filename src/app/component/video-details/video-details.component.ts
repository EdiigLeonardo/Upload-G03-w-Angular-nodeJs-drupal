import { Component, OnInit } from '@angular/core';
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {faThumbsDown} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor() { }

  ngOnInit(): void {
  }
}
