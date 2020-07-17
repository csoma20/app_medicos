import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { AppRoutingModule } from './app-routing.module';

import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
   // LoginComponent,
   // RegisterComponent,
    NopagefoundComponent,
   
  //  BreadcrumbsComponent,
  //  SidebarComponent,
 //   HeaderComponent,

   // DashboardComponent,
   // ProgressComponent,
   // Grafica1Component,
   // PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
