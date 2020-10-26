import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { ContatosComponent } from './components/views/contatos/contatos.component';
import { ServicosComponent } from './components/views/servicos/servicos.component';
import { FotosComponent } from './components/views/fotos/fotos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalComponent } from './components/views/local/local.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContatosComponent,
    ServicosComponent,
    FotosComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
