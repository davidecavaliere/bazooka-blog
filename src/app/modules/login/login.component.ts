import { Component } from "@angular/core";
import { AuthService } from '../../service/auth.service';

@Component({
  // selector : 'login',
  templateUrl : './login.component.html'
})
export class LoginComponent {
  email    : string;
  password : string;

  constructor(private authService: AuthService) {}

  login() {
    console.log('loggin user', this.email, this.password);
    this.authService.login({
      email : this.email,
      password : this.password
    }).then(resp => {
      console.log(resp);
    }).catch(resp => console.error(resp));
    // console.log()
  }
}
