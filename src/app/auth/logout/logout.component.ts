import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.sass'
})
export class LogoutComponent {

  constructor(private authService: AuthService) { }

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
