/* Smooth scrolling */
$(document).ready(function() {
        // Add smooth scrolling to all links in navbar + footer link
        $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {

                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });

    /* Javascript | Jquery */
    
    var initialPlaylist = [];
    /// Then we need to filter initialPlaylist into filteredPlaylistArrayt
    var filteredPlaylist = [];
    var userProfile = [];
    var counter = 0;
    var genreChoicesArray = ["Action Packed","Action","Adventure","War","Western","Light-Hearted","Animation","Comedy","Family","Musical","Romance","Adrenaline Rush","Crime","Horror","Mystery","Thriller","Fantastical","Animation","Fantasy","Foreign","Sci-Fi","Heavy-Hitters","Documentary","Drama","History"];
                                                        // USER SELECTS DATE RANGE                      //CALIBER GETS PASSED AS NUMBER         //PUSH ALL RATINGS THAT USER WANTS TO SEE INTO ARRAY
    /* GENRE (number) , INDIE (number) , DATE RANGE1(YEAR)(number) , DATERANGE2(YEAR)(number) , CALIBUR1(6.0)(number), CALIBUR2(9.0)(number), RATING(G)(string), RATING(PG)(string), RATING(R)(string) */

          //Youtube iFrame video player

          // 2. This code loads the IFrame Player API code asynchronously.
          var tag = document.createElement('script');

          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          // 3. This function creates an <iframe> (and YouTube player)
          //    after the API code downloads.
          var player;
          function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
              height: '390',
              width: '640',
              videoId: 'M7lc1UVf-VE',
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          }

          // 4. The API will call this function when the video player is ready.
          function onPlayerReady(event) {
            event.target.playVideo();
          }

          // 5. The API calls this function when the player's state changes.
          //    The function indicates that when playing a video (state=1),
          //    the player should play for six seconds and then stop.
          var done = false;
          function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
              setTimeout(stopVideo, 6000);
              done = true;
            }
          }
          function stopVideo() {
            player.stopVideo();
          }

    // FRONT END TO DO - In order for this onclick to work each dropdown item needs to have the class "genre" and a value="genreName"
    $('.genre').on('click', function(){
        // checks to make sure userProfile is empty then adds the value of the drop down genre selected to the empty userProfile array
        if(counter === 0){
            userProfile.unshift($(this).val());
            console.log(userProfile);
            $('#hide-display').css('display',"block");
            $('.placeholderSidebarLeft').css("display","none")
            $('.placeholderSidebarRight').css("display","none")
            questionStartFromSecond();         
        }
        
    });

    function questionStartFromSecond(){

        
        $('#render-div').hide();
        $('#render-div').empty();
        $('#render-div').show(2000);

        var questionTwoDiv = $('<div>').addClass('question-two-div');

        var questionTwoButtonDiv = $('<div>').addClass('question-two-button-div'); 
        var questionTwoText =$('<p>').addClass('question-two-html').text("Would you like a mainstream movie or indie movie?")/*.css('display',block)*/;
        var questionTwoButtonIndie = $('<button>').addClass('question-two-button').text("Indie Movie").attr("value", "200000");
        var questionTwoButtonMainstream = $('<button>').addClass('question-two-button').text("Mainstream Movie").attr("value", "200000");


        questionTwoButtonDiv.append(questionTwoButtonIndie);
        questionTwoButtonDiv.append(questionTwoButtonMainstream);
        questionTwoDiv.prepend(questionTwoText);
        questionTwoDiv.append(questionTwoButtonDiv);

        $('#render-div').append(questionTwoDiv);
        console.log("CONSOLE LOG BEFOR BUTTON CLICK")
        // Once the user clicks the rendered buttons (indie / mainstream) the value of the button will be pushed to the array (userPlaylist) as the 2nd element in the array
        // The div will fade out and once its faded out completely the div will be emptyed and will be ready for the next question to be populated inside. 
        if(counter === 0){
        $(document).on("click", ".question-two-button" , function(){
            console.log("userProfile array after button click, before any pushes inside questionStartFromSecond(): " + userProfile);
            // Why is this pushing twice (the entire function is running twice)
            userProfile.push(parseInt($(this).val()));

            console.log("userProfile array after push inside questionStartFromSecond(): " + userProfile);

            $('#render-div').hide();
            $('#render-div').empty();
            console.log("userProfile array after button click, deeper still questionStartFromSecond(): " + userProfile);

            
            
            questionThree();
        })
    } /*If statement ends here*/
    } /*Question Start From here ends here */

    function questionThree(){

            $('#render-div').show(2000);
           
            var questionThreeDiv = $('<div>').addClass('question-three-div');
            var questionThreeButtonDiv = $('<div>').addClass('question-three-button-div');
            var questionThreeText =$('<p>').addClass('question-three-html').text("Pick the year range")/*.css('display',block)*/;
            var buttonRangeOne = $('<button>').addClass('question-three-button').text('1950').attr("value", "1950");
            var buttonRangeTwo = $('<button>').addClass('question-three-button').text('1970').attr("value", "1970");
            var buttonRangeThree = $('<button>').addClass('question-three-button').text('1990').attr("value", "1990");
            var buttonRangeFour = $('<button>').addClass('question-three-button').text('2017').attr("value", "2017");

            // Combine content and render to page
            questionThreeButtonDiv.prepend(buttonRangeOne);
            questionThreeButtonDiv.append(buttonRangeTwo);
            questionThreeButtonDiv.append(buttonRangeThree);
            questionThreeButtonDiv.append(buttonRangeFour);

            questionThreeDiv.prepend(questionThreeText);
            questionThreeDiv.append(questionThreeButtonDiv);

            $('#render-div').append(questionThreeDiv);

            if(counter === 0){
            $(document).on("click", ".question-three-button", function(){

            userProfile.push(parseInt($(this).val()));

            console.log(userProfile);

            // first if statement checks to make both years necessary for year range have been selected.
            // Other if else statement make sure the times were selected in proper chronological order and if they were not, they get swapped. 
            if(userProfile.length == 4){

                if(userProfile[userProfile.length-1] > userProfile[userProfile.length-2]){
                    $('#render-div').hide();
                    $('#render-div').empty();
                    questionFour();
                    console.log(userProfile);
                } else {

                    var a = userProfile[userProfile.length-1];
                    userProfile[userProfile.length-1] = userProfile[userProfile.length-2];
                    userProfile[userProfile.length-2] = a;

                    $('#render-div').hide();
                    $('#render-div').empty();
                    console.log(userProfile);
                    questionFour();
                }

            }

        })
        } /* Question 3 if statement ends here */
    }

    function questionFour(){
        $('#render-div').show(2000);

        var questionFourDiv = $('<div>').addClass('question-four-div');
        var questionFourButtonDiv = $('<div>').addClass('question-four-button-div');
        var questionFourText =$('<p>').addClass('question-three-html').text("What caliber of movie would you like to see?")/*.css('display',block)*/;
        var buttonCriticOne = $('<button>').addClass('question-four-button').text('Any type of movie').attr("value", "any");
        var buttonCriticTwo = $('<button>').addClass('question-four-button').text('Bad Movies ONLY').attr("value", "bad");
        var buttonCriticThree = $('<button>').addClass('question-four-button').text('Crowd Pleaser').attr("value", "crowd");
        var buttonCriticFour = $('<button>').addClass('question-four-button').text('Critically Acclaimed').attr("value", "critic");

        questionFourDiv.prepend(questionFourText);

        questionFourButtonDiv.prepend(buttonCriticOne);
        questionFourButtonDiv.append(buttonCriticTwo);
        questionFourButtonDiv.append(buttonCriticThree);
        questionFourButtonDiv.append(buttonCriticFour);

        questionFourDiv.append(questionFourButtonDiv);

        $('#render-div').append(questionFourDiv);
        if(counter === 0){
        $(document).on("click", ".question-four-button", function(){

            if($(this).val() == "any"){
                userProfile.push(1);
                userProfile.push(10);
                $('#render-div').hide();
                $('#render-div').empty();
                console.log(userProfile);
                questionFive();               
            }
            if($(this).val() == "bad"){
                userProfile.push(1)
                userProfile.push(4)
                $('#render-div').hide();
                $('#render-div').empty();
                console.log(userProfile);
                questionFive();               
            }
            if($(this).val() == "crowd"){
                userProfile.push(4)
                userProfile.push(8)
                $('#render-div').hide();
                $('#render-div').empty();
                console.log(userProfile);
                questionFive();               
            }
            if($(this).val() == "critic"){
                userProfile.push(8)
                userProfile.push(10)
                $('#render-div').hide();
                $('#render-div').empty();
                console.log(userProfile);
                questionFive();                  
            }

        })
    }/* If Statement ends here */

    }/* QuestionFour functio ends here */

        function questionFive(){
        $('#render-div').show(2000);

        // QUESTION 3 IS FILTER BY YEAR RANGE
        // Create Content
        var questionFiveDiv = $('<div>').addClass('question-five-div');
        var questionFiveButtonDiv = $('<div>').addClass('question-five-button-div');
        var questionFiveText =$('<p>').addClass('question-five-html').text("Select Movie Association Ratings:")/*.css('display',block)*/;
        var buttonRatingOne = $('<button>').addClass('question-five-button').text('G').attr("value", 'G');
        var buttonRatingTwo = $('<button>').addClass('question-five-button').text('PG').attr("value", 'PG');
        var buttonRatingThree = $('<button>').addClass('question-five-button').text('PG-13').attr("value", 'PG-13');
        var buttonRatingFour = $('<button>').addClass('question-five-button').text('R').attr("value", 'R');
        var buttonStart = $('<button>').addClass('start').text('Start Watching Trailers').css('display', "block");

        questionFiveDiv.prepend(questionFiveText);

        questionFiveButtonDiv.prepend(buttonRatingOne);
        questionFiveButtonDiv.append(buttonRatingTwo);
        questionFiveButtonDiv.append(buttonRatingThree);
        questionFiveButtonDiv.append(buttonRatingFour);
        questionFiveButtonDiv.append(buttonStart)
        questionFiveDiv.append(questionFiveButtonDiv);

        $('#render-div').append(questionFiveDiv);
        if(counter === 0){
        $(document).on("click", ".question-five-button", function(){

            if(userProfile.length<10){
                userProfile.push($(this).val());
                console.log(userProfile);
            }

        })

        
        $(document).on("click", ".start", function(){
            // Only if at least one rating option has been selected
            if(userProfile.length >= 7){
            console.log("start was clicked")
            $('#render-div').hide();
            $('#render-div').empty();
            videoRender();
            }

        });
        
    } /* If statemet ends here */

    if(counter === 1){

        var createNewPlaylistDiv = $('<div>').addClass('create-new-playlist-div');
        var addNewDiv = $('<div>').addClass('new-playlist-div');
        var genreNumToString = userProfile[0];
        console.log("This console.log should show the genre selected as a string: "  + genreChoicesArray[genreNumToString]);
        var genreText = $('<h6>').addClass('genre-text').text("test"/*genreChoicesArray[genreNumToString]*/);

        addNewDiv.append(genreText);
        createNewPlaylistDiv.append(genreText);
        createNewPlaylistDiv.append(addNewDiv);
        $('#playlist-div').append(createNewPlaylistDiv);



    } /* If counter statement end */

    $('#playlist-div').append(createNewPlaylistDiv);


    } // Question 5 end function


    function videoRender(){

        $('#render-div').show(1000);
        $('.placeholderSidebarLeft').css("display","inline-block");
        $('.placeholderSidebarRight').css("display","inline-block");

        if(counter === 0){
        var createDiv = $('<div>').addClass('createButton').text("Create a new playlist")
        $('#playlist-div').prepend(createDiv);
        }   

        var movieInfoContainer = $('<div>').addClass('movie-info-container').text('MOVIE INFO');
        var moviePlayerContainer =$('<div>').addClass('movie-player-container');
        var moviePlayerDiv = $('<div id="player"></div>').addClass('movie-player-div');
        var leftArrow =$('<img>').addClass('left-arrow').attr('src','../images/leftarrow.png').css('display',"inline-block");
        var rightArrow =$('<img>').addClass('right-arrow').attr('src','../images/rightarrow.png').css('display',"inline-block");
        var textBetweenArrows = $('<p>').text("Previous / Next Trailer").addClass('text-between-arrows').css('display',"inline-block");


        moviePlayerContainer.prepend(moviePlayerDiv);

        $('#render-div').prepend(movieInfoContainer);
        $('#render-div').append(moviePlayerContainer);
        $('#render-div').append(leftArrow);
        $('#render-div').append(textBetweenArrows);
        $('#render-div').append(rightArrow);

        onYouTubeIframeAPIReady();


    }


    // This butoon creates a new playlist if the user clicks on the create new playlist button OR is new to the site
    function createNewPlaylist(){

        userProfile = [];
        console.log("test")

        $('#render-div').hide();
        $('#render-div').empty();
        $('.placeholderSidebarLeft').hide();
        $('.placeholderSidebarRight').hide();
        $('#render-div').show(1000);
        $('moviePlayerDiv').empty();


        var genreChoicesArray = ["Action Packed","Action","Adventure","War","Western","Light-Hearted","Animation","Comedy","Family","Musical","Romance","Adrenaline Rush","Crime","Horror","Mystery","Thriller","Fantastical","Animation","Fantasy","Foreign","Sci-Fi","Heavy-Hitters","Documentary","Drama","History"];
        var genreNumberArray = ["Action Packed",28,12,10752,37,"Light-Hearted",16,35,10751,10402,10749,"Adrenaline Rush",80,27,9648,53,"Fantastical",16,14,10769,878,"Heavy-Hitters",99,18,36];
        var questionOneDiv = $('<div>').addClass('question-one-div');

        var questionOneText = $('<p>').addClass('question-one-text').text('Choose a genre');
        var questionOneButtonContainer = $('<div>').addClass('question-one-button-div');

        // This is going to loop through the genreChoicesArray and it till print the various buttons with their respective attributes, it will prints them in a way so that
        // The titles of the row get printed without a class so that they cannot be clicked. 
        for(var i = 0; i < genreChoicesArray.length ; i++){
                if(i===0 || i===5 || i===11 || i===16 || i===21){

                    if(i !== 0){
                        var space = $('<br>').css('display','block');
                        questionOneButtonContainer.append(space);
                    }

                    var title = $('<button>').addClass('title').text(genreChoicesArray[i]);
                    questionOneButtonContainer.append(title);

                } else {

                    var button = $('<button>').addClass('genre-buttons-question-one').text(genreChoicesArray[i]).attr('value', genreNumberArray[i]);
                    questionOneButtonContainer.append(button);

                }
        }

        questionOneDiv.append(questionOneButtonContainer);

        $('#render-div').append(questionOneDiv);

        if(counter === 0){

        $(document).on("click", ".genre-buttons-question-one", function(){
        // checks to make sure userProfile is empty then adds the value of the drop down genre selected to the empty userProfile array
            userProfile.unshift(parseInt($(this).val()));
            console.log("userProfile array after button click, before questionStartFromSecond(): " + userProfile);
            questionStartFromSecond();         
        
        
        });
        } //If Statement with counter
        counter = 1;
    } // End Create Playlist Function


    // This line will look for any playlists added and will change the playlist when clicked
    $(document).on("click", ".createButton", createNewPlaylist);

    });