import { Component } from '@angular/core';
// import { Logger } from './service/logger.service' ;

@Component({
  selector : 'dc-toolbar',
  template : `
  <md-toolbar color="primary">
    <div>
      <button md-icon-button>
        <md-icon>menu</md-icon>
      </button>
    </div>
    <div>bazooka blog</div>
    <span style="flex: 1 1 auto;"></span>
    <button md-button>
      <md-icon>fingerprint</md-icon>
      login
    </button>
  </md-toolbar>
  `
})
export class ToolbarComponent {

}
