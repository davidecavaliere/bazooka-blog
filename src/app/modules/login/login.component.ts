import { Log, Level } from "ng2-logger/ng2-logger";
import { Component, Inject } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators, EmailValidators } from 'ng2-validators';
import 'rxjs/add/operator/debounceTime';

@Component({
  // selector : 'login',
  templateUrl : './login.component.html',
  styleUrls : ['./login.component.scss']
})
export class LoginComponent {
  private $log = Log.create('Login');

  loginForm = new FormGroup({
    email    : new FormControl('', EmailValidators.simple()),
    password : new FormControl()
  });
  user : any;

  constructor(private authService: AuthService, private router: Router) {
    this.$log.d('Ininting loginComponent');
    authService.user.subscribe((user) => {
      if (!user.error) {
        this.user = user;
      } else {
        console.error(user.error);
      }

    });

    this.loginForm.valueChanges
    .debounceTime(500)
    .subscribe((value) => {

      // console.log('value change', value);
      // console.log('loggin form.email', this.loginForm.get('email'));
      // console.log('loggin form.password', this.loginForm.get('password'));

    });

  }

  login() {

    // console.log('loggin form.name', this.loginForm.get('name'));
    // console.log('loggin form.password', this.loginForm.get('password'));

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
    }

  }
}
