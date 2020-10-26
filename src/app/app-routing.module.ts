import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { ContatosComponent } from './components/views/contatos/contatos.component';
import { ServicosComponent } from './components/views/servicos/servicos.component';
import { FotosComponent } from './components/views/fotos/fotos.component';
import { LocalComponent } from './components/views/local/local.component';

const routes: Routes = [
  
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"contatos",
    component: ContatosComponent
  },
  {
    path:"servicos",
    component: ServicosComponent
  },
  {
    path:"fotos",
    component: FotosComponent
  },
  {
    path:"local",
    component: LocalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
