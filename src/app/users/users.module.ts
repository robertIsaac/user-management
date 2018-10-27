import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UserListComponent} from './user-list/user-list.component';
import {SingleUserComponent} from './single-user/single-user.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UpdateComponent} from './update/update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UserListComponent,
    SingleUserComponent,
    UserDetailsComponent,
    UpdateComponent,
  ]
})
export class UsersModule {
}
