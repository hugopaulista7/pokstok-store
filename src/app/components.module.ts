import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconAppComponent } from './icon-app/icon-app.component';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent, IconAppComponent],
  imports: [
    ButtonModule,
    CardModule,
    CoolSocialLoginButtonsModule,
    FormsModule,
  ],
})
export class ComponentsModule {}
