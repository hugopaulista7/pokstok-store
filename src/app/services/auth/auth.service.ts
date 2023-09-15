import { Injectable } from '@angular/core';
import { auth } from 'src/app/app.component';
import * as authFirebase from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  googleAuth() {
    const provider = new authFirebase.GoogleAuthProvider();
    provider.addScope('email');
    this.fireAuth(provider);
  }

  emailAuth(email: string, password: string) {
    const provider = new authFirebase.EmailAuthProvider();
    return authFirebase.signInWithEmailAndPassword(auth, email, password);
  }

  private fireAuth(provider: any) {
    authFirebase.signInWithPopup(auth, provider).then((response) => {
      this.handleSocialSignIn(response);
    });
  }

  private handleSocialSignIn(response: any) {
    const credential =
      authFirebase.GoogleAuthProvider.credentialFromResult(response);
    console.log('credential:: ', credential);
    const token = credential?.accessToken;
  }

  async signOut() {
    // await auth.signOut(getAuth(this.app));
  }
}
