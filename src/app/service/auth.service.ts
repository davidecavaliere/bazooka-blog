import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {
    console.log('xtructing authService', this);
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
