import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from "./pages/video/video.component";
import {HomeComponent} from "./pages/home/home.component";
import {TematicasComponent} from "./pages/tematicas/tematicas.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {CanalComponent} from "./pages/canal/canal.component";
import {CanaisComponent} from "./pages/canais/canais.component";
import {PlaylistComponent} from "./pages/playlist/playlist.component";

const routes: Routes = [
  {path: 'video/:id', component: VideoComponent},
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'canal/:id_canal', component: CanalComponent},
  {path: 'canais', component: CanaisComponent},
  {path: 'tematicas', component: TematicasComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'playlist/:id_playlist', component: PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
