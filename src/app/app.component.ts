import {Component, OnInit} from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  user$: Observable<firebase.User>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}
