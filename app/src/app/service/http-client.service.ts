import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {inject} from "@angular/core/testing";


export abstract class HttpClientService {
  http: Http;
  url: string;
  constructor(httpClient: Http) {
    this.http = httpClient;
    console.log('initing httpClient', this);
  }

  find(query?: any) {
    return this.http.get(this.url).map((resp) => resp.json());
  }
}
