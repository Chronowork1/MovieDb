/*global $*/
$(document).ready(function(){
    //User Input to API URL
    
    function inputToAPI(input) {
        var APIUrl = "www.omdbapi.com/?apikey=90d4b10a&t=" +input+ ";
       
    }
    //API URL to Object
    function turningObjectFromAPI() {
    
    }
    
    //Show results
    function showResults() {
        
    }
    //Click handler
    
    
    $("button").click(function(){
        var inputText = $("input").val();
        inputToAPI(inputText);
    });
});