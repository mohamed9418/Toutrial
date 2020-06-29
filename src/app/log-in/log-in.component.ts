import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userName = 'mohamed'
  password = ''
  errorMessage = 'invalid credentials !!'
  inValidCredentials = false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogInClick() {
    this.inValidCredentials = !(this.userName === 'mohamed' && this.password === 'abc123')
    if (!this.inValidCredentials)
      this.router.navigate(['welcome',this.userName])
  }
}
