/* Smooth scrolling */

$(document).ready(function() {
// Global Variables
// --------------------------------------------------------------------------------------------------------
    var initialPlaylist = [];
    /// Then we need to filter initialPlaylist into filteredPlaylistArrayt
    var filteredPlaylist = [];
    var userProfile = [];
    // Arrays of movie filtered titles
    var movieTitleGen=[];
    var movieMainInd=[];
    var movieYear=[];
    var movieImdbRat=[];
    var movieMpaa=[];
    // counters
    var counterP = 1;
    var counterT = 0;
    var counterY = 0;
    var counterR = 0;
    var counterRa = 0;
    // Array lengths
    var movieTitleL = 0;
    var movieMainIndL = 0;
    var movieYearL = 0;
    var movieImbdRatL = 0;

    // make number return by imdb votes an movieMainInd array
    var arr;
    // splits arr varialbe at , of movieMainInd array
    var num;
    // int of imbd votes for movieMainInd array
    var numImbdVotes;
    // value of year of movie in movieYear array
    var year;
    // variable to compare whether indie was selected
    var indie = 200000;
                          


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
            findTitle();
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
        var questionTwoButtonIndie = $('<button>').addClass('question-two-button').text("Indie Movie").attr("value", "199999");
        var questionTwoButtonMainstream = $('<button>').addClass('question-two-button').text("Mainstream Movie").attr("value", "200001");

        questionTwoButtonDiv.append(questionTwoButtonIndie);
        questionTwoButtonDiv.append(questionTwoButtonMainstream);
        questionTwoDiv.prepend(questionTwoText);
        questionTwoDiv.append(questionTwoButtonDiv);

        $('#render-div').append(questionTwoDiv);

        // Once the user clicks the rendered buttons (indie / mainstream) the value of the button will be pushed to the array (userPlaylist) as the 2nd element in the array
        // The div will fade out and once its faded out completely the div will be emptyed and will be ready for the next question to be populated inside. 
        $(document).on("click", ".question-two-button" , function(){

            userProfile.push(parseInt($(this).val()));
            mainIndie();
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
            // console.log(userProfile[2]);
            // console.log(userProfile[3]);
            console.log(userProfile);

            if(userProfile.length == 4){

            $('#render-div').hide();
            $('#render-div').empty();
            yearInterval();
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
                movieRating();
                $('#render-div').hide();
                $('#render-div').empty();
                console.log(userProfile);
                questionFive();               
            }
            if($(this).val() == "bad"){
                userProfile.push(1);
                userProfile.push(4);
                movieRating();
                $('#render-div').hide();
                $('#render-div').empty();
                console.log(userProfile);
                questionFive();               
            }
            if($(this).val() == "crowd"){
                userProfile.push(4);
                userProfile.push(8);
                movieRating();
                $('#render-div').hide();
                $('#render-div').empty();
                console.log(userProfile);
                questionFive();               
            }
            if($(this).val() == "critic"){
                userProfile.push(8);
                userProfile.push(10);
                movieRating();
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
                counterRa = 0;
                userProfile.push($(this).val());
                console.log(userProfile);
                movieRated();

            }

        })

        
        $(document).on("click", ".start", function(){
            // Only if at least one rating option has been selected
            if(userProfile.length >= 7){
            console.log("start was clicked");
            $('#render-div').hide();
            $('#render-div').empty();
            videoRender();
            }

        });
        


    } // Question 5 end function

    // function for producing titles
 function findTitle(){
    console.log("START OF MOVIE TITLE");
// produce Titles 
if(counterP < 10){
queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=a4a27185a8d4d5eda2d9b10434e6cad8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=" + userProfile[0] + "&page=" + counterP;
$.ajax({
url: queryURL,
method: "GET"
}).done(function(response) {
console.log(counterP);
// adds title of movies
for(var i = 0; i < response.results.length; i++){
movieTitleGen.push(response.results[i].title);
console.log("Title: " + response.results[i].title);

}
counterP++;
// total title of movies
movieTitleL = movieTitleGen.length;
console.log(movieTitleGen);
console.log(movieTitleL);
findTitle();

});
}
    console.log("End of the MOVIE TITLE");
    } // end of finds the title function

    function mainIndie(){
        console.log("Start of the MainIndie");
if(counterT < movieTitleL){
    // Filter movie for mainstream and indie
var queryURLS = "http://www.omdbapi.com/?t=" + movieTitleGen[counterT] + "&y=&plot=short&r=json";
$.ajax({
url: queryURLS,
method: "GET"
}).done(function(response) {
// if there is a movie title in this api, it will run
if (response.Response !== "False"){
arr = response.imdbVotes;
// console.log(response);
console.log(movieTitleGen[counterT]);
num = arr.split(',');
arr = num.join("");
numImbdVotes = parseInt(arr);
console.log(numImbdVotes);
console.log(userProfile[1]);
if(indie > userProfile[1]){
    // adds indie films
add(numImbdVotes);
} else {
    // adds mainstream film
add2(numImbdVotes);
    }
} // end of if statement false
counterT++;
movieMainIndL = movieMainInd.length;
console.log(movieMainIndL);
mainIndie();

})
// .error(function(e) {
// console.log(e)
// })
    // end of else if statement based on mainstream/indie
    } // end of the if counter < movie title statement
    console.log("End of the MainIndie");
} // end of main indie function
    function yearInterval(){
if(counterY < movieMainIndL){
    console.log("start of year interval");
    // filter movie based on year interval
var queryURLS = "http://www.omdbapi.com/?t=" + movieMainInd[counterY] + "&y=&plot=short&r=json";
$.ajax({
url: queryURLS,
method: "GET"
}).done(function(response) {
year = parseInt(response.Year);
console.log(year);
console.log(" first input  " + userProfile[2] + " second input " + userProfile[3] )
if( (year > userProfile[2]) && (year < userProfile[3])){
movieYear.push(movieMainInd[counterY]);
console.log(movieYear);
}
counterY++;
movieYearL = movieYear.length;
console.log(movieYearL);
yearInterval();

});
    // end of else if statement for filter by movie year interval
    } 
    console.log("End of year Interval");
};

    function movieRating(){  
if(counterR < movieYearL){
    console.log("start of Movie Rating");
    // filer movie based on imdb rating
var queryURLS = "http://www.omdbapi.com/?t=" + movieYear[counterR] + "&y=&plot=short&r=json";
$.ajax({
url: queryURLS,
method: "GET"
}).done(function(response) {
if(response.imdbRating !== "Undefined"){
ratings = parseFloat(response.imdbRating);

    // add movie within ratings
    if(ratings > userProfile[4] && ratings < userProfile[5]){
    movieImdbRat.push(movieYear[counterR]);
    console.log(movieImdbRat);
    }
}
counterR++;
movieImbdRatL = movieImdbRat.length;
console.log(movieImbdRatL);
movieRating();

});
    // end of else if statement for filter imdb rating
    } // if movie statement
    console.log("End of movie rating");
} // end of function movie rating

    function movieRated(){
if(counterRa < movieImbdRatL){
    // filter movie based on MPAA ratings
    console.log("start of movie rated");
var queryURLS = "http://www.omdbapi.com/?t=" + movieImdbRat[counterRa] + "&y=&plot=short&r=json";
$.ajax({
url: queryURLS,
method: "GET"
}).done(function(response) {
    // console.log(response);
var rated = response.Rated;
if(userProfile.indexOf(rated) !== -1 && (movieMpaa.indexOf(movieImdbRat[counterRa]) === -1)){   
movieMpaa.push(movieImdbRat[counterRa]);   
}
counterRa++;
console.log(movieMpaa);
movieRated();

});
    } // end of else if statement for MPAA ratings
    console.log("End of movie Rating");
} // end of the movie rated function



// pushes indie films
function add(numImbdVotes){
if(numImbdVotes < 20000){
movieMainInd.push(movieTitleGen[counterT]);
console.log(movieMainInd);
    }
} // end of add function pushes indie films
function add2(numImbdVotes){
if(numImbdVotes > 20000){
movieMainInd.push(movieTitleGen[counterT]);
console.log(movieMainInd);
    }
} // end of add2 function adds only mainstream films   



    function videoRender(){

        $('#render-div').show(1000);
        var createDiv = $('<div>').addClass('createButton').text("Create a new playlist")
        $('#playlist-div').prepend(createDiv);

        var movieInfoContainer = $('<div>').addClass('movie-info-container').text('MOVIE INFO');
        var moviePlayerContainer =$('<div>').addClass('movie-player-container');
        var moviePlayerDiv = $('<div id="player"></div>').addClass('movie-player-div');

        moviePlayerContainer.prepend(moviePlayerDiv);

        $('#render-div').prepend(movieInfoContainer);
        $('#render-div').append(moviePlayerDiv);



    }


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