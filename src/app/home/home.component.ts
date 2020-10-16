import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
list:Array<any>=[
  {name:'Manish', email:'manish@gmail.com', phone:9898989898, add:'Ghaziabad'},
  {name:'Rohit', email:'rohit@gmail.com', phone:7894561232, add:'New Delhi'},
  {name:'Saurav', email:'saurav@gmail.com', phone:7418529630, add:'Kolkata'},
  {name:'Gaurav', email:'gaurav@gmail.com', phone:5208503624, add:'Pune'},
  {name:'Mayur', email:'mayur@gmail.com', phone:7894587458, add:'Mumbai'},
  {name:'Amit', email:'amit@gmail.com', phone:7531598524, add:'Chennai'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
