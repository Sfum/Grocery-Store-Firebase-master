import {Component, Inject} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.sass'
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.signUp(this.email, this.password)
      .then(() => {
        console.log('User signed up successfully');

      })
      .catch(error => {
        console.error('Error signing up:', error.message);

      });
  }
}
