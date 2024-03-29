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

  getLikes(id: number) {
    return this.http.get(BASE_URL + "/likes/" + id);
  }

  getDislikes(id: number) {
    return this.http.get(BASE_URL + "/dislikes/" + id);
  }

  postLike(video_id: number) {
    let data = {
      entity_id: [video_id],
      entity_type: ["media"],
      flag_id: [{"target_id": "like", "target_type": "flag"}],
      uid: ["0"],
    }
    this.http.post(PANTHEON_URL + "entity/flagging", data).subscribe((response) => {
      // @ts-ignore
      console.table("PostLiked Response", response);
    });
  }

  postDisLike(video_id: number) {
    let data = {
      entity_id: [video_id],
      entity_type: ["media"],
      flag_id: [{"target_id": "dislike", "target_type": "flag"}],
      uid: ["0"],
    }
    this.http.post(PANTHEON_URL + "entity/flagging", data).subscribe((response) => {
    });
  }

  postReportComment(comment_id: number) {
    let data = {
      entity_id: [comment_id],
      entity_type: ["comment"],
      flag_id: [{"target_id": "dislike", "target_type": "flag"}],
      uid: ["0"],
    }
    this.http.post(PANTHEON_URL + "entity/flagging", data).subscribe((response) => {
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

  postReportVideo(id: number){
    let data = {
      entity_id:[id],
      entity_type:["media"],
      flag_id:[{"target_id": "report","target_type": "flag"}],
      uid: ["0"]
    }
    console.log('Im Reposting: ')
    this.http.post(PANTHEON_URL + "entity/flagging", data).subscribe((response) => {
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
