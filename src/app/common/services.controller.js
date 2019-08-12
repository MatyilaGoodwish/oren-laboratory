(function(){
    const app = angular.module("orenlabs");
    app.controller("servicesController", 
    ["companySvc","$http", servicesController]);
    function servicesController(companySvc, $http){
       
        this.getCompanyArticles = companySvc.getArticles();
        this.getServices = companySvc.getOffers();
    }


    app.controller("postsController", 
    [postsController]);
    function postsController(){
        
    }
}())