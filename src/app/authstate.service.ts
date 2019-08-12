import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthstateService {

  constructor() { }

  public currentState:boolean;
  public isUser():any{
    addEventListener("loggedInState", (e)=>{
      this.currentState = true;
    })
  }
  public notUser():any{
    addEventListener("loggedOutState", (e)=>{
      this.currentState = false;
    })
  }
}
