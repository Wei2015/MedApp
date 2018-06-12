import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    title : string = 'Our location: ';
    lat: number = 37.3352;
    lng: number = -121.8811;

  constructor() { }

  ngOnInit() {

  }
    
}
