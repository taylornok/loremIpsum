$(document).ready(function () {


    $("#submitButton").on("click", function (event) {
        event.preventDefault()
        var userInput = {
            text: $("#userInput").val().trim()
        }
        var langTarget = {
            text: $("#languageTargetChoice").val()
        }
        var data = {
            "userInput": userInput,
            "langTarget": langTarget
        }
        $.ajax({
            method: "POST",
            url: "/api/translation",
            data: data
        }).then(function (results) {
            console.log(results)
            console.log(langTarget)
            //$("#translatedWord").text(results.translations[0].translation)

            document.getElementById("translatedWord").innerHTML = results.translations[0].translation;

        })
    })


    $(document).ready(function () {
        console.log("in the display function")
        $.ajax({
            type: "GET",
            url: "/api/translation/listKnownLanguages"
        }).then(function (results) {
            console.log('these are source results' + JSON.stringify(results));
            var languages = results.languages;
            console.log('languages', languages);
            for (let i = 0; i < languages.length; i++) {
                console.log("inside for loop")
                var langCodes = languages[i].language
                var langNames = languages[i].name
                var menuOptions = $("<option>", {
                    text: langNames,
                    val: langCodes
                });


                $("#languageTargetChoice").append(menuOptions);
            }

        })

    })




});

// function displayLanguageOptions() {
//     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=DgGchXJ8Kvw8hOC8UEp50xu3hlLb5D5b&limit=10";
//     // Creating an AJAX call
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {

//         var results = response.data;


//         for (let i = 0; i < 10; i++) {
//             console.log("response", response);
//             console.log("queryURL");


//             //div to hold gifs
//             var gifDiv = $("<div class = 'gifs'>");

//             //storing rating data
//             var rating = results[i].rating;
//             //storing gif URL data;
//             // var gifURL = results[i].embed_url; 
//             //creates a <p> tag to hold the rating display
//             var prating = $("<p>").text("Rated: " + rating);
//             //append thegif div with the rating
//             gifDiv.append(prating);
//             //create an element to hold image
//             $("#rating-view").append(gifDiv)
//             var gifDisplay = $("<img>").attr("src", results[i].images.fixed_height.url);


//             gifDisplay.attr({
//                 "data-animate": results[i].images.fixed_height.url,
//                 "data-still": results[i].images.fixed_height_still.url,
//                 "class": "gif",

//             })


//             //Take image and append to the gif div we created.
//             gifDisplay.append(gifDiv);
//             //Take both of these in gif-display and send it to the pre-defined "gif-view"

//             $("#gif-view").append(gifDisplay);




//         }