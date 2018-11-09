import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {TestModule} from '../test.module';
import {HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';
import {User} from '../classes/user';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  const testUsers: User[] = [
    {
      id: 1,
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
    },
    {
      id: 2,
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
    },
    {
      id: 3,
      first_name: 'Emma',
      last_name: 'Wong',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg'
    }
  ];
  const testData = {
    page: 1,
    per_page: 3,
    total: 12,
    total_pages: 4,
    data: testUsers
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('get user list', () => {
    const service: UserService = TestBed.get(UserService);
    service.userList.subscribe(users => {
      expect(users).toEqual(testData.data);
    });
    const req = httpTestingController.expectOne(`${environment.apiUrl}users`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });

  it('get first user', () => {
    const service: UserService = TestBed.get(UserService);
    service.getUser(1).subscribe(user => {
      expect(user).toEqual(testData.data[0]);
    });
    const req = httpTestingController.expectOne(`${environment.apiUrl}users`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });

  it('update send correct http request', () => {
    const service: UserService = TestBed.get(UserService);
    const userId = 1;
    const formData = {
      first_name: 'foo',
      last_name: 'bar'
    };
    service.updateUser(userId, formData);
    const req = httpTestingController.expectOne(`${environment.apiUrl}users/${userId}`);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(formData);
    httpTestingController.verify();
  });

  it('update does change the user first and name', () => {
    const service: UserService = TestBed.get(UserService);
    service.userList.subscribe();
    const userId = 1;
    const formData = {
      first_name: 'foo',
      last_name: 'bar'
    };
    const req = httpTestingController.expectOne(`${environment.apiUrl}users`);
    req.flush(testData);
    service.updateUser(userId, formData);
    const req2 = httpTestingController.expectOne(`${environment.apiUrl}users/${userId}`);
    req2.flush(formData);
    service.getUser(userId).subscribe(user => {
      expect(user.first_name).toEqual(formData.first_name);
      expect(user.last_name).toEqual(formData.last_name);
    });
    httpTestingController.verify();
  });

  it('delete send correct http request', () => {
    const service: UserService = TestBed.get(UserService);
    const userId = 1;
    service.delete(userId);
    const req = httpTestingController.expectOne(`${environment.apiUrl}users/${userId}`);
    expect(req.request.method).toEqual('DELETE');
    httpTestingController.verify();
  });

  it('delete does delete the user from the list', () => {
    const service: UserService = TestBed.get(UserService);
    service.userList.subscribe();
    const userId = 1;
    const req = httpTestingController.expectOne(`${environment.apiUrl}users`);
    req.flush(testData);
    service.delete(userId);
    const req2 = httpTestingController.expectOne(`${environment.apiUrl}users/${userId}`);
    req2.flush({});
    service.userList.subscribe(users => {
      console.log(users);
      expect(users.length).toEqual(testUsers.length - 1);
    });
    httpTestingController.verify();
  });
});
