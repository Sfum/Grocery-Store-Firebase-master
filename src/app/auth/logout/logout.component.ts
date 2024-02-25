import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MatButton} from "@angular/material/button";
import {AsyncPipe, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import firebase from "firebase/compat";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    MatButton,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.sass'
})
export class LogoutComponent implements  OnInit{

  user$: Observable<firebase.User>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  signOut() {
    this.authService.signOut()
      .then(() => {
        console.log('User signed out successfully');
        // Optionally, navigate to another page upon successful sign out
      })
      .catch(error => {
        console.error('Error signing out:', error.message);
        // Handle error, e.g., display error message to user
      });
  }
}
