import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertifComponent } from './certif/certif.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {
  path:'',
  redirectTo:'/events',
  pathMatch:'full'
  },
{
  path:'events',
  component:EventsComponent,

},
{
  path:'certif',
  component:CertifComponent ,
  canActivate:[AuthGuard]
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
