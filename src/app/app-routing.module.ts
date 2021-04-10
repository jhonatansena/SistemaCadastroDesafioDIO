import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { HomeComponent } from './views/home/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
 
   {
    path:'user-create',
    component: UserCreateComponent
  },

  // {
  //   path:'user-edit',
  //   component: UserEditComponent
  // },

  {
    path:'user-edit/:id',
    component: UserEditComponent
  },
  {
    path:'user-delete/:id',
    component: UserDeleteComponent
  },
  

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
