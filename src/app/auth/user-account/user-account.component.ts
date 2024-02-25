import {Component, Inject} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormsModule} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.sass'
})
export class UserAccountComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,
              public dialogRef: MatDialogRef<UserAccountComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public router: Router) { }

  onSubmit() {
    this.authService.signIn(this.email, this.password)
      .then(() => {
        console.log('User logged in successfully');
        this.dialogRef.close();
        this.router.navigate(['/']);
      })
      .catch((error: { message: any; }) => {
        console.error('Error logging in:', error.message);
      });
  }
}
