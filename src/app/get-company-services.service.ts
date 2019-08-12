import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetCompanyServicesService {

  constructor(private _http:HttpClient) { }

  getCompanySvc(){
    return this._http.get<any>("assets/db/services.json")
      .pipe(map(data => {return data;}));
  }
}
