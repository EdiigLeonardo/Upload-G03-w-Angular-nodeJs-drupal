import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


const BASE_URL = "https://dev-upload-project-03.pantheonsite.io/api"

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) {}

  getTags() {
    return this.http.get(BASE_URL + "/tags");
  }

  getVideo(id_video:number){
    return this.http.get(BASE_URL + "/video/" + id_video);
  }
}
