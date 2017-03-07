import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Logger } from '../decorators/logger.decorator';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private name : string;
  private host : string = '172.17.0.2:3003';
  public socket : any;
  public status : Observable<any>;
  @Logger('SocketService') $log:any;

  constructor() {
    this.socket = io.connect(this.host, {
      transports : ['websocket']
    });

    this.socket.on('connect', () => {
      console.log('connectted');
    });

    this.socket.on('disconnect', () => {
      console.log('disconnected')
    });

    this.socket.on('error', () => {
      console.error('socket error')
    });

    this.status = Observable.create((observer:any) => {
      this.socket.on('connect', () => {
        observer.next('connected');
      });
      this.socket.on('disconnect', () => {
        observer.next('disconnected');
      });
    });

  }

  emit(event, data?: any) {
    this.socket.emit(event, data);
  }

  on(event, cb) {
    this.socket.on(event, cb);
  }
}
