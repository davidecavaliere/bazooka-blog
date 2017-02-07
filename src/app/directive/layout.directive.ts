import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector : '[layoutMargin]'
})
export class LayoutMarginDirective {

  constructor(private element: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'margin', this.style || '12px');


  }

  @Input('layoutMargin') style : string;
}

@Directive({
  selector : '[layout-padding]'
})
export class LayoutPaddingDirective {

  constructor(private element: ElementRef, private renderer: Renderer) {
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
