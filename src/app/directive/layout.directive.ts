import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector : '[layout-margin]'
})
export class LayoutMarginDirective {

  constructor(private element: ElementRef, private renderer: Renderer) {
    console.log('initing LayoutMargin');
    renderer.setElementStyle(element.nativeElement, 'margin', '12px');

    console.log(element);
  }
}


@Directive({
  selector : '[layout-padding]'
})
export class LayoutPaddingDirective {

  constructor(private element: ElementRef, private renderer: Renderer) {
    console.log('initing LayoutPadding');
    renderer.setElementStyle(element.nativeElement, 'padding', '12px');

    console.log(element);
  }
}
