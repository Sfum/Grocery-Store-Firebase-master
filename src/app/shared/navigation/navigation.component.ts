import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {UserAccountComponent} from "../../auth/user-account/user-account.component";
import {LogoutComponent} from "../../auth/logout/logout.component";
import {MatDialog} from "@angular/material/dialog";
import {async, Observable} from "rxjs";
import firebase from "firebase/compat";
import {AuthService} from "../../services/auth.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    UserAccountComponent,
    LogoutComponent,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass'
})
export class NavigationComponent implements OnInit {

  user$: Observable<firebase.User>;


  constructor(public dialog: MatDialog,
              private authService: AuthService) {}

  openDialog() {
    const dialogRef = this.dialog.open(UserAccountComponent, {
      width: '400px',
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
