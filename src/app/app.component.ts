import { Component, ElementRef, Renderer } from '@angular/core';
import { Logger } from './service/logger.service';
import { MaterialModule, MdDialog } from '@angular/material';

function* itemsGenerator(n: number = 0) {

  let item = {
    title : `title ${n}`,
    date : new Date(),
    text  : `body ${n}`,
  }

  if (n === 0) return item;
  // yield n--;
  yield item;
  yield* itemsGenerator(--n);

  // yield* itemsGenerator(n--);
}

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
    var itemsFactory = itemsGenerator(5);
    let i = itemsFactory.next();

    while (!i.done) {

      this.items.push(i.value);
      i = itemsFactory.next();
    }

  }

  ngOnInit() {
    // this.logger.debug('initing app component');
    // get the flex container to set up its height
    let flexContainer = this.element.nativeElement.querySelector('[fxFill]');

    // empiric correction for now
    let availableHeight = window.innerHeight - 64;
    flexContainer.style.height = availableHeight + 'px';
    flexContainer.style['min-height'] = availableHeight + 'px';

  }

  onResize(event) {

  }

}
