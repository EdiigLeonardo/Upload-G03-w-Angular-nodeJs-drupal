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

  getTagsVideos(id_tag: number) {
    return this.http.get(BASE_URL + "/tag/videos/" + id_tag);
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

  getCard(id_canal: number) {
    return this.http.get(BASE_URL + "/canal/videos2/" + id_canal)
  }

  getChannel(id_canal: number) {
    return this.http.get(BASE_URL + "/canal/" + id_canal)
  }

  getChannels() {
    return this.http.get(BASE_URL + "/canal")
  }

  getTematicas() {
    return this.http.get(BASE_URL + "/tematicas")
  }

  getTematica(id_tematica: number) {
    return this.http.get(BASE_URL + "/tematica/" + id_tematica)
  }

  getPlaylists() {
    return this.http.get(BASE_URL + "/playlists")
  }

  getPlaylistVideos(id_playlist: number) {
    return this.http.get(BASE_URL + "/playlist/videos/" + id_playlist)
  }

  getVideos() {
    return this.http.get(BASE_URL + "/video");
  }

  getCanaisSugeridos() {
    return this.http.get(BASE_URL + "/canais_sugeridos?t=" + Date.now());
  }

  getTematicasSugeridas() {
    return this.http.get(BASE_URL + "/tematicas_sugeridas?t=" + Date.now());
  }

  getComentariosVideo(id: number) {
    return this.http.get(BASE_URL + "/comentarios_do_video/" + id);
  }

  getComentariosCanal(id: number) {
    return this.http.get(BASE_URL + "/comentarios_do_canal/" + id);
  }

  public editTagsFromVideo(value: string) {
    const list_of_values = value.split(",")

    let result = list_of_values.map((value) => {
      return "#" + value + " "
    })
    return result.join("")
  }

  public addUrlOfSrc(url: string) {
    return PANTHEON_URL + url;
  }

  postComment() {
  }

}
