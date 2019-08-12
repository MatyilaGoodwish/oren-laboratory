import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class LoginSvcService {

  constructor() { }

  public user: string = "goodwish@axxess.co.za";
  public password: string = "demo123";

}
