import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AuthService } from './guards/auth.service';


const routes: Routes = [
  	  { path: '',  component: HomeComponent,canActivate:[AuthService] },
  	  { path: 'login',component:LoginComponent },
  	  { path: 'register', component:RegisterComponent },
  	  { path: '**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
