import { Injectable , OnInit } from '@angular/core';
import { GetCompanyServicesService } from './get-company-services.service';
 

@Injectable({
  providedIn: 'root'
})

 
export class CompanyServicesService implements OnInit {

  constructor(public servicesAPI:GetCompanyServicesService) { }

  webServices: any = [];
  ngOnInit(){
    this.servicesAPI.getCompanySvc().subscribe(data=> console.log(data));
  }



  getCompanyServices() {
     
    //
    return [
      {
        "title": "Website Development",
        "description": "Custom website development services using latest technology standards in the industry, We choose the right tools for the business type.",
        "slug": "C#, Java, HTML, Angular, Ajax, ReactJS, Vue"
      },
      {
        "title": "UX/UI Design",
        "description": "We Design professional layouts for your website or brand and make it mobile responsive and dynamic",
        "slug": "UX, UI, Bootstrap, Material UI, Kendo UI, WebixJS"
      }
  ]
  }

  ngOnDestroy(){
    
  }
}
