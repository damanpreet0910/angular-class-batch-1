import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ButtonComponent } from './button/button.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AdduserComponent } from './user/adduser/adduser.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'layout',component:LayoutComponent,
    children:[
      // {path:"home",component:HomeComponent},
      // {path:"about",component:AboutComponent},
      // {path:"contact",component:ContactComponent}
      {path:'dashboard',component:DashboardComponent},
      {path:'button',component:ButtonComponent},
      {path:"adduser",component:AdduserComponent}
    ]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
