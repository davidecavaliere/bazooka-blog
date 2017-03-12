import { Component, OnInit } from '@angular/core';
import { Logger } from '../decorators/logger.decorator';

@Component({
  // selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @Logger() logger: any;

  constructor() { }

  ngOnInit() {
    this.logger.d('initing admin component', this);
  }

}
