
import { Injectable } from '@angular/core';
import { SocketService } from "./socket.service";

@Injectable()
export class StoryService {
  public stories : any;

  constructor (private socketService : SocketService) {
    console.log('initing StoryService', this);
    this.stories = new Promise((resolve, reject) => {
      this.socketService.on('stories:listed', (stories) => {
        console.log('got stories', stories)
        resolve(stories);
      });
    });

    // TODO should listen for errors to notify the consumer
  }

  getAll() {
    console.log('emitting event stories:list');
    this.socketService.emit('stories:list');
    return this.stories;
  }

  save(story) {
    this.socketService.emit('story:save', story);
  }
}
