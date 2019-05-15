import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_auth/login/login.component';
import { RegisterComponent } from './_auth/register/register.component';
import { ForgetComponent } from './_auth/forget/forget.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { HeaderComponent } from './_shared/header/header.component';
import { NavbarComponent } from './pages/subs/navbar/navbar.component';
import { SidebarComponent } from './pages/subs/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
