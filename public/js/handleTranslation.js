$(document).ready(function (){
    $("#submitButton").on("click", function (event){
        event.preventDefault()
        var userInput = {text: $("#userInput").val().trim()}
        $.ajax({method:"POST", url: "/api/translation", data: userInput}).then (function (results){
            console.log(results)
            $("#translatedWord").text(results.translations[0].translation)
            
            
        })
    })
})