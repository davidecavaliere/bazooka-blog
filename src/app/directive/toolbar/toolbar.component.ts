import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { LoginComponent } from '../../modules/login/login.component';

@Component({
  selector : 'dc-toolbar',
  template : `
  <md-toolbar color="primary">
    <div>
      <button md-icon-button>
        <md-icon>menu</md-icon>
      </button>
    </div>
    <div #branding class="branding-title">bazooka blog</div>
    <span style="flex: 1 1 auto;"></span>
    <button md-button (click)="openDialog()">
      <md-icon>fingerprint</md-icon>
      login
    </button>
  </md-toolbar>
  `
})
export class ToolbarComponent {
  @ViewChild('branding') branding : any;

  constructor(
    private mdDialog : MdDialog
  ) {
    console.log(this.branding);
  }

  openDialog() {
    console.log('opening dialog')
    this.mdDialog.open(LoginComponent);
  }

  ngAfterViewInit() {
    console.log(this.branding);
  }

}
