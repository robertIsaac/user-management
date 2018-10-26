import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
  }

  static isLogged(): boolean {
    return !!localStorage.getItem(environment.localStorage.token);
  }

  static getToken() {
    return localStorage.getItem(environment.localStorage.token);
  }

  login(credential) {
    this.httpClient.post(`${environment.ApiUrl}api/login`, credential).subscribe(data => {
      localStorage.setItem(environment.localStorage.token, data['token']);
      this.router.navigate(['user-list']);
    });
  }

  logout() {
    localStorage.removeItem(environment.localStorage.token);
    this.router.navigate(['/login']);
  }
}
