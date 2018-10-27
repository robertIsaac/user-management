import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {User} from '../../classes/user';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  selectedUserId: number;
  userList$: Observable<User[]>;
  params$;
  updateUser$;
  deleteUser$;
  updateRef: BsModalRef;
  deleteRef: BsModalRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private modalService: BsModalService,
  ) {
  }

  ngOnInit() {
    this.params$ = this.activatedRoute.params.subscribe(params => {
      this.selectedUserId = +params['id'];
    });
    this.userList$ = this.userService.userList;
  }

  ngOnDestroy() {
    this.params$.unsubscribe();
  }

  identify(index, user: User) {
    return user.id;
  }

  delete(userId: number, template: TemplateRef<any>) {
    this.deleteUser$ = this.userService.getUser(userId);
    this.deleteRef = this.openModal(template);
  }

  update(userId: number, template: TemplateRef<any>) {
    this.updateUser$ = this.userService.getUser(userId);
    this.updateRef = this.openModal(template);
  }

  openModal(template: TemplateRef<any>) {
    return this.modalService.show(template);
  }

  deleteUser(userId) {
    this.userService.delete(userId);
    this.deleteRef.hide();
  }

}

