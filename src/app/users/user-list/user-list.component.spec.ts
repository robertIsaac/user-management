import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserListComponent} from './user-list.component';
import {SingleUserComponent} from '../single-user/single-user.component';
import {UserDetailsComponent} from '../user-details/user-details.component';
import {UpdateComponent} from '../update/update.component';
import {TestModule} from '../../test.module';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserListComponent,
        SingleUserComponent,
        UserDetailsComponent,
        UpdateComponent,
      ],
      imports: [TestModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
