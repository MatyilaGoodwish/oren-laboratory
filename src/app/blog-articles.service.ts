import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root'
})

 

export class BlogArticlesService {
  constructor(private http: HttpClient) { }
  public thumbnail : string = "../../assets/";
  public getThumbnail(thumbId:string) :string {
    return this.thumbnail + thumbId;
  }
 

  publishedArticles()  {
    return this.http.get<any>('assets/db/articles.json')
      .pipe(map(data => { return data; }) )
  }
}
