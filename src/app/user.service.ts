import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import * as _ from 'lodash';
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static readonly SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser = undefined;

  constructor(private googleAuthService: GoogleAuthService,
    private ngZone: NgZone) {
  }

  setUser(user: GoogleUser): void {
    this.user = user;
  }

  getCurrentUser(): GoogleUser {
    return this.user;
  }

  getToken(): string {
    const token: string = sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error('no token set, authentication required');
    }
    return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
  }

  signIn() {
    this.googleAuthService.getAuth().subscribe((auth) => {
      console.log('auth info: ', auth);
      auth.signIn().then(res => this.signInSuccessHandler(res), err => this.signInErrorHandler(err));
    });
  }

  signOut(): void {
    this.googleAuthService.getAuth().subscribe((auth) => {
      try {
        auth.signOut();
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(UserService.SESSION_STORAGE_KEY);
    });
  }

  isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(UserService.SESSION_STORAGE_KEY));
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.ngZone.run(() => {
      this.user = res;
      sessionStorage.setItem(
        UserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
      );
    });
  }

  private signInErrorHandler(err) {
    console.warn(err);
  }
}
