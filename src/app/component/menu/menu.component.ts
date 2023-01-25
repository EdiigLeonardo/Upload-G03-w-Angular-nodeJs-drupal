import { Component, OnInit } from '@angular/core';
import {faBarsStaggered} from "@fortawesome/free-solid-svg-icons"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {faPlay} from "@fortawesome/free-solid-svg-icons"
import {faClapperboard} from "@fortawesome/free-solid-svg-icons"
import {faBars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faBarsStaggered = faBarsStaggered;
  faHouse = faHouse;
  faPlay = faPlay;
  faClapperboard = faClapperboard;
  faBars = faBars;
  faHeart = faHeart;
  toogleView = false;

  clickView(){
    this.toogleView = !this.toogleView
  }

  constructor() { }

  ngOnInit(): void {
  }

}
