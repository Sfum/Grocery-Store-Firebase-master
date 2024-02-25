import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrl: './product-shell.component.sass'
})
export class ProductShellComponent implements OnInit {
  user$: Observable<firebase.User>;
  isAdmin: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user$ = this.authService.user$;
    this.authService.isAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
  }
}
