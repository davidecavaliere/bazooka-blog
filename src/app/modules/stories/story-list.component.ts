
import { Component } from "@angular/core";
import { StoryService } from '../../service/story.service';

import { Logger } from '../../decorators/logger.decorator';
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl : 'story-list.component.html',
  styleUrls : ['./story-list.component.scss']
})
export class StoryListComponent {
  public stories: any = [];
  public story: any = {};
  public isLoggedIn: Observable<boolean>;
  @Logger('StoryListComponent') $log: any;

  constructor(
    private storyService: StoryService,
    private authService: AuthService
  ) {
    this.$log.d('initing story list component', this);

    this.isLoggedIn = authService.isLoggedIn();

    storyService.getAll();

  }

  save() {
    this.storyService.save(this.story);
    this.story = {};
  }

}
