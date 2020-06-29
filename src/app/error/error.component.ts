import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMassage = 'something wrong happend please connect help ***-***'
  constructor() { }

  ngOnInit(): void {
  }

}
