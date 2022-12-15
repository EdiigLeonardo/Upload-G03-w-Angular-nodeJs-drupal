import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from "./pages/video/video.component";
import {HomeComponent} from "./pages/home/home.component";
import {TematicasComponent} from "./pages/tematicas/tematicas.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {CanaisSugeridosComponent} from "./pages/canais_sugeridos/canais-sugeridos.component";

const routes: Routes = [
  {path: 'video', component: VideoComponent},
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'canais', component: CanaisSugeridosComponent},
  {path: 'tematicas', component: TematicasComponent},
  {path: 'playlists', component: PlaylistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
