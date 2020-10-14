import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   public pageTitle = 'This is a description for the First slide.';
  constructor() { }

  ngOnInit(): void {
  }

}
