import { Component } from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  faStar = faStar
  title = 'upload-project';
}
