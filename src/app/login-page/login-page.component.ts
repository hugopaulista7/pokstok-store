import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}

  googleLogin() {
    this.auth.googleAuth();
  }

  emailLogin() {
    this.auth.emailAuth(this.email, this.password).then((response) => {
      console.log('response::: ', response);
    });
  }
}
