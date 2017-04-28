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

    // Need to give all genre's attribute of = "genre-name"
    /// The plan is to store the initial *unfiltered* movie list from The Movie DB in the initialPlaylist array 
    var initialPlaylist = [];
    /// Then we need to filter initialPlaylist into filteredPlaylistArrayt
    var filteredPlaylist = [];
    var userProfile = [];

    // FRONT END TO DO - In order for this onclick to work each dropdown item needs to have the class "genre" and a value="genreName"
    $('.genre').on('click', function(){
        // checks to make sure userProfile is empty then adds the value of the drop down genre selected to the empty userProfile array
        if(userProfile.length === 0){
            userProfile.unshift($(this).val());
            questionStartFromSecond()
            // SEND USER TO RENDER-DIV AREA AND RENDER QUESTIONS STARTING FROM 2nd QUESTION
        }
        /*$('#hide-display').css('display',block);*/
        console.log("genre class item clicked!");
        // NEED TO SEND USER TO 2nd PAGE TO FINISH QUESTIONS
        // NEED TO RENDER QUESTION DIV INSIDE RENDER DIV

    });


    function questionStartFromSecond(){
        // NEED TO CHANGE TO PROPER DIV ID
        // HIDES PLAYER DIV SO QUESTION DIV CAN BE RENDERD
        $('#render-div').hide(1000);
        $('#render-div').empty();
        $('#render-div').show(1000);

        var questionTwoDiv = $('<div>').addClass('question-two-div');
        // NEED TO GET TO GATHER WITH TEAM TO DISCUSS HOW WE WANT TO CHOOSE THE YEAR RANGE - INPUT BOXES ? RADIO BUTTONS ? SOME TYPE OF ADDON THAT ALLOWS US TO CHOOSE IN A RANGE ALL FANCY
        
        var questionTwoButtonDiv = $('<div>').addClass('question-two-button-div'); 
        var questionTwoText =$('<p>').addClass('question-two-html').text("Would you like a mainstream movie or indie movie?")/*.css('display',block)*/;
        var questionTwoButtonIndie = $('<button>').addClass('question-two-button').text("Indie Movie").attr("value", 200000);
        var questionTwoButtonMainstream = $('<button>').addClass('question-two-button').text("Mainstream Movie").attr("value", 200000);

        questionTwoButtonDiv.append(questionTwoButtonIndie);
        questionTwoButtonDiv.append(questionTwoButtonMainstream);
        questionTwoDiv.prepend(questionTwoText);
        questionTwoDiv.append(questionTwoButtonDiv);

        $('#render-div').append(questionTwoDiv);

        // Once the user clicks the rendered buttons (indie / mainstream) the value of the button will be pushed to the array (userPlaylist) as the 2nd element in the array
        // The div will fade out and once its faded out completely the div will be emptyed and will be ready for the next question to be populated inside. 
        $(document).on("click", ".question-two-button" , function(){

            userProfile.push($(this).val());

            $('#render-div').hide(1500);

            setTimeout(function(){ 

                $('#render-div').empty();

            }, 1500);
            
            questionThree();
        })
    }

    function questionThree(){

            $('#render-div').show(1000);
            // QUESTION 3 IS FILTER BY YEAR RANGE
            // Create Content
            var questionThreeDiv = $('<div>').addClass('question-three-div');
            var questionThreeButtonDiv = $('<div>').addClass('question-three-button-div');
            var questionThreeText =$('<p>').addClass('question-three-html').text("Pick A Year Range")/*.css('display',block)*/;
            var buttonRangeOne = $('<button>').addClass('question-three-button').text('1900-1950').attr("value", "rangeOne");
            var buttonRangeTwo = $('<button>').addClass('question-three-button').text('1951-1970').attr("value", "rangeTwo");
            var buttonRangeThree = $('<button>').addClass('question-three-button').text('1971-1990').attr("value", "rangeThree");
            var buttonRangeFour = $('<button>').addClass('question-three-button').text('1991-Current').attr("value", "rangeFour");

            // Combine content and render to page
            questionThreeButtonDiv.prepend(buttonRangeOne);
            questionThreeButtonDiv.append(buttonRangeTwo);
            questionThreeButtonDiv.append(buttonRangeThree);
            questionThreeButtonDiv.append(buttonRangeFour);

            questionThreeDiv.prepend(questionThreeText);
            questionThreeDiv.append(questionThreeButtonDiv);

            $('#render-div').append(questionThreeDiv);

            $(document).on("click", ".question-three-button", function(){

            userProfile.push($(this).val());

            $('#render-div').hide(1500);

            setTimeout(function(){ 

                $('#render-div').empty();

            }, 1500);

            questionFour();
        })
    }

    function questionFour(){
        $('#render-div').show(1000);


        // QUESTION 3 IS FILTER BY YEAR RANGE
        // Create Content
        var questionFourDiv = $('<div>').addClass('question-four-div');
        var questionFourButtonDiv = $('<div>').addClass('question-four-button-div');
        var questionFourText =$('<p>').addClass('question-three-html').text("What calibur of movie would you like to see?").css('display',block);
        var buttonCriticOne = $('<button>').addClass('question-four-button').text('I dont care').attr("value", any);
        var buttonCriticTwo = $('<button>').addClass('question-four-button').text('Bad Movies ONLY').attr("value", bad);
        var buttonCriticThree = $('<button>').addClass('question-four-button').text('Crown Pleaser').attr("value", crowd);
        var buttonCriticFour = $('<button>').addClass('question-four-button').text('Critically Acclaimed').attr("value", critically);

        questionFourDiv.prepend(questionFourText);

        questionFourButtonDiv.prepend(buttonCriticOne);
        questionFourButtonDiv.append(buttonCriticTwo);
        questionFourButtonDiv.append(buttonCriticThree);
        questionFourButtonDiv.append(buttonCriticFour);

        questionFourDiv.append(questionFourButtonDiv);

        $(document).on("click", ".question-three-button", function(){

            userProfile.push($(this).val());

            $('render-div').hide(1500);

            setTimeout(function(){ 
                $('render-div').empty();
            }, 1500);

            questionFive();
        })

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
    /*$(document).on("click", ".individualPlaylist", changePlaylist)*/


    });