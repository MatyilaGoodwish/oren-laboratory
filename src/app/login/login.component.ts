import { Component, OnInit, Input } from '@angular/core';
import { LoginSvcService } from '../login-svc.service';

 
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: LoginSvcService) { }

  ngOnInit() {
  }
 
  public email:String;
  public password:String;
  public isLogginAttempt:Boolean;
  protected userLoginState:String;
  protected userLoginValidate:Boolean = false;
  

  loginForm() {
    this.userLoginState = this._auth.user === this.email && this._auth.password === "demo123" ? "Login success" : "Login fail bad credentials";
    this.userLoginValidate = this._auth.user === this.email && this._auth.password === "demo123" ? true: false;
    
    if(this.userLoginValidate === true){
      this.isLogginAttempt = true;
      location.href = "/dashboard";
    }
    if(this.userLoginValidate === false){
      this.isLogginAttempt =  !this.isLogginAttempt;
      //location.href = "/";
    }
    
  }

   
}
