import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { checkPasswords } from '../validators/checkPasswords';
import { UserSignup } from '../models/user.signup';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [MessageService],
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  activeForm: 'login' | 'signup' | 'reset' = 'login';

  isSubmitted = false;
  isLoading = false;
  signUpForm = this.formBuilder.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: checkPasswords,
    }
  );

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}

  get errorControl() {
    return this.signUpForm.controls;
  }

  googleLogin() {
    this.auth.googleAuth();
  }

  emailLogin() {
    this.auth.emailAuth(this.email, this.password).then((response) => {
      console.log('response::: ', response);
    });
  }

  showSignUp() {
    this.activeForm = 'signup';
  }

  showResetPassword() {
    this.activeForm = 'reset';
  }

  cancelSignUp() {
    this.signUpForm.clearValidators();
    this.activeForm = 'login';
  }

  submit() {
    this.isSubmitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.isLoading = true;

    const data = this.signUpForm.value as UserSignup;
    this.auth
      .signUp(data)
      .then((response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User created successfully',
        });
      })
      .catch((err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
        });
      })
      .finally(() => {
        this.isLoading = false;
        this.cancelSignUp();
      });
  }

  resetPassword() {
    if (!this.email.length) {
      return;
    }
    this.isLoading = true;
    this.auth
      .resetPassword(this.email)
      .then((res) => {
        console.log('response: ', res);
        this.messageService.add({
          severity: 'success',
          summary: 'Email sent',
          detail: 'An reset password email was sent',
        });
      })
      .catch((err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.message,
        });
      })
      .finally(() => {
        this.isLoading = false;
        this.cancelSignUp();
      });
  }
}
