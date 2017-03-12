
import { Injectable } from '@angular/core';
import { SocketService } from "./socket.service";
import { Observable } from 'rxjs';

@Injectable()
export class StoryService {
  public stories : any;
  public stream: Observable<any>;

  constructor (private socketService : SocketService) {
    console.log('initing StoryService', this);
    this.stories = new Promise((resolve, reject) => {
      this.socketService.on('story:index', (stories) => {
        resolve(stories);
      });
    });

    this.stream = new Observable(observer => {
      this.socketService.on('story:index', (stories) => {
        for (let story of stories) observer.next(story);
      });
    });

    // TODO should listen for errors to notify the consumer
  }

  getAll() {
    this.socketService.emit('stories:list');
    return this.stories;
  }

  save(story) {
    this.socketService.emit('story:save', story);
  }
}
