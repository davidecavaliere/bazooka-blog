import { AuthService } from "../service/auth.service";
import { Component, OnInit } from '@angular/core';
import { Logger } from '../decorators/logger.decorator';
import { User } from '../../models/user.model';

import { Observable } from 'rxjs';

@Component({
  // selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @Logger('AdminComponent') $log: any;
  public user: Observable<User>;
  public usersnapshot: User = new User();

  constructor(private authService: AuthService) {
    // let userSrc = authService.user.publishReplay(1);
    // let user = userSrc.map(u => u);
    // userSrc.connect();
    //
    // this.user = user;

    // authService.getCurrentUser().subscribe((u) => {
    //   this.usersnapshot = u;
    // });

    this.user = authService.getCurrentUser().subscribe((u) => {
      this.usersnapshot = u;
    });
  }

  ngOnInit() {
    this.$log.d('initing admin component', this);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Example {{ user | myAsync:'name'}}
 * where user is an Observable
 * and name is a field within its value
 */
@Pipe({ name : 'myAsync' , pure: false })
export class MyAsync implements PipeTransform {
  transform(object, property) {
    let value = '';
    object.map((v) => v[property]).subscribe((v) => value = v);
    return value;
  }
}
