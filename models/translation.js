//------------Require Watson Developer and provide credentials-----------
var LanguageTranslatorV3 = require("watson-developer-cloud/language-translator/v3");

var languageTranslator = new LanguageTranslatorV3({
    iam_apikey: "_K7nYpPY_iwNRDQAFaz0xyOUDmjLvoJ7Vx8w4lKKB6_e",
    url: 'https://gateway.watsonplatform.net/language-translator/api/',
    version: '2018-05-01',
});



//--------------API functions to gather our data----------------
// var submitBtn = $("#userSubmit")

function translate () {
  
  // var userText = $("#userText").val().trim();
  // console.log(userText)

  languageTranslator.translate(
    {
      // text: userText,
      text: "Hello World", //will add userInput selector
      source: 'en', //will add dropdown menu selector
      target: 'es' //will add dropdown menu selector
    },
    function(err, translation) {
      if (err)  {
        console.log('error:', err);
      } else  {
        console.log(JSON.stringify(translation, null, 2));
    }
  });
};

// submitBtn.on("click", function (event){
//   event.preventDefault()
//   translate()
// })



function identifyLanguage (text){

  languageTranslator.identify(
    {
      text:
        "Hola, como esta usted?" //Translation to display on html
    },
    function(err, language) {
      if (err)  {
        console.log('error:', err);
      } else {
        console.log(JSON.stringify(language, null, 2));
      }
    }
  );
};


//---just so we know what languages are available --- may need to add to dropdown menu list-------------
function listKnownLanguages(){

  languageTranslator.listIdentifiableLanguages(
      {},
      function(err, response) {
        if (err)
          console.log(err)
        else
          console.log(JSON.stringify(response, null, 2));
      }
  );
}

listKnownLanguages()

