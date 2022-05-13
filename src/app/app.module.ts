import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DomseguroPipe } from './domseguro.pipe';
import { VideoComponent } from './video/video.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    SearchComponent,
    UnheroeComponent,
    DomseguroPipe,
    VideoComponent,
    PeliculasComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
