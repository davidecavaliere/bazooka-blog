
import { Component } from "@angular/core";
import { StoryService } from '../../service/story.service';

function Logger(): PropertyDecorator {
  console.log('Factory Logger:', );
  return function(target, propertyKey: string) {
    console.log('Creating Logger', target, propertyKey);

  }
}

@Component({
  templateUrl : 'story-list.component.html',
  styleUrls : ['./story-list.component.scss']
})
export class StoryListComponent {
  public stories: any;
  public story: any;
  @Logger() log: any;

  constructor(private storyService: StoryService) {
    console.log('initing story list component', this);
    this.stories = storyService.getAll();
    this.story = {
      date : new Date()
    };
  }

}
