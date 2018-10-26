import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {UserListComponent} from './user-list/user-list.component';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {AppInterceptor} from './app.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
