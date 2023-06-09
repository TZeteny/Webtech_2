import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Swords';

  constructor(
    public auth: AngularFireAuth,
  ) { }

  signInClicked(): void {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOutClicked(): void {
      this.auth.signOut();
  }

}
