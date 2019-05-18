import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'error', component: HomeComponent},
  { path: '', 
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/app-layout/app-layout.module#AppLayoutModule'
      }
    ]
  },
  { path: '', redirectTo: '/error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
