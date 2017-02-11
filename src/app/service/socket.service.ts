import {Observable} from "rxjs";
import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private name : string;
  private host : string = '172.17.0.2:3003';
  public socket : any;

  constructor() {
    console.log('initing SocketService', this);
    this.socket = io.connect(this.host);
    this.socket.on('connect', () => console.log('connectted'));
    this.socket.on('disconnect', () => console.log('disconnected'));

    this.socket.on('error', () => console.error('socket error'));

    return this;
    // return Observable.create((observer:any) => {
    //   this.socket.on('create', (item:any) => observer.next({ action : 'create', item : item }));
    //   this.socket.on('remove', (item:any) => observer.next({ action : 'remove', item :item }));
    //   return () => this.socket.close();
    // });
  }

  emit(event) {
    this.socket.emit(event);
  }

  on(event, cb) {
    this.socket.on(event, cb);
  }
}
