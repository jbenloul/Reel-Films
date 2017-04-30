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
        if(userProfile.length === 0){
            userProfile.unshift($(this).val());
            console.log(userProfile);
            questionStartFromSecond();         
        }

        /*$('#hide-display').css('display',block);*/
        
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

        // Once the user clicks the rendered buttons (indie / mainstream) the value of the button will be pushed to the array (userPlaylist) as the 2nd element in the array
        // The div will fade out and once its faded out completely the div will be emptyed and will be ready for the next question to be populated inside. 
        $(document).on("click", ".question-two-button" , function(){

            userProfile.push(parseInt($(this).val()));

            $('#render-div').hide();
            $('#render-div').empty();
            console.log(userProfile);

            
            
            questionThree();
        })
    }

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

            $(document).on("click", ".question-three-button", function(){

            userProfile.push(parseInt($(this).val()));

            console.log(userProfile);

            if(userProfile.length == 4){

            $('#render-div').hide();
            $('#render-div').empty();
            questionFour();

            }

        })
    }

    function questionFour(){
        $('#render-div').show(2000);

        var questionFourDiv = $('<div>').addClass('question-four-div');
        var questionFourButtonDiv = $('<div>').addClass('question-four-button-div');
        var questionFourText =$('<p>').addClass('question-three-html').text("What calibur of movie would you like to see?")/*.css('display',block)*/;
        var buttonCriticOne = $('<button>').addClass('question-four-button').text('I dont care').attr("value", "any");
        var buttonCriticTwo = $('<button>').addClass('question-four-button').text('Bad Movies ONLY').attr("value", "bad");
        var buttonCriticThree = $('<button>').addClass('question-four-button').text('Crown Pleaser').attr("value", "crowd");
        var buttonCriticFour = $('<button>').addClass('question-four-button').text('Critically Acclaimed').attr("value", "critic");

        questionFourDiv.prepend(questionFourText);

        questionFourButtonDiv.prepend(buttonCriticOne);
        questionFourButtonDiv.append(buttonCriticTwo);
        questionFourButtonDiv.append(buttonCriticThree);
        questionFourButtonDiv.append(buttonCriticFour);

        questionFourDiv.append(questionFourButtonDiv);

        $('#render-div').append(questionFourDiv);

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

            /*
            userProfile.push($(this).val());
            console.log(userProfile);
            $('#render-div').hide();
            $('#render-div').empty();
            questionFive();*/
        })

    }

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
        


    } // Question 5 end function


    function videoRender(){


        $('render-div').hide();
        $('render-div').empty();

        var createDiv = $('<div>').addClass('createButton').text("Create a new playlist")
        $('#playlist-div').prepend(createDiv);

        $('#render-div').show(1000);
        var createDiv = $('<div>').addClass('createButton').text("Create a new playlist")
        $('#playlist-div').prepend(createDiv);


        var movieInfoContainer = $('<div>').addClass('movie-info-container').text('MOVIE INFO');
        var moviePlayerContainer =$('<div>').addClass('movie-player-container');
        var moviePlayerDiv = $('<div id="player"></div>').addClass('movie-player-div');

        moviePlayerContainer.prepend(moviePlayerDiv);

        $('#render-div').prepend(movieInfoContainer);
        $('#render-div').append(moviePlayerContainer);

        onYouTubeIframeAPIReady();

    // This butoon creates a new playlist if the user clicks on the create new playlist button OR is new to the site
    function createNewPlaylist(){

        var genreChoicesArray = ["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"];
        var questionOneDiv = $('<div>').addClass('question-one-div');

        var questionOneText = $('<p>').addClass('question-one-text').text('Choose a genre');
        var questionOneButtonContainer = $('<div>').addClass('question-one-button-div');

        // This will Add buttons into questionOneButtonContainer that can be styles accordingly
        for(var i = 0; i < genreChoicesArray.length ; i++){
                var button = $('<button>').addClass('genre-buttons-question-one').text(genreChoicesArray[i]).attr('value', genreChoicesArray[i]);
                questionOneButtonContainer.append(button)
        }
        
    }


// This line renders any previously created playlists to the screen
    function renderPlaylist(){

        $("#playlist-container").empty();
        for (var i = 0; i < playList.length; i++) {
          var buttonGen = $("<button>");
          // Adding a class of gif to our button
          buttonGen.addClass("playlist");
          // Adding a data-attribute
          buttonGen.attr("data-name", playList[i]);
          // Providing the initial button text
          buttonGen.text(topButtons[i]);
          // Adding the button to the buttons-view div
          $("#PLAYLIST-CONTAINER").append(buttonGen);

        }
      }

    // This line will look for any playlists added and will change the playlist when clicked
    $(document).on("click", ".createButton", createNewPlaylist)
    /*$(document).on("click", ".individualPlaylist", changePlaylist)*/


    });