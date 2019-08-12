import { Component, OnInit, Input } from '@angular/core'; 
import { BlogArticlesService } from "../blog-articles.service"



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(public MyArticles: BlogArticlesService) { }

  public title:string;
  public subtitle :string;

  currentArticle: string; 
  
  public articleStorage;
  path:string = "assets/db/articles.json";
  ngOnInit() {
    this.title = "Articles";
    this.subtitle = "Our Articles";
    
    this.MyArticles.publishedArticles()
    .subscribe(
      data=>{
        localStorage['ARTICLES'] = JSON.stringify(data)
      }
    )
  }

  getArticles()  {
    return JSON.parse(localStorage['ARTICLES']);
  }
}
