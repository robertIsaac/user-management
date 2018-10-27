import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UserListComponent} from './user-list/user-list.component';
import {SingleUserComponent} from './single-user/single-user.component';
import {UserDetailsComponent} from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UserListComponent,
    SingleUserComponent,
    UserDetailsComponent,
  ]
})
export class UsersModule {
}
