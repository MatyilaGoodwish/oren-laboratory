(function () {
    const app_bootstrap = angular.module("orenlabs");
    app_bootstrap.directive("appRoot", bootstrapInit);
    function bootstrapInit() {
        return {
            restrict: "EA",
            template: `
            <app-header></app-header>

            <div ng-view></div>

            <app-footer></app-footer>
            `
        }
    }
    app_bootstrap.directive("appHeader", function(){
        return {
            restrict: "E",
            templateUrl: "app/header/header.component.html" 
        }
    })
    app_bootstrap.directive("appFooter", function(){
        return {
            restrict: "EA", 
            templateUrl: "app/footer/footer.component.html"
        }
    })
}())