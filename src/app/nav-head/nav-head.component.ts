import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-head',
  templateUrl: './nav-head.component.html',
  styleUrls: ['./nav-head.component.css']
})
export class NavHeadComponent implements OnInit {
user:string="Manish"
  constructor() { }

  ngOnInit(): void {
  }

}
