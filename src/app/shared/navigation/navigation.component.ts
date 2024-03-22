import {Component, OnInit} from '@angular/core';
import {UserAccountComponent} from "../../auth/user-account/user-account.component";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import firebase from "firebase/compat";
import {AuthService} from "../../services/auth.service";
import {SignUpComponent} from "../../auth/sign-up/sign-up.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass'
})
export class NavigationComponent implements OnInit {

  user$: Observable<firebase.User>;


  constructor(public dialog: MatDialog,
              private authService: AuthService) {}


  openDialog(): void {
    const dialogRef = this.dialog.open(UserAccountComponent, {
      width: '600px',
      data: { /* you can pass data to the dialog if needed */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '600px',
      data: { /* you can pass data to the dialog if needed */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }



  signOut() {
    this.authService.signOut();
  }
}
