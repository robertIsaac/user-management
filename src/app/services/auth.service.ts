import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  static isLogged(): boolean {
    return !!localStorage.getItem(environment.localStorage.token);
  }

  static logout() {
    localStorage.removeItem(environment.localStorage.token);
  }

  login(credential) {
    this.httpClient.post(`${environment.ApiUrl}api/login`, credential).subscribe(data => {
      localStorage.setItem(environment.localStorage.token, data['token']);
    });
  }

}
