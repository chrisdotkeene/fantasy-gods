import { GoogleAuthService, GoogleApiService } from 'ng-gapi';
import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sheetId: string;
  sheet: any;
  foundSheet: any;

  constructor(
            private userService: UserService,
            private authService: GoogleAuthService,
            private gapiService: GoogleApiService
  ) {
    this.gapiService.onLoad().subscribe();
    this.authService.getAuth().subscribe(res => console.log('gapi: ', res));
  }

  signIn() {
    this.userService.signIn();
  }
}
