 (function(){
   angular.module("orenlabs")
    .controller("welcomeController" , [welcomeController])
    function welcomeController(){
      //this.src = "/assets/app"+ (index + 1) +".png";
      this.currentImage = "../../assets/app1.png";
      this.thumbs = [
          "../../assets/app1.png",
          "../../assets/app2.png",
          "../../assets/app3.png",
          "../../assets/app4.png"
        ];
      this.showImage = function(index){
        console.log(index)
        this.currentImage = this.thumbs[index];
      }
    }

 }())