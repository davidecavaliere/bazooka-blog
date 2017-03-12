import { Component, ElementRef, Renderer } from '@angular/core';
import { AuthService } from "./service/auth.service";
import { MaterialModule, MdDialog } from '@angular/material';
import { Logger } from './decorators/logger.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private flexContainer: any;
  items = [];
  @Logger('AppComponent')
  private $log: any;

  constructor(
    private element: ElementRef,
    private renderer : Renderer,
    private mdDialog : MdDialog,
    private authService: AuthService
  ) {

    this.$log.d('xtructing app component');
  }

}
