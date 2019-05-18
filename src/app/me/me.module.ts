import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeComponent } from './me.component';
import { MeRoutingModule } from './me-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    MeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MeRoutingModule
  ]
})
export class MeModule { }
