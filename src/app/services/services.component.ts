import { Component, OnInit } from '@angular/core'; 
import { CompanyServicesService } from '../company-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {

  constructor(private companyServices: CompanyServicesService) { }

  title: string;
  subtitle:string;

  ngOnInit() {
    this.title = "Services";
    this.subtitle = "What we do for your business";
  }

  placeOrder(){
    location.replace('https://uptasker.co.za/b/angulardevelopers');
  }

  getServices(){
    return this.companyServices.getCompanyServices();
  }
}
