import {Logger} from "../decorators/logger.decorator";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClientService} from "./http-client.service";
import {Http} from "@angular/http";

@Injectable()
export class StoryService extends HttpClientService {
  @Logger('StoryService')
  private $log: any;

  url: string = 'http://172.17.0.4:3000/stories';
  constructor (http: Http) {
    super(http);
    this.$log.d('initing storyService', this);
  }

}
