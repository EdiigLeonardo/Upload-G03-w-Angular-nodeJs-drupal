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

  favorites: number[] = this.readStore();

  getTags() {
    return this.http.get(BASE_URL + "/tags?t=" + Date.now());
  }

  getTagsVideos(id_tag: number) {
    return this.http.get(BASE_URL + "/tag/videos/" + id_tag);
  }

  getCanal(id: number) {
    return this.http.get(BASE_URL + "/canal/" + id);
  }

  getVideo(id_video: number) {
    return this.http.get(BASE_URL + "/video/" + id_video);
  }

  getChannelVideos(id: number) {
    return this.http.get(BASE_URL + "/canal/videos/" + id)
  }

  getCard(id: number) {
    return this.http.get(BASE_URL + "/canal/videos2/" + id)
  }

  getChannel(id: number) {
    return this.http.get(BASE_URL + "/canal/" + id)
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

  postComment(comment_name: string, comment_email: string, comment_body: string, comment_id: number): Promise<any> {
    let data = {
      "entity_id": [{"target_id": comment_id}],
      "entity_type": [{"value": "media"}],
      "comment_type": [{"target_id": "comentarios_do_video"}],
      "field_name": [{"value": "field_comentarios"}],
      "field_email": [{comment_email}],
      "field_nome": [{"value": comment_name}],
      "field_comentario": [
        {"value": comment_body, "format": "plain_text"}
      ]
    }
    console.table(data);
    return this.http.post(PANTHEON_URL + "/comment", data)
      .toPromise()
      .then(response => response)
      .catch(error => {
        //console.error(error);
        console.table(data);
        return error;
      });
  }

  /*postComment(comment_name: string, comment_email: string, comment_body: string, comment_id: number) {
    let data = {
      "entity_id": [{"target_id": comment_id}],
      "entity_type": [{"value": "media"}],
      "comment_type": [{"target_id": "comentarios_do_video"}],
      "field_name": [{"value": "field_comentarios"}],
      "field_email": [{comment_email}],
      "field_nome": [{"value": comment_name}],
      "field_comentario": [
        {"value": comment_body, "format": "plain_text"}
      ]
    }
    return this.http.post(PANTHEON_URL + "/comment/", data)
  }*/

  readStore(){
    // @ts-ignore
    let store = JSON.parse(localStorage.getItem("UPBNB_Favorites"));
    if(store !== null){
      return store;
    }
    return []
  }
  
}
