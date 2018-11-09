import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SingleUserComponent} from './single-user.component';
import {User} from '../../classes/user';
import {TestModule} from '../../test.module';

describe('SingleUserComponent', () => {
  let component: SingleUserComponent;
  let fixture: ComponentFixture<SingleUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleUserComponent],
      imports: [TestModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserComponent);
    component = fixture.componentInstance;
    const user: User = {
      id: 1,
      first_name: 'first_name',
      last_name: 'last_name',
      avatar: 'avatar'
    };
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
