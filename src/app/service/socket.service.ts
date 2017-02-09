import {Observable} from "rxjs";
import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private name : string;
  private host : string = '172.17.0.3:3003';
  public socket : any;

  constructor() {
    console.log('initing SocketService', this);
    this.socket = io.connect(this.host);
    this.socket.on('connect', () => console.log('connectted'));
    this.socket.on('disconnetc', () => console.log('disconnected'));

    this.socket.on('error', () => console.error('socket error'));

    return Observable.create((observer:any) => {
      this.socket.on('create', (item:any) => observer.next({ action : 'create', item : item }));
      this.socket.on('remove', (item:any) => observer.next({ action : 'remove', item :item }));
      return () => this.socket.close();
    })
  }


  private connect() {
    console.log(`connetting to ${this.host}`);
    // this.socket =
  }
}
