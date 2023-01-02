import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


const BASE_URL = "https://dev-upload-project-03.pantheonsite.io/api"
const PANTHEON_URL = "https://dev-upload-project-03.pantheonsite.io/"
const MEDIA_LINK = "https://dev-upload-project-03.pantheonsite.io/media/";

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  constructor(private http: HttpClient) {}

  getTags() {
    return this.http.get(BASE_URL + "/tags");
  }

  // getUser(id_user:number){
  //   return this.http.get(BASE_URL + "/user/" + id_user);
  // }

  getCanal(id_canal:number){
    return this.http.get(BASE_URL + "/canal/" + id_canal);
  }

  getVideo(id_video:number){
    return this.http.get(BASE_URL + "/video/" + id_video);
  }

  getChannelVideos(id_canal:number){
    return this.http.get(BASE_URL + "/canal/videos/" + id_canal)
  }

  editTagsFromVideo(value: string){
    const list_of_values = value.split(",")

    let result = list_of_values.map((value)=>{
      return "#" + value + " "
    })
    return result.join("")
  }

  addUrlOfSrc(url: string){
    return PANTHEON_URL + url;
  }

  addLinkToNode(media:string){
    return MEDIA_LINK + media;
  }
}
