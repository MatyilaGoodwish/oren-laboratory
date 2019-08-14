(function () {
    const app = angular.module("orenlabs", ["ngRoute", "ngCookies", "ngSanitize", "kendo.directives"]);
     app.run(function ($cookies, $http) {
        //$cookies.remove("user-active");
    })
}())