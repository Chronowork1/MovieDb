/*global $*/
$(document).ready(function(){
    //var for movie
    var myMovieList = [
	{
		"title": "Finding Dory",
		"actors": "Ellen DeGeneres, Albert Brooks, Ed O'Neill, Kaitlin Olson",
		"imageURL": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTgyODE@._V1_SX300.jpg",
		"siteURL": "http://movies.disney.com/finding-dory",
		"ratings": "5 stars",
		"isGood": 94
		// JIAN EL JULIANNA HW: PUT EXAMPLE RATING HERE!
	},
    ];
    
    // length: 1, index: 0
    // length: 2, index: 1
    // length: 3, index: 2
    
    //User Input to API URL
    
    function inputToAPI(input) {
        var APIUrl = "https://www.omdbapi.com/?apikey=90d4b10a&t=" +input+ "";
        return APIUrl;
    }
    //API URL to Object
    function turningObjectFromAPI(APIurl) {
        var myMovies = "";
        console.log("makingAPIrequest");
        $.ajax({
      url: APIurl,
      method: "GET",
      success: function(response) {
          
          var ratings = response.Ratings;
          for (var i =0; i< ratings.length; i++){
              var rating = ratings[i];
              console.log(rating);
              
              if (rating.Source === "Rotten Tomatoes") {
                  var percentage = rating.Value;
                    
                  console.log(percentage);
              }
          }
          console.log(response.Ratings);
          
          myMovies = {
            "title": response.Title,
		    "actors": response.Actors,
		    "imageURL": response.Poster,
		    "siteURL": response.Website,
		    "ratingURL": response.rating,
		    "isGood": parseInt(percentage)
		    // JIAN EL JULIANNA HW: put ratings inside here!
          };
          
          console.log(myMovies);
          myMovieList.push(myMovies);
          showResults(myMovieList[myMovieList.length-1],myMovieList.length);
      },
    }); 
    }
    
    //Show results
    function showResults(movieObject,tempo) {
    var number90goodorbad = movieObject.isGood;
        if (number90goodorbad > 90) {
         $("#good").append("<div class='col-sm-12 center card-body' id='movie"+tempo+"'></div>");   
        }
        else{
             $("#bad").append("<div class='col-sm-12 center card-body' id='movie"+tempo+"'></div>");
        }
        
        $("#movie"+tempo).append("<img src='"+movieObject.imageURL+"'class='song-image img-thumbnail float-left'>");
        $("#movie"+tempo).append("<h3>"+movieObject.title+"</h3>");
        $("#movie"+tempo).append("<p>"+movieObject.actors+"</p>");
        $("#movie"+tempo).append("<a href="+movieObject.siteURL+">More Info</a>");
        }
    //Click handler
    
    
    $("button").click(function(){
        var inputText = $("input").val();
        var inputUrl = inputToAPI(inputText);
        turningObjectFromAPI(inputUrl);
        console.log(inputUrl);
    });
});