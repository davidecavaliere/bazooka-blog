import { Component, ElementRef, Renderer } from '@angular/core';
import { Logger } from './service/logger.service';
import { MaterialModule, MdDialog } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private flexContainer: any;
  items = [];

  constructor(
    private logger: Logger,
    private element: ElementRef,
    private renderer : Renderer,
    private mdDialog : MdDialog
  ) {

    logger.debug('xtructing app component');

  }


}
