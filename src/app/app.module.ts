import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { Inicio2Component } from './inicio2/inicio2.component';
import { InformacionComponent } from './informacion/informacion.component';
import { LibroclickedService } from './libroclicked.service';
import { RendererdemoComponent } from './rendererdemo/rendererdemo.component';

const rutas: Routes = [

  {path: 'listado-libros', component: LibrosComponent },
  {path: 'informacion/:libroId', component: InformacionComponent},
  {path: 'informacion', redirectTo: '/' },
  {path: '', component: InicioComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    SobreNosotrosComponent,
    LibrosComponent,
    CabeceraComponent,
    InicioComponent,
    Inicio2Component,
    InformacionComponent,
    RendererdemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
