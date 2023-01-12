import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommentsComponent} from './component/comments/comments.component';
import {CommentComponent} from './component/comment/comment.component';
import {NavComponent} from './component/nav/nav.component';
import {MiniVideoComponent} from './component/mini-video/mini-video.component';
import {FormsModule} from "@angular/forms";
import {PlaylistComponent} from './pages/playlist/playlist.component';
import {MenuComponent} from './component/menu/menu.component';
import {TagsComponent} from './component/tags/tags.component';
import {HttpClientModule} from "@angular/common/http";
import {VideoDetailsComponent} from './pages/video-details/video-details.component';
import {HomeComponent} from './pages/home/home.component';
import {CanaisSugeridosComponent} from './component/canais_sugeridos/canais-sugeridos.component';
import {PlaylistsComponent} from './pages/playlists/playlists.component';
import {TematicasComponent} from './pages/tematicas/tematicas.component';
import {CanalComponent} from './pages/canal/canal.component';
import {CanaisComponent} from './pages/canais/canais.component';
import {TematicasSugeridasComponent} from './component/tematicas-sugeridas/tematicas-sugeridas.component';
import {CanalBoxComponent} from './component/canal-box/canal-box.component';
import {PlaylistBoxComponent} from './component/playlist-box/playlist-box.component';
import {VideoHomeBoxComponent} from './component/video-home-box/video-home-box.component';
import {TagVideosComponent} from './pages/tag-videos/tag-videos.component';
import { TematicasBoxComponent } from './component/tematicas-box/tematicas-box.component';
import { TematicaComponent } from './pages/tematica/tematica.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentComponent,
    NavComponent,
    MiniVideoComponent,
    PlaylistComponent,
    MenuComponent,
    TagsComponent,
    VideoDetailsComponent,
    HomeComponent,
    CanaisSugeridosComponent,
    PlaylistsComponent,
    TematicasComponent,
    CanalComponent,
    CanaisComponent,
    TematicasSugeridasComponent,
    CanalBoxComponent,
    PlaylistBoxComponent,
    VideoHomeBoxComponent,
    TagVideosComponent,
    TematicasBoxComponent,
    TematicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
