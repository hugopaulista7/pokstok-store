import { Injectable } from '@angular/core';
import { auth } from 'src/app/app.component';
import * as authFirebase from 'firebase/auth';
import { UserSignup } from 'src/app/models/user.signup';
import { User } from 'src/app/models/user.session';
import { StorageService } from '../storage/storage.service';

const USERSESSION = 'user_session_saved';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storage: StorageService) {}

  sessionUser: User | null = null;

  googleAuth() {
    const provider = new authFirebase.GoogleAuthProvider();
    provider.addScope('email');
    this.fireAuth(provider);
  }

  emailAuth(email: string, password: string) {
    return new Promise((resolve, reject) => {
      const provider = new authFirebase.EmailAuthProvider();
      authFirebase
        .signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          response.user.getIdToken().then((token) => {
            this.sessionUser = {
              token,
              email,
            };

            this.storage.saveToStorage(USERSESSION, this.sessionUser);
          });
        });
    });
  }

  signUp(data: UserSignup) {
    return authFirebase.createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
  }

  resetPassword(email: string) {
    return authFirebase.sendPasswordResetEmail(auth, email);
  }

  private fireAuth(provider: any) {
    authFirebase.signInWithPopup(auth, provider).then((response) => {
      this.handleSocialSignIn(response);
    });
  }

  private handleSocialSignIn(response: authFirebase.UserCredential) {
    const credential =
      authFirebase.GoogleAuthProvider.credentialFromResult(response);
    const token = credential?.accessToken;
    this.sessionUser = {
      token: token as string,
      email: response.user.email as string,
    };

    this.storage.saveToStorage(USERSESSION, this.sessionUser);
  }

  async signOut() {
    await auth.signOut();
  }
}
