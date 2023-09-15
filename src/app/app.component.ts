import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import * as firebaseAnalytics from 'firebase/analytics';
import { environment } from 'src/environments/environment.dev';

export const app = initializeApp(environment.firebaseConfig);
export const analytics = firebaseAnalytics.getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebaseAnalytics.logEvent(analytics, 'Initialiized App');
  }
}
