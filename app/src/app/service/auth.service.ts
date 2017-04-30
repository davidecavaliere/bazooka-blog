import {Logger} from "../decorators/logger.decorator";
import {Injectable} from "@angular/core";
import {CookieService} from "angular2-cookie/core";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  public user: Observable<any>;
  public usersnapshot: any;
  public _isLoggedIn: any;
  public currentUser: any;
  @Logger('AuthService') private $log;

  constructor(
      private cookieService: CookieService) {

    this.$log.d('angular firebase service');

  }

  login(credentials: any): void {
  }


  logout() {
  }

  isLoggedIn() {
  }

  getCurrentUser() {
  }

}
