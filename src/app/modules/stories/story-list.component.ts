import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { StoryService } from '../../service/story.service';


@Component({
  templateUrl : 'story-list.component.html',
  styleUrls : ['./story-list.component.scss']
})
export class StoryListComponent {
  @ViewChild('flexContainer') flexContainer : any;
  public stories: any;

  items: Array<any> = [];
  constructor(private storyService: StoryService) {    console.log('initing story list component', this);
    // storyService.getAll().then(stories => {
    //   this.stories = stories;
    // });
    this.stories = storyService.getAll();
  }

}
