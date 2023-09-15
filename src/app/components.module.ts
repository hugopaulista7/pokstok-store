import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [ButtonModule],
})
export class ComponentsModule {}
