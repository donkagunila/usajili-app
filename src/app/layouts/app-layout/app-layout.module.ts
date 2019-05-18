import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayouteRoutes } from './app-layout.routing.module';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AppLayouteRoutes),
  ]
})
export class AppLayoutModule { }
