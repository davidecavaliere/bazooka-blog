import { Router } from "@angular/router";
import { AuthService } from "../../service/auth.service";

import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { LoginComponent } from '../../modules/login/login.component';
import { Logger } from '../../decorators/logger.decorator';

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
  @Logger('ToolbarComponent')
  private $log: any;

  constructor(
    private mdDialog : MdDialog,
    private authService : AuthService,
    private router : Router
  ) {

    // TODO find a way to check when socket is busy and set isLoading to true

    authService.user.subscribe(user => {
      this.user = user;
    }, err => {
      this.$log.e('error on user subscribed', err);
    }, () => {
    })

  }

  logout() {
    this.authService.logout();

  }

  openDialog() {
    this.dialogRef = this.mdDialog.open(LoginComponent, {
      // height : '40%',
      width : '70%'
    });

    this.dialogRef.afterClosed().subscribe(result => {
    });
  }

  closeDialog() {
    this.dialogRef && this.dialogRef.close('cancel');
  }

  ngAfterViewInit() {
  }

}
