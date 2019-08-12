import { Component, OnInit } from '@angular/core';
import { AuthstateService } from '../authstate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authstate: AuthstateService) { }
  public userIsLogged:Boolean;
  ngOnInit() {
 

  }
  menuState;
  setAsActive(selectedItem){
    this.menuState = "active";
  }

}
