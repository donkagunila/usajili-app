import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './pages/nav/nav.component';

// import { AppLayoutModule } from './layouts/app-layout/app-layout.module';


import { AuthModule } from './auth/auth.module';
import { MeModule } from './me/me.module'; 


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
