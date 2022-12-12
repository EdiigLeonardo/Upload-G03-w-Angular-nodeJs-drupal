import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentsComponent } from './component/comments/comments.component';
import { CommentComponent } from './component/comment/comment.component';
import { NavComponent } from './component/nav/nav.component';
import { MiniVideoComponent } from './component/mini-video/mini-video.component';
import {FormsModule} from "@angular/forms";
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { MenuComponent } from './component/menu/menu.component';
import { TagsComponent } from './component/tags/tags.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentComponent,
    NavComponent,
    MiniVideoComponent,
    PlaylistComponent,
    MenuComponent,
    TagsComponent
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
export class AppModule { }
