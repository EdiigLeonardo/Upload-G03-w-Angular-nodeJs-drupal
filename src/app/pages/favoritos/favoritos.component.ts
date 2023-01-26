import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  videos: any;
  allFavs: any;
  favoriteVideos: [] = [];

  constructor(private route: ActivatedRoute, public service: UploadService) { }

  ngOnInit(): void {
    this.service.getAllVideos().subscribe((videos) => {
      this.videos = videos;
      this.videos.forEach((value: object, i: number)=>{
        // @ts-ignore
        if(this.service.isFavorite(parseInt(value.mid))){
          // @ts-ignore
          this.favoriteVideos.push(value);
          this.allFavs = this.favoriteVideos;
          console.log("Is in: ")
        }

      })
      //console.table(this.videos);
    })
  }



}
