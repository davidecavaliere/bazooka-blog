import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  logs: string[] = []; // capture logs for testing
  debug(message: string) {
    this.logs.push(message);
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }

  info(message: string) {
    console.info(message);
  }
}
