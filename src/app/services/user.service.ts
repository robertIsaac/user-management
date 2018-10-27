import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../classes/user';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList$ = new BehaviorSubject<User[]>([]);
  private userListLoading = false;
  private userListLoaded = false;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * calls checkUserList and return Observable of user list when its loaded
   * @returns Observable of the user list
   * */
  get userList(): Observable<User[]> {
    this.checkUserList();
    return this.userList$.pipe(
      filter(() => this.userListLoaded)
    );
  }

  /**
   * calls checkUserList and return the user with the given id when user list is loaded
   * @param userId the id of the user
   * @returns the requested user
   * */
  getUser(userId: number): Observable<User> {
    this.checkUserList();
    return this.userList$.pipe(
      filter(() => this.userListLoaded),
      map(userList => userList.find(user => user.id === userId))
    );
  }

  /**
   * load the userList from the api to the BehaviorSubject userList
   * sets the proper value of loaded and loading during the loading
   * */
  private getUserList() {
    this.userListLoading = true;
    this.httpClient.get<User[]>(`assets/a.json`).subscribe(userList => {
      // this.httpClient.get<User[]>(`${environment.ApiUrl}api/users`).subscribe(userList => {
      this.userListLoaded = true;
      this.userListLoading = false;
      this.userList$.next(userList['data']);
    });
  }

  /**
   * check if the list is not loaded or loading then call getUserList to load it otherwise do nothing
   * */
  private checkUserList() {
    if (!this.userListLoaded && !this.userListLoading) {
      this.getUserList();
    }
  }
}
