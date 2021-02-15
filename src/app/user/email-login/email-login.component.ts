import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type FormTypeModel = 'login' | 'signup' | 'reset';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.sass']
})
export class EmailLoginComponent implements OnInit {
  form: FormGroup

  type: FormTypeModel = "signup"

  serverMessage: string
  

  constructor(private afAuth: AngularFireAuth, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      passwordConfirmation: ['', []]
    })
  }

  changeType(val: FormTypeModel) {
    this.type = val
  }

  get isLogin() {
    return this.type === 'login'
  }

  get isSignup() {
    return this.type === 'signup'
  }

  get isReset() {
    return this.type === 'reset'
  }

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  get passwordConfirmation() {
    return this.form.get('passwordConfirmation')
  }

  get passwordDoesMatch() {
    if (this.type !== 'signup') {
      return true
    } else {
      return this.password.value === this.passwordConfirmation.value
    }
  }

  async onSubmit() {
    
  }

}
