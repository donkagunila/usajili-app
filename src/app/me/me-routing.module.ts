import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeComponent } from './me.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{ path: 'me', 
	  component: MeComponent,
	  children: [
	  	{
	  		path: 'profile',
	  		component: ProfileComponent
	  	}	
	  ]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
