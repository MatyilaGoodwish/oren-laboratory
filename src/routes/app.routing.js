(function () {
    angular.module("orenlabs")
        .config(routeConfiguration);
    function routeConfiguration($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider
            .when("/", {
                templateUrl: "app/services/services.component.html",
                controller: "Admin"
            })
            .when("/services", {
                templateUrl: "app/services/services.component.html",
                controller: "Admin"
            })
            .when("/articles", {
                templateUrl: "app/articles/articles.component.html",
                controller: "Admin"
            })
            .when("/collaborate/team", {
                templateUrl: "app/about/about.component.html",
                controller: "Admin"
            })
            .when("/contact", {
                templateUrl: "app/contact/contact.component.html",
                controller: "Admin"
            })
            .when("/single/post", {
                templateUrl: "app/articles/single-post.html",
                controller: "Admin"
            })
            .when("/account/login", {
                templateUrl: "app/login/login.component.html",
                controller: "Admin"
            })
            .when("/account/dashboard", {
                templateUrl: "app/dashboard/dashboard.component.html",
                controller: "Admin"
            })
            .when("/announcements", {
                resolve: {
                    retrievePosts: function () { 
                       // $cookies.put("app-announcement", true);
                    }
                },
                templateUrl: "admin/posts.html",
                controller: "Admin"
            })
            .when("/quotation/request", {
                resolve: {
                    redirect: function () {
                        location.replace('https://uptasker.co.za/b/angulardevelopers');
                    }
                },
                templateUrl: "please wait",
                controller: ""
            })
            .when("/account/copyright/edit", {
                templateUrl: "admin/edit.copyright.html",
                controller: "Admin"
            })
            .otherwise({
                redirectTo: "/"
            })
    }
}())