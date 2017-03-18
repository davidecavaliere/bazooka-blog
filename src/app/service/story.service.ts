import { Logger } from '../decorators/logger.decorator';

import { Injectable } from '@angular/core';
import { SocketService } from "./socket.service";
import { Observable } from 'rxjs';

@Injectable()
export class StoryService {
  @Logger('StoryService')
  private $log: any;
  public stories : any;
  public stream: Observable<any>;

  constructor (private socketService : SocketService) {

    this.stream = new Observable((observer) => {
      this.socketService.on('story:index', (stories) => {
        this.$log.d('got stories', stories);
        // this.stories = stories;
        // observer.next(stories);
        for (let story of stories) observer.next(story);
      });

      this.socketService.on('story:save', (s) => observer.next(s));
    });

    // TODO should listen for errors to notify the consumer
  }

  getAll() {
    this.$log.d('emitting story:index');
    this.socketService.emit('story:index');
    return this.stream;
  }

  findAll() {
    var stories = [];
    this.getAll();
    this.stream.subscribe((s) => stories = s);
    return stories;
  }

  save(story) {
    this.socketService.emit('story:save', story);
  }
}
