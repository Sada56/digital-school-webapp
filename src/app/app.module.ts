import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { CertifComponent } from './certif/certif.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    CertifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthService , AuthGuard, EventService ,
    {
      provide:HTTP_INTERCEPTORS ,
      useClass:TokenInterceptorService,
      multi:true

    }],

  bootstrap: [AppComponent]



})
export class AppModule { }
