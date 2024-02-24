import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {UserAccountComponent} from "../../auth/user-account/user-account.component";
import {LogoutComponent} from "../../auth/logout/logout.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    UserAccountComponent,
    LogoutComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass'
})
export class NavigationComponent {

}
