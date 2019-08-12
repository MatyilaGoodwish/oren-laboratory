import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Pipe, PipeTransform } from '@angular/core'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component'; 
import { BlogArticlesService } from './blog-articles.service';
import { CompanyServicesService } from './company-services.service';
import { LoginComponent } from './login/login.component';
import { LoginSvcService} from './login-svc.service'; 
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { AuthstateService } from './authstate.service';
 
@NgModule({
  declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        WelcomeComponent,
        AboutComponent,
        ServicesComponent,
        ContactComponent,
        ArticlesComponent,
        LoginComponent,
        DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent},
      { path: 'collaborate/team', component: AboutComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'services', component: ServicesComponent},
      { path: 'articles', component: ArticlesComponent} ,
      { path: 'articles/:title', component: ArticlesComponent},
      { path: 'login', component: LoginComponent }
      //{ path: 'dashboard', component: DashboardComponent}
    ]),
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
     BlogArticlesService,
     CompanyServicesService,
     LoginSvcService,
     AuthstateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
