(function () {
    const app = angular.module("orenlabs");
    app.controller("postsController", ["$cookies", "$http",
        function postsController($cookies, $http) {
            
            this.articles = [];
            this.blogPost = {
                title: "",
                message: "",
                timestamp: new Date(),
                postId: btoa(this.title) + btoa(this.message) + btoa(this.timestamp)
            }
            this.publish = function () {
                //use firebase to add notification
                let blogRef = firebase.firestore().collection("app-notifications"); 
                try{
                    blogRef.add( this.blogPost );
                }catch(error){
                    console.log(error);
                }
               

            }
        }])
}())