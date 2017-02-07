import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { LoginComponent } from '../../modules/login/login.component';

@Component({
  selector : 'dc-toolbar',
  template : `
  <md-toolbar color="primary">
    <div>
      <button md-icon-button routerLink="/">
        <md-icon>menu</md-icon>
      </button>
    </div>
    <div #branding class="branding-title">bazooka blog</div>
    <span style="flex: 1 1 auto;"></span>
    <button md-button routerLink="/login">
      <md-icon>fingerprint</md-icon>
      login
    </button>
  </md-toolbar>
  `,
  styleUrls : ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @ViewChild('branding') branding : any;
  private dialogRef : any;


  constructor(
    private mdDialog : MdDialog
  ) {
    console.log(this.branding);
  }

  openDialog() {
    console.log('opening dialog')
    this.dialogRef = this.mdDialog.open(LoginComponent, {
      // height : '40%',
      width : '70%'
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('user selected', result);
    })
  }

  closeDialog() {
    console.log('closing dialog');
    this.dialogRef && this.dialogRef.close('cancel');
  }

  ngAfterViewInit() {
    console.log(this.branding);
  }

}
