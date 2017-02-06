import { Component } from '@angular/core';
import { Logger } from './service/logger.service';
import { MaterialModule } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  // imports : [
  //   MaterialModule
  // ]
})
export class AppComponent {
  items = [];

  constructor(private logger: Logger) {
    logger.debug('xtructing app component');
    for (var i=0; i<20; i++) {
      this.items.push('string ' + i);

    }
  }

  ngOnInit() {
    this.logger.debug('initing app component');
  }
}
