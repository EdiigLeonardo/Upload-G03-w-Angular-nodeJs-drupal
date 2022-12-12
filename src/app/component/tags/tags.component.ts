import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags: any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getTags().subscribe((tags)=>{
      this.tags = <any> tags;
      console.log(this.tags)
    })
}
}
