import { Component, OnInit } from '@angular/core';

@Component({

  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  public title: string;
  public subtitle: string;
  constructor() { }

  ngOnInit() {
    this.title = "Contact Us";
    this.subtitle = "How can we help you?";
  }

}
