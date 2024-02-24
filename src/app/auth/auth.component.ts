import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.sass'
})
export class AuthComponent {

}
