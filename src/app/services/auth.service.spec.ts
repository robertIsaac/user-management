import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {TestModule} from '../test.module';
import {environment} from '../../environments/environment';
import {HttpTestingController} from '@angular/common/http/testing';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestModule]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('logout should remove token from local storage', () => {
    const service: AuthService = TestBed.get(AuthService);
    localStorage.setItem(environment.localStorage.token, 'foo');
    expect(localStorage.getItem(environment.localStorage.token)).toEqual('foo');
    service.logout();
    expect(localStorage.getItem(environment.localStorage.token)).toEqual(null);
  });

  it('get token return the correct value from local storage', () => {
    expect(AuthService.getToken()).toEqual(null);
    localStorage.setItem(environment.localStorage.token, 'foo');
    expect(AuthService.getToken()).toEqual('foo');
  });

  it('return if the user us logged or not', () => {
    localStorage.removeItem(environment.localStorage.token);
    expect(AuthService.isLogged()).toEqual(false);
    localStorage.setItem(environment.localStorage.token, 'foo');
    expect(AuthService.isLogged()).toEqual(true);
  });

  it('set the local storage token when login', () => {
    localStorage.removeItem(environment.localStorage.token);
    const httpTestingController = TestBed.get(HttpTestingController);
    const testData = {token: 'foo'};
    const service: AuthService = TestBed.get(AuthService);
    const credential = {email: 'foo@bar.com', password: 'baz'};
    service.login(credential);

    const req = httpTestingController.expectOne(`${environment.apiUrl}login`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(credential);
    console.log(req);
    req.flush(testData);
    httpTestingController.verify();
    expect(localStorage.getItem(environment.localStorage.token)).toEqual('foo');
  });
});
