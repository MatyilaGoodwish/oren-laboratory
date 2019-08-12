(function () {
    angular.module("orenlabs")
        .config(routeConfiguration);
    function routeConfiguration($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider
            .when("/", {
                templateUrl: "app/services/services.component.html",
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
                controller: "postsController"
            })
            .when("/quotation/request", {
                resolve: {
                   redirect: function(){
                    location.replace('https://uptasker.co.za/b/angulardevelopers');
                   }
                },
                templateUrl: "please wait",
                controller: ""
            })
            .otherwise({
                redirectTo: "/"
            })
    }
}())