// export interface LoggerDecorator {
//   (bindingPropertyName?: string): any;
//   new (bindingPropertyName?: string): any;
//
// }
//
// export interface Logger {
//   bindingPropertyName?: string;
// }

import { Log, Level } from "ng2-logger/ng2-logger";

// const LoggerMetadataKey = Symbol('Logger');

function Logger(value?:string) {
  return function(target: Object, key: string) {
    target[key] = Log.create(value || 'App');

  }
}

export { Logger };
