import { Input } from '@angular/core';
import { Component, AfterViewInit, transition, trigger, style, animate, state } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: '[ngMessages]',
  template : `
    <div class="md-error-messages">
      <ng-content></ng-content>
    </div>
  `
})
export class NgMessagesDirective {
  @Input('for') field : FormControl;

  constructor() {  }

}

@Component({
  selector : '[ngMessage]',
  animations: [
    trigger(
      'animation',
      [
        transition(
          ':enter', [
            style({transform: 'scaleY(0)', opacity: 0}),
            animate('300ms 200ms ease-in', style({transform: 'scaleY(1)', opacity: 1}))
          ]
        ),
        transition(
          ':leave', [
            style({transform: 'scaleY(1)', 'opacity': 1}),
            animate('0ms ease-out', style({transform: 'scaleY(0)', opacity: 0}))]
        )]
      )
    ],
  template : `
    <div class="md-error-message" *ngIf="parent.field.touched && parent.field.errors && parent.field.errors[ngMessage]" [@animation]="parent.field.touched && parent.field.errors && parent.field.errors[ngMessage]">
      <ng-content></ng-content>
    </div>
  `
})
export class NgMessageDirective {
  @Input() ngMessage: any;
  public showError: boolean = false;

  constructor(private parent: NgMessagesDirective) { }

}
