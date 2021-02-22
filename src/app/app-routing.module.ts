import { UserListComponent } from './user-detail/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user-detail/user-create/user-create.component';

const routes: Routes = [
  {
    path : '' , component : UserListComponent,
  }, 
  {
    path : 'userData/add' ,component : UserCreateComponent
  },
  {
    path:'userData/:id/edit' , component:UserCreateComponent 
  },
  {
    path : '**', redirectTo : ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
