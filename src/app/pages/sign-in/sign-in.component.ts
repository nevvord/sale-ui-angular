import { AuthService } from '@services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from "angular-notifier";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  
  private readonly notifier: NotifierService
  myForm: FormGroup;

  constructor( notifierService: NotifierService, private fb: FormBuilder, private auth: AuthService, private _Router: Router) {
    this.notifier = notifierService
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  get GetFormControls() {
    return this.myForm.controls
  }
  SignIn(){
    this.auth.signIn(this.myForm.value)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.notifier.show({
            type: "success",
            message: res.msg
          })
          this._Router.navigate(['/'])
        },
        err => {
          this.notifier.show({
            type: "error",
            message: err.error.msg
          })
        }
      )
  }

}
