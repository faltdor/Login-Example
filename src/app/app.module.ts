import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlertComponent } from './directives/alert/alert.component';

import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AuthService } from './guards/auth.service';
import { AlertService ,AuthenticationService,UserService } from './services/index';

//Fake Backend
import { FakeBackend } from './_helpers/fake-backend';
import { MockBackend,MockConnection} from '@angular/http/testing';
import { BaseRequestOptions} from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AlertService,
              AuthService,
              AuthenticationService,
              UserService,
              //Providers used to create fake backend
              FakeBackend,
              MockBackend,
              BaseRequestOptions

              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
