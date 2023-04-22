import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: string;
  constructor(private router: Router) {}
  onConnection(username: string) {
    this.router.navigate(['todo/:' + username]);
  }
  ngOnInit() {}
}
