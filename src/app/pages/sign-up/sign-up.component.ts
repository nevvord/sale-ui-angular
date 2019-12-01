import { AuthService } from '@services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from "angular-notifier";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from './confirm-password-validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  private readonly notifier: NotifierService
  myForm: FormGroup;

  constructor( notifierService: NotifierService, private fb: FormBuilder, private _auth: AuthService, private _roter: Router) {
    this.notifier = notifierService
  }


  ngOnInit() {
    this.myForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      rules: new FormControl(false, Validators.pattern('true'))
    }, {validator: PasswordValidation})
  }
  get GetFormControls() {
    return this.myForm.controls
  }

  SignUp(){
    // console.log(this.myForm.value);
    this._auth.signUp(this.myForm.value)
      .subscribe(
        res => {
          this.notifier.show({
            type: "success",
            message: res.msg
          })
          this._roter.navigate(['/signin'])
        },
        error => console.log(error)
      )
  }
}
