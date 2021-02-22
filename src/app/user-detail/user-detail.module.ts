import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//For ngModel
import { FormsModule } from '@angular/forms';

//user created module
import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';

//Prime Ng Modules
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [UserListComponent, UserCreateComponent],
  imports: [
    CommonModule,
    UserDetailRoutingModule,
    InputTextModule,
    FormsModule,
    TableModule,
    ButtonModule
  ],
  exports : [
    UserListComponent,
    UserCreateComponent
  ]
})
export class UserDetailModule { }
