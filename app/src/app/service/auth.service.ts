import {Logger} from '../decorators/logger.decorator';
import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { User } from '../../models/user.model';
import { CookieService } from "angular2-cookie/core";
import { Observable } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AuthService {
  public user: Observable<any>;
  public usersnapshot: any;
  public _isLoggedIn: any;
  public currentUser: any;
  @Logger('AuthService') private $log;

  constructor(
      private af: AngularFire,
      private socketService: SocketService,
      private cookieService: CookieService) {

    this.$log.d('angular firebase service', af);

    this.socketService.status.subscribe(status => {
      // console.log('authService: status changed', status);
      if (status === 'connected') {
        let user = cookieService.getObject('user');
        if (user) {
          console.log('authService: found user in cookies', user);
          socketService.emit('auth:login', user);
        }
      }

    });

    let user = this.user = Observable.create((observer: any) => {

          socketService.on('auth:login', (resp) => {
            let user = new User(resp);
            observer.next(user);
            cookieService.putObject('user', user);
            this.usersnapshot = user;
          });

          socketService.on('auth:logout', (resp) => {
            // console.log('user logged out');
            this.cookieService.remove('user');
            let user = new User();
            observer.next(null);
            this.usersnapshot = user;
          });

          socketService.on('auth:login:error', (resp) => {
            observer.error(resp);
          });
    });


    // user.do((u) => {
    //   debugger;
    //   this.usersnapshot = u;
    // });

    let userReplay = user.publishReplay(1);

    this.currentUser = userReplay;

    userReplay.connect();


    this._isLoggedIn = this.user.publishReplay(1);

    this._isLoggedIn.map((v) => !!v);

    this._isLoggedIn.connect();
  }

  login(credentials: any): void {
    this.socketService.emit('auth:login', credentials);
  }


  logout() {
    this.socketService.emit('auth:logout', this.user);
  }

  isLoggedIn() {
    return this._isLoggedIn;
  }

  getCurrentUser() {
    return this.currentUser;
    // let currentUser = this.user.publishReplay(1);
    // currentUser.connect();
    // return currentUser;
  }

}
