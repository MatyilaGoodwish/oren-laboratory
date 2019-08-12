(function(){
    const app = angular.module("orenlabs");
    app.controller("servicesController", 
    ["companySvc","$http","$cookies", servicesController]);
    function servicesController(companySvc, $http, $cookies){
        this.visitor = function(){
            $cookies.put("last-visit", new Date())
        }()
        this.getCompanyArticles = companySvc.getArticles();
        this.getServices = companySvc.getOffers();
    }


    app.controller("postsController", 
    [postsController]);
    function postsController(){
        
    }
}())