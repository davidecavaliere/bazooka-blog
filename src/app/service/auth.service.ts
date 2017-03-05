import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { User } from '../../models/user.model';
import { CookieService } from "angular2-cookie/core";
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  public user: Observable<any>;

  constructor(
      private socketService: SocketService,
      private cookieService: CookieService) {


    this.socketService.status.subscribe(status => {
      console.log('status changed', status);
    });

    this.user = Observable.create((observer: any) => {
          // let user = cookieService.getObject('user');
          // if (user) {
          //   observer.next(user);
          // }

          socketService.on('auth:login', (resp) => {
            let user = new User(resp);
            observer.next(user);
            cookieService.putObject('user', user);
            console.log('auth ok:', user);
          });

          socketService.on('auth:logout', (resp) => {
            console.log('user logged out');
            this.cookieService.remove('user');
            let user = new User();
            observer.next(null);
          });

    })

    // this.user = new Promise((resolve, reject) => {
    //     console.log('waiting for user resolution');
    //
    //     let user = cookieService.getObject('user');
    //     if (user) {
    //       resolve(user);
    //     }
    //
    //
    //     socketService.on('auth:login', (resp) => {
    //         let user = new User(resp);
    //         resolve(user);
    //         cookieService.putObject('user', user);
    //         console.log('auth ok:', user);
    //     });
    // });

    console.log(this.user);
    // this.user.then
    // socketService.on('auth:login', (resp) => {
    //   this.user.
    //   this.isLoggedIn = true;
    // });

  }

  login(credentials: any): void {
    console.log('emitting credentials', credentials);
    this.socketService.emit('auth:login', credentials);
  }


  logout() {
    this.socketService.emit('auth:logout', this.user);
  }

}
