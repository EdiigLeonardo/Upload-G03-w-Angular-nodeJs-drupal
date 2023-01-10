import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


const BASE_URL = "https://dev-upload-project-03.pantheonsite.io/api"
const PANTHEON_URL = "https://dev-upload-project-03.pantheonsite.io/"
const MEDIA_LINK = "https://dev-upload-project-03.pantheonsite.io/sites/default/files/2022-12/";

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  constructor(private http: HttpClient) {
  }

  getTags() {
    return this.http.get(BASE_URL + "/tags?t=" + Date.now());
  }

  getCanal(id_canal: number) {
    return this.http.get(BASE_URL + "/canal/" + id_canal);
  }

  getVideo(id_video: number) {
    return this.http.get(BASE_URL + "/video/" + id_video);
  }

  getChannelVideos(id_canal: number) {
    return this.http.get(BASE_URL + "/canal/videos/" + id_canal)
  }

  getChannel(id_canal: number) {
    return this.http.get(BASE_URL + "/canal/" + id_canal)
  }

  getChannels() {
    return this.http.get(BASE_URL + "/canal")
  }

  getPlaylists() {
    return this.http.get(BASE_URL + "/playlists")
  }

  getVideos() {
    return this.http.get(BASE_URL + "/videos?limit=256");
  }


  editTagsFromVideo(value: string) {
    const list_of_values = value.split(",")

    let result = list_of_values.map((value) => {
      return "#" + value + " "
    })
    return result.join("")
  }

  addUrlOfSrc(url: string) {
    return PANTHEON_URL + url;
  }

  addMedia(media: string) {
    return MEDIA_LINK + media;
  }
}
