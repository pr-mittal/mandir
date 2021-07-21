var module=angular.module("myModule",[]);
module.controller("myController",function($scope,$window){
    $scope.all=[{name:"A",amount:"200"},{name:"A",amount:"200"},{name:"A",amount:"200"},{name:"A",amount:"200"},{name:"A",amount:"200"},{name:"A",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"},{name:"B",amount:"200"}];
    $scope.records=$scope.all.slice(0,12);
    
    
    $scope.prevPage=1;
    $scope.currentPage=2;
    $scope.nextPage=3;
    $scope.indexStart;
    
    //calling function after window has loaded
    $window.onload=function(){
            $scope.changePage(1);
    //        alert("page loaded");
//            $scope.doFilter();
//            $scope.changePage(1);
//            alert(JSON.stringify($scope.records));
            
        }
    $scope.changePage=function(n)
        {

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
                $scope.indexStart=(n-1)*12;

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


        }
});
    
    