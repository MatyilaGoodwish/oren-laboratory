(function(){
    const app = angular.module("orenlabs");
    app.service("companySvc", function(){
        this.getArticles = function(){
            return [
                {
                  "title": "5 Reasons you should hire Angular Developer in South Africa",
                  "link": "https://www.linkedin.com/pulse/5-reasons-you-should-hire-angular-developer-south-africa-matyila/",
                  "image": "../../assets/logo1.png"
                },
                {
                  "title": "5 Benefits on Angular Development for Small Business in South Africa",
                  "link": "https://www.linkedin.com/pulse/5-benefits-angular-development-small-business-south-africa-matyila/",
                  "image": "../../assets/logo1.png"
                },
                {
                  "title": "Effective Angular Prototyping",
                  "link": "https://uptasker.co.za/blog/efficient-angular-prototyping/",
                  "image": "../../assets/logo1.png"
                },
                {
                  "title": "Angular Business Notation",
                  "link": "https://www.linkedin.com/pulse/angular-business-notation-goodwish-matyila",
                  "image": "../../assets/logo1.png"
                }
              ] 
        }
        this.getOffers = function(){
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
    });
}())