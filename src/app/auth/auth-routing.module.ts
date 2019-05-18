import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
	{ path: 'auth', 
	  component: AuthComponent,
	  children: [
	  	{
	  		path: 'sign-in',
	  		component: SignInComponent
	  	},
	  	{
	  		path: 'sign-up',
	  		component: SignUpComponent
	  	}
	  ]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
