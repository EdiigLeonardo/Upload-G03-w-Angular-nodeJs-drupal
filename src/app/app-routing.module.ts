import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VideoDetailsComponent} from "./pages/video-details/video-details.component";
import {HomeComponent} from "./pages/home/home.component";
import {TematicasComponent} from "./pages/tematicas/tematicas.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {CanalComponent} from "./pages/canal/canal.component";
import {CanaisComponent} from "./pages/canais/canais.component";
import {PlaylistComponent} from "./pages/playlist/playlist.component";
import {CanaisSugeridosComponent} from "./component/canais_sugeridos/canais-sugeridos.component";
import {TagVideosComponent} from "./pages/tag-videos/tag-videos.component";
import {TematicaComponent} from "./pages/tematica/tematica.component";
import {TematicasSugeridasComponent} from "./component/tematicas-sugeridas/tematicas-sugeridas.component";

const routes: Routes = [
  {path: 'video/:id', component: VideoDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'canal/:id_canal', component: CanalComponent},
  {path: 'canais', component: CanaisComponent},
  {path: 'tematicas', component: TematicasComponent},
  {path: 'tematica/:id_tematica', component: TematicaComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'playlist/:id_playlist', component: PlaylistComponent},
  {path: 'canais_sugeridos', component: CanaisSugeridosComponent},
  {path: 'tag/:id_tag', component: TagVideosComponent},
  {path: 'tematicas_sugeridas', component: TematicasSugeridasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
