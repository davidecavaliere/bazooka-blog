import { AfterViewInit, Component, ViewChild } from "@angular/core";

function* itemsGenerator(n: number = 0) {

  let item = {
    title : `title ${n}`,
    date : new Date(),
    text  : `body ${n}`,
  }

  if (n === 0) return item;

  yield item;
  yield* itemsGenerator(--n);

}


@Component({
  templateUrl : 'story-list.component.html',
  styleUrls : ['./story-list.component.scss']
})
export class StoryListComponent {
  @ViewChild('flexContainer') flexContainer : any;


  items: Array<any> = [];
  constructor() {
    var itemsFactory = itemsGenerator(5);
    let i = itemsFactory.next();

    while (!i.done) {

      this.items.push(i.value);
      i = itemsFactory.next();
    }
  }

}
