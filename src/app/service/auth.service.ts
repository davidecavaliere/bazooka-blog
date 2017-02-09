import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable()
export class AuthService {
  constructor(socketService: SocketService) {
    console.log('xtructing authService', this);
    // let observable = new socketService('localhost:3003');
  }
  login(credentials: any) : Promise<any> {
    console.log('checking credentials', credentials);

    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === 'test@test.it' && credentials.password == 'test') {

          resolve({
            token : 'abc'
          });
        } else {
          reject({ unauthorized : 1});
        }
      }, 2500);
    });
  }
}
