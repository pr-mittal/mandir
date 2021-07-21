var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope,$window,$filter) {
    
    //database of all the images
      $scope.data = [{"name" : "pics/janamashtmi17-1.jpg","category":"janamashtmi","month":"September","year":"2017"},{"name" : "pics/janamashtmi18-1.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-2.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-3.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-4.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-5.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-6.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-7.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-8.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-9.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-10.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-11.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-12.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-13.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-14.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-15.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-16.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-17.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-18.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-19.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-20.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-21.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-22.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-23.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-24.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi18-25.jpg","category":"janamashtmi","month":"September","year":"2018"},{"name" : "pics/janamashtmi1.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi2.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi3.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi4.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi5.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi6.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi7.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi8.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi9.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi10.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi11.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi12.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi13.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi14.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi15.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi16.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi17.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi18.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi19.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi20.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi21.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi22.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi23.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi24.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi25.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi26.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi27.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi28.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi29.JPG","category":"janamashtmi","month":"August","year":"2020"},{"name" : "pics/janamashtmi30.JPG","category":"janamashtmi","month":"August","year":"2020"},
                     {"name" : "pics/ganesh18-1.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-2.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-3.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-4.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-5.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-6.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-7.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-8.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-9.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-10.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-11.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-12.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh18-13.jpg","category":"ganesh chaturthi","month":"September","year":"2018"},{"name" : "pics/ganesh15-1.jpg","category":"ganesh chaturthi","month":"Octuber","year":"2015"},{"name" : "pics/ganesh15-2.jpg","category":"ganesh chaturthi","month":"Octuber","year":"2015"},{"name" : "pics/ganesh15-3.jpg","category":"ganesh chaturthi","month":"Octuber","year":"2015"},{"name" : "pics/ganesh16-1.jpg","category":"ganesh chaturthi","month":"September","year":"2016"},{"name" : "pics/ganesh16-2.jpg","category":"ganesh chaturthi","month":"September","year":"2016"},{"name" : "pics/ganesh16-3.jpg","category":"ganesh chaturthi","month":"September","year":"2016"},{"name" : "pics/ganesh16-4.jpg","category":"ganesh chaturthi","month":"September","year":"2016"},{"name" : "pics/ganesh16-5.jpg","category":"ganesh chaturthi","month":"September","year":"2016"},{"name" : "pics/ganesh16-6.jpg","category":"ganesh chaturthi","month":"September","year":"2016"},
                     {"name" : "pics/tulsivivah17-1.jpg","category":"tulsi vivah","month":"November","year":"2017"},{"name" : "pics/tulsivivah17-1.jpg","category":"tulsi vivah","month":"November","year":"2017"},{"name" : "pics/tulsivivah17-2.jpg","category":"tulsi vivah","month":"November","year":"2017"},{"name" : "pics/tulsivivah17-3.jpg","category":"tulsi vivah","month":"November","year":"2017"},{"name" : "pics/tulsivivah17-4.jpg","category":"tulsi vivah","month":"November","year":"2017"},{"name" : "pics/tulsivivah17-5.jpg","category":"tulsi vivah","month":"November","year":"2017"},{"name" : "pics/tulsivivah17-6.jpg","category":"tulsi vivah","month":"November","year":"2017"},{"name" : "pics/tulsivivah17-7.jpg","category":"tulsi vivah","month":"November","year":"2017"},{"name" : "pics/tulsivivah17-8.jpg","category":"tulsi vivah","month":"November","year":"2017"},{"name" : "pics/tulsivivah17-9.jpg","category":"tulsi vivah","month":"November","year":"2017"},{"name" : "pics/tulsivivah17-10.jpg","category":"tulsi vivah","month":"November","year":"2017"},
                     {"name" : "pics/tour1.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour2.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour3.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour4.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour5.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour6.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour7.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour9.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour10.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour11.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour12.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour13.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour14.JPG","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour15.JPG","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour16.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour17.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour18.jpg","category":"tour","month":"August","year":"2020"},{"name" : "pics/tour19.jpg","category":"tour","month":"August","year":"2020"},
                     {"name" : "pics/aarti1.jpg","category":"aarti","month":"August","year":"2020"},{"name" : "pics/aarti2.jpg","category":"aarti","month":"August","year":"2020"},{"name" : "pics/aarti3.jpg","category":"aarti","month":"August","year":"2020"},{"name" : "pics/aarti4.jpg","category":"aarti","month":"August","year":"2020"},{"name" : "pics/aarti5.jpg","category":"aarti","month":"August","year":"2020"},{"name" : "pics/aarti6.jpg","category":"aarti","month":"August","year":"2020"},{"name" : "pics/aarti7.jpg","category":"aarti","month":"August","year":"2020"}];
    $scope.category=["","tour","aarti","janamashtmi","ganesh chaturthi","tulsi vivah"];
    $scope.month=["",'January','Feburary','March','April','June','July','August','September','Octuber','November','Dec'];
    $scope.year=["",'2020','2018','2017','2016','2015'];
    $scope.selected={"category": "",month:"","year":""};
//    $scope.all;
        $scope.all=$scope.data;
    
//    $scope.records;
        $scope.records=$scope.all.slice(0,12);
    
    
    
    $scope.prevPage=1;
    $scope.currentPage=2;
    $scope.nextPage=3;
    $scope.slideIndex = 1;
    
    //calling function after window has loaded
    $window.onload=function(){
        $scope.changePage(1);
//        alert("page loaded");
        $scope.doFilter();
        $scope.hidePreloader();
        
    }
    $scope.hidePreloader=function()
    {
//        var preloader=document.getElementById("preloader");   
//        preloader.style.display="none";
        
        var imgs = document.getElementsByClassName("mainImg"),
            len = imgs.length,
            counter = 0;
        
        [].forEach.call( imgs, function( img ) {
            if(img.complete)
              incrementCounter();
            else
              img.addEventListener( 'load', incrementCounter, false );
        } );

        function incrementCounter() {
            counter++;
            if ( counter === len ) {
                var preloader=document.getElementById("preloader");   
                preloader.style.display="none";
            }
        }
    }
    
    $scope.doFilter=function()
    {
        //filtering data,to a small array tha will bw further customised
        $scope.all=$scope.data;
        //getting only images according to selected 
        $scope.all=$filter('filter')($scope.data,$scope.selected);
        //order images according to year
//        $scope.all=$filter('orderBy')($scope.all,'year',true);
        
        $scope.records=$scope.all.slice(0,12);
        $scope.changePage(1);
    }
    
    
    
    $scope.openModal=function() {
      document.getElementById("myModal").style.display = "block";
    }

    $scope.closeModal=function () {
      document.getElementById("myModal").style.display = "none";
    }

    


    $scope.plusSlides=function(n) {
      $scope.showSlides($scope.slideIndex += n);
    }

    
    $scope.currentSlide=function (n) {
      $scope.showSlides($scope.slideIndex = n);
    }

    $scope.showSlides=function (n) {
//        alert(n+""+JSON.stringify($scope.records));
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      var captionText = document.getElementById("caption");
        
        //if it was the last slide then start from the starting
      if (n > slides.length) {$scope.slideIndex = 1}
        //it was the first silde then go to the end
      if (n < 1) {$scope.slideIndex = slides.length}
        //doing all dots and slide none
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
//        alert($scope.slideIndex);
//        alert(slides[0]);
        //our choose slide is shown
      slides[$scope.slideIndex-1].style.display = "block";
      dots[$scope.slideIndex-1].className += " active";
        
        //adding cation text along wit download button
      captionText.innerHTML = "<a download href='"+dots[$scope.slideIndex-1].getAttribute("src")+"'>"+dots[$scope.slideIndex-1].alt+"&#11015</a>";

    //changing the position of scrolbar
    //    var outer=document.getElementsByClassName('demo-row')[0].offsetWidth
    //    var colWidth=document.getElementsByClassName('demo-column')[0].offsetWidth;
    //    console.log(outer);
    //    var unit=outer/(slides.length);
    //    var value=unit*(slideIndex-1)+unit/2;
    //    console.log(value);
    //    element=document.getElementsByClassName('demo-row')[0];
    //    console.log(element.scrollWidth);
    //    $('.demo-row')[0].scrollTo(element.scrollWidth/(slides.length-slideIndex+1),0);
    //   

        dots[$scope.slideIndex-1].scrollIntoView({behavior: "smooth",inline: "center"});
    //}
    //var mymodule=angular.module("myModule",[]);
    //mymodule.controller("myController",function($scope){
    //    $scope.array=[{"number":"1"},{"number":"2"}];
    //});
    }
    
    $scope.changePage=function(n)
    {
//        var preloader=document.getElementById("preloader");   
//        preloader.style.display="block";
        var name = "disabled";
        var length=$scope.all.length;
        var pages=(length/12);
        var prev=document.getElementsByClassName("prevButton");
        var page0=document.getElementsByClassName("page0");
        var page1=document.getElementsByClassName("page1");
        var page2=document.getElementsByClassName("page2");
        var next=document.getElementsByClassName("nextButton");
//        alert(prev.length+""+page0.length+""+page1.length+""+page2.length+""+next.length);
//        alert(prev+" "+next);
        
        //chnaging page number accordingly
        if(n==-2)
            {
                //next is clicked 
                $scope.prevPage+=1;
                $scope.nextPage+=1;
                $scope.currentPage+=1;
                //no records are changed just page numbers

            }
        else if(n==-1){
            //prev is clicked
            $scope.prevPage-=1;
            $scope.nextPage-=1;
            $scope.currentPage-=1;
            //no records are chnaged just page numbers
        }
        else{
            //some page number is clicked
            //array.slice(index, end/not included)
            $scope.records=$scope.all.slice((n-1)*12,n*12);
            
        }
        //applying same fuctions to all the Navbar for page numbers
        for(var i=0;i<prev.length;i++)
            {
                prev[i].className = prev[i].className.replace(/\bdisabled\b/g, "");
                next[i].className=next[i].className.replace(/\bdisabled\b/g, "");
                page0[i].className=page0[i].className.replace(/\bdisabled\b/g, "");
                page1[i].className=page1[i].className.replace(/\bdisabled\b/g, "");
                page2[i].className=page2[i].className.replace(/\bdisabled\b/g, "");
                //managing number of buttons and their css
                //checking for lower limit on pages
                if($scope.prevPage==1)
                    {
                        //making the prev button disabled
                        arr = prev[i].className.split(" ");
                        if (arr.indexOf(name) == -1) {
                            prev[i].className += " " + name;
                        }
        //                alert(prev.className);
                    }
        //        alert(Math.ceil(length));
                //checking for upper limit on pages
                if($scope.nextPage>=Math.ceil(pages)){
                    //making the next button disabled
                    arr = next[i].className.split(" ");
                        if (arr.indexOf(name) == -1) {
                            next[i].className += " " + name;
                        }
                    if($scope.nextPage>Math.ceil(pages))
                        {
                            //making the page2 button disabled
                            arr = page2[i].className.split(" ");
                            if (arr.indexOf(name) == -1) {
                                page2[i].className += " " + name;
                            }
        //                    alert(prev.className);
                        }
                }
                if($scope.currentPage>Math.ceil(pages))
                    {
                        //making the page2 button disabled
                        arr = page1[i].className.split(" ");
                        if (arr.indexOf(name) == -1) {
                            page1[i].className += " " + name;
                        }
                        //alert(prev.className);
                    }
                
            }
//        $scope.hidePreloader();
        
    }
    
    
    


});
$(document).ready(function(){
    //closing modal on clicking outside it
    window.onclick = function(event) {
        var modal=document.getElementById("myModal");
    //    alert(event.target +" "+modal);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    window.setTimeout(function(){
    //    $('.alert').alert();
        document.getElementById("subscribe").style.display="block";
        var loaderText=document.getElementById("loaderText");
    //        alert(loaderText);
        loaderText.innerHTML="Experiencing slow internet connection.Just a moment."
    //        alert("100");
    },2000);
    window.setTimeout(function(){
        var preloader=document.getElementById("preloader");   
                preloader.style.display="none";
    },4000);
});


//window.onload=function()
//{
//    angular.element(document.body).scope().showSlides(1);
//    angular.element(document.body).scope().changePage(1);
//    console.log("Start");
//    
//};