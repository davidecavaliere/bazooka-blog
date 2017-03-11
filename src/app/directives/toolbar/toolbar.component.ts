import { Router } from "@angular/router";
import { AuthService } from "../../service/auth.service";

import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { LoginComponent } from '../../modules/login/login.component';

@Component({
  selector : 'dc-toolbar',
  templateUrl : './toolbar.component.html',
  styleUrls : ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @ViewChild('branding') branding : any;
  private user : any;
  private dialogRef : any;
  public isLoading: boolean = false;


  constructor(
    private mdDialog : MdDialog,
    private authService : AuthService,
    private router : Router
  ) {

    // TODO find a way to check when socket is busy and set isLoading to true

    authService.user.subscribe(user => {
      console.log('user next value', user);
      this.user = user;
    }, err => {
      console.error('error on user subscribed', err);
    }, () => {
      console.log('user subscribe completed');
    })

    // let self = this;
    // authService.getCurrentUser().then(function(user) {
    //   console.log('ToolbarComponent: user just logged in', user);
    //   self.user = user;
    // });
  }

  logout() {
    this.authService.logout();

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
