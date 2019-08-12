(function(){
    angular.module("orenlabs")
    .config(routeConfiguration);
    function routeConfiguration($routeProvider, $locationProvider){
        $locationProvider.hashPrefix("");
        $routeProvider
            .when("/", {
                templateUrl: "app/welcome/welcome.component.html",
                controller: "welcomeController"
            })
            .when("/services", {
                templateUrl: "app/services/services.component.html",
                controller: "servicesController"
            })
            .when("/articles", {
                templateUrl: "app/articles/articles.component.html",
                controller: "servicesController"
            })
            .when("/collaborate/team", {
                templateUrl: "app/about/about.component.html",
                controller: "servicesController"
            })
            .when("/contact", {
                templateUrl: "app/contact/contact.component.html",
                controller: "servicesController"
            })
            .when("/single/post", {
                templateUrl: "app/articles/single-post.html",
                controller: "servicesController"
            })
            .otherwise({
                redirectTo: "/"
            })
    }
}())