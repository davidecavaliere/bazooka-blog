import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector : '[layoutMargin]'
})
export class LayoutMarginDirective {
  @Input('layoutMargin') style : string;

  constructor(private element: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'margin', this.style || '12px');


  }

}

@Directive({
  selector : '[layoutPadding]'
})
export class LayoutPaddingDirective {
  @Input('layoutPadding') style : string;

  constructor(private element: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'padding', this.style || '12px');
  }

}

@Directive({
  selector : '[availableHeiaght]'
})
export class AvailableHeight {
  constructor(private element: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    console.log('initing available height');

  }
}
