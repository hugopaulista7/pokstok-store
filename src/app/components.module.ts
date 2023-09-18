import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconAppComponent } from './icon-app/icon-app.component';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [LoginPageComponent, IconAppComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ProgressSpinnerModule,
    CardModule,
    CoolSocialLoginButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
  ],
})
export class ComponentsModule {}
