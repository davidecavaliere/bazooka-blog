
import { Component } from "@angular/core";
import { StoryService } from '../../service/story.service';

import { Logger } from '../../decorators/logger.decorator';

@Component({
  templateUrl : 'story-list.component.html',
  styleUrls : ['./story-list.component.scss']
})
export class StoryListComponent {
  public stories: any;
  public story: any;
  @Logger('StoryListComponent') $log: any;

  constructor(private storyService: StoryService) {
    this.$log.d('initing story list component', this);

    this.stories = storyService.getAll();
    this.story = {
      date : new Date()
    };
  }

}
