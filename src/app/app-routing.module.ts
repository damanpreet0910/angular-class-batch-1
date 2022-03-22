import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'',redirectTo:'/layout/home',pathMatch:'full'},
  {path:'layout',component:LayoutComponent,
    children:[
      {path:"home",component:HomeComponent},
      {path:"about",component:AboutComponent},
      {path:"contact",component:ContactComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
