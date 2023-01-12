import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})

export class TagsComponent implements OnInit {

  tags: any;

  constructor(private service: UploadService) {
  }

  ngOnInit(): void {
    this.service.getTags().subscribe((tags) => {
      this.tags = <any[]>tags;
      console.log(this.tags)
    })
  }
}
