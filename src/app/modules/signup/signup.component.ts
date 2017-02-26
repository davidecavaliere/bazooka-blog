import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators, EmailValidators } from 'ng2-validators';
import 'rxjs/add/operator/debounceTime';

@Component({
    // moduleId: module.id,
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.scss']
})
export class SignupComponent {
  public signupForm = new FormGroup({
    code : new FormControl(),
    name : new FormControl(),
    email : new FormControl('', EmailValidators.simple()),
    password : new FormControl('', PasswordValidators.digitCharacterRule(2)),
    retype : new FormControl()
  }, PasswordValidators.mismatchedPasswords('password', 'retype'));

  public user : any;

  constructor() {
    this.signupForm.valueChanges
    .debounceTime(500)
    .subscribe((value) => {

      console.log('value change', value);

      console.log('loggin form.email', this.signupForm.get('email'));
      console.log('loggin form.password', this.signupForm.get('password'));
      console.log('loggin form.retype', this.signupForm.get('retype'));


    });

  }
}
