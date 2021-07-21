$(document).ready(function(){
    
    window.setTimeout(function(){
    //    $('.alert').alert();
        document.getElementById("subscribe").style.display="block";
        var loaderText=document.getElementById("loaderText");
//        alert(loaderText);
        loaderText.innerHTML="Experiencing slow internet connection.Just a moment."
//        alert("100");
    },2000);
    
    window.setTimeout(function(){
    //    $('.alert').alert();
        document.getElementById("subscribe").style.display="block";
//        var loaderText=document.getElementById("loaderText");
//        alert(loaderText);
//        loaderText.innerHTML="Experiencing slow internet connection.Try refreshing."
//        alert("100");
    },10000);
    //lightbox.option({
    //      'resizeDuration': 200,
    //      'wrapAround': true
    //    });
    window.onload=function(){

        var imgs = document.images;
            len = imgs.length,
            counter = 0;

        [].forEach.call( imgs, function( img ) {
            if(img.complete)
              incrementCounter();
            else
              img.addEventListener( 'load', incrementCounter, false );
        } );

        
    }
    window.setTimeout(function(){
        var preloader=document.getElementById("preloader");   
        preloader.style.display="none";    
    },4000);
    function incrementCounter() {
            counter++;
            if (( counter === len )|(timeSec)) {
                var preloader=document.getElementById("preloader");   
                preloader.style.display="none";
            }
        }
});
