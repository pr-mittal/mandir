<h1>Shri Shivling Triveni Mandir</h1>

Official Site . Shri Shivling Triveni Mandir , Bathinda . Est. 1995

https://siliconmerc.github.io/mandir/

Features:

- Immersive design compatible for screens of all sizes
- Easy to communicate with the UI 
- Footer specially designed for max information and easy to access information
- Different pictures based on screen size and resolution for faster loading
- Various meta tags to improve site visibility

Detailed Description :

1. Navigation Tools

   - Bootstrap enabled navigation bar header
   - Javascript enabled "Button group" for page navigation
   - AngularJs enabled searching and sorting data

   ![image](https://user-images.githubusercontent.com/56964828/127762639-5599171c-4c7c-4b66-8622-bd9a9d0a97fb.png)

2. Footer

   - Custom designed using flex box for all screen size compatibility
   - Special touch : Embedding various social media links and maps

   ![image](https://user-images.githubusercontent.com/56964828/127762645-12a207da-759f-43f7-ad1e-c69758cb1bb7.png)

3.  Timeline 

   HTML

   ```html
   <div class="container right">
       <div class="content">
         <h2>20 November 1995</h2>
         <p><h4>Inaguration</h4> of the spiritual premises by Mr. Ashok Choudhary.</p>
       </div>
     </div>
   ```

   CSS

   ```css
   
   /* The actual timeline (the vertical ruler) */
   .timeline {
     position: relative;
     max-width: 1200px;
     margin: 0 auto;
   }
   
   /* The actual timeline (the vertical ruler) */
   .timeline::after {
     content: '';
     position: absolute;
     width: 6px;
     background-color:#c75347;
     top: 0;
     bottom: 0;
     left: 50%;
     margin-left: -3px;
   }
   
   /* Container around content */
   .container {
     padding: 10px 40px;
     position: relative;
     background-color: inherit;
     width: 50%;
       margin: 0px;
       color: black;
   /*
       margin-left: none;
       margin-right:none;
   */
   }
   
   /* The circles on the timeline */
   .container::after {
     content: '';
     position: absolute;
     width: 25px;
     height: 25px;
     right: -17px;
     background-color: white;
     border: 4px solid #FF9F55;
     top: 15px;
     border-radius: 50%;
     z-index: 1;
   }
   
   /* Place the container to the left */
   .left {
     left: 0;
       
   }
   
   /* Place the container to the right */
   .right {
     left: 50%;
       
   }
   
   /* Add arrows to the left container (pointing right) */
   .left::before {
     content: " ";
     height: 0;
     position: absolute;
     top: 22px;
     width: 0;
     z-index: 1;
     right: 30px;
     border: medium solid #c75347;
     border-width: 10px 0 10px 10px;
     border-color: transparent transparent transparent #c75347;
   }
   
   /* Add arrows to the right container (pointing left) */
   .right::before {
     content: " ";
     height: 0;
     position: absolute;
     top: 22px;
     width: 0;
     z-index: 1;
     left: 30px;
     border: medium solid #c75347;
     border-width: 10px 10px 10px 0;
     border-color: transparent #c75347 transparent transparent;
   }
   
   /* Fix the circle for containers on the right side */
   .right::after {
     left: -16px;
   }
   
   /* The actual content */
   .content {
     padding: 20px 30px;
     background-color: white;
     position: relative;
     border-radius: 6px;
       border: 2px solid #c75347;
       background-color:white;
       
   }
   
   /* Media queries - Responsive timeline on screens less than 600px wide */
   @media screen and (max-width: 600px) {
     /* Place the timelime to the left */
     .timeline::after {
     left: 31px;
     }
     
     /* Full-width containers */
     .container {
     width: 100%;
     padding-left: 70px;
     padding-right: 25px;
     }
     
     /* Make sure that all arrows are pointing leftwards */
     .container::before {
     left: 60px;
     border: medium solid #c75347;
     border-width: 10px 10px 10px 0;
     border-color: transparent #c75347 transparent transparent;
     }
   
     /* Make sure all circles are at the same spot */
     .left::after, .right::after {
     left: 15px;
     }
     
     /* Make all right containers behave like the left ones */
     .right {
     left: 0%;
     }
   }
   
   ```

   Result :

   ![image](https://user-images.githubusercontent.com/56964828/127762641-5eb9f76e-748c-4772-b954-1f5719889b52.png)

   4. Photo Gallery

      - Angular Js used for populating data based on choices

        HTML

        ```html
        <div id="myModal" class="modal">
          <div class="modal-content">
        
            <div class="mySlides" ng-repeat="obj in records">
              <div class="numbertext">{{$index+1}} / {{records.length}}</div>
              <img src="{{obj.name}}" alt="Shri Shivling Triveni Mandir Bathinda {{obj.category}}">
              <span class="close cursor" ng-click="closeModal()">&times;</span>
            </div>
            
            <a class="prev" ng-click="plusSlides(-1)">&#10094;</a>
            <a class="next" ng-click="plusSlides(1)">&#10095;</a>
        
            <div class="caption-container">
                <p id="caption"></p>
                
            </div>
            <div class="demo-row">
                <div class="demo-column" ng-repeat="obj in records">
                  <img class="demo cursor" src="{{obj.name}}" style="width:100%" ng-click="currentSlide($index+1)" alt="Shri Shivling Triveni Mandir Bathinda {{obj.category}}">
                </div>
            </div>
        
            
          </div>
        </div>
        ```

        JS

        https://github.com/SiliconMerc/mandir/blob/main/js/photoGallery.js

      - Scroll Bar for navigation between selected images on page

      - Next and previous button for changing view 1 at a time

      - Modal close or return on clicking outside image or on close button

      Result : 

   ![image](https://user-images.githubusercontent.com/56964828/127762653-49e04331-6f6b-4c5a-9c71-6ba47caa1b7e.png)





Languages : HTML , CSS , JS , JQUERY , ANGULAR JS

Software Used : XAMPP , VS Code

Most important thing is to have fun :)

