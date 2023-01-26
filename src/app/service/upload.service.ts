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

  readStore() {
    // @ts-ignore
    let store: string[] = localStorage.getItem("UploadStore");
    if (store !== null) {
      //@ts-ignore
      const STORE_2 = store.split(",");
      STORE_2.forEach((value: any, index: number) => {
        value = parseInt(value);
        STORE_2[index] = value;
      })
      return STORE_2;
    }
    return []
  }

  favorites: any[] = this.readStore();

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

  getAllVideos() {
    return this.http.get(BASE_URL + "/video2");
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

  editTagsFromVideo(value: string) {
    const list_of_values = value.split(",")

    let result = list_of_values.map((value) => {
      return "#" + value + " "
    })
    return result.join("")
  }

  public addUrlOfSrc(url: string) {
    return PANTHEON_URL + url;
  }

  Likes(id: number) {
    return this.http.get(BASE_URL + "/likes/" + id);
  }

  postLike(numero_de_likes: number) {
    let p = {
      entity_id: ["8"],
      entity_type: ["media"],
      flag_id: [{"target_id": "like", "target_type": "flag"}],
      uid: ["0"],
      Contador_de_likes: [{value: numero_de_likes}],
    }
    this.http.post(PANTHEON_URL + "entity/flagging", p).subscribe(() => {
    });
  }

  postComment(comment_name: string, comment_email: string, comment_body: string, id: number) {
    let data = {
      entity_id: [{target_id: id}],
      entity_type: [{value: "media"}],
      comment_type: [{target_id: "comentarios_do_video"}],
      field_name: [{value: "field_comentarios"}],
      field_email: [{value: comment_email}],
      field_nome: [{value: comment_name}],
      field_comentario: [{value: comment_body, format: "plain_text"}]
    }

    this.http.post(PANTHEON_URL + "comment", data).subscribe(() => {
    });
  }

  postCommentCanal(comment_name: string, comment_email: string, comment_body: string, id: number) {
    let data = {
      entity_id: [{target_id: id}],
      entity_type: [{value: "node"}],
      comment_type: [{target_id: "comentarios_do_canal"}],
      field_name: [{value: "field_comentarios"}],
      field_email: [{value: comment_email}],
      field_nome: [{value: comment_name}],
      field_comentario: [{value: comment_body, format: "plain_text"}]
    }

    this.http.post(PANTHEON_URL + "comment", data).subscribe(() => {
    });
  }


  toogleFavorite(id: number) {
    if (!this.isFavorite(id)) {
      this.favorites.push(id)
      this.readStore()
      // @ts-ignore
      localStorage.setItem("UploadStore", this.favorites)
    } else {
      let index = this.favorites.indexOf(id)
      // @ts-ignore
      this.favorites.splice(index, 1)
      this.readStore()
      // @ts-ignore
      localStorage.setItem("UploadStore", this.favorites)
    }
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id);
  }


}
