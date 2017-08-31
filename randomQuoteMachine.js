$(document).ready(function () {

	var randomQuote, randomAuthor;
      
	
    function getQuote() {
   			
        // Version using ajax obtaining random quote and author through the Forismatic app via URL
        $.ajax({                                        
            url: "http://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",
            dataType: "jsonp",
            data: {
                method: "getQuote",
                lang: "en",
                format: "jsonp"
            },
            
            success: function(response) {
                      randomQuote = response.quoteText;     
                      randomAuthor = response.quoteAuthor;
                $("#quote").text(randomQuote);
                if (randomAuthor) {
                    $("#author").html("- " + randomAuthor);
                } else {
                    $("#author").html("- unknown");     
                }   
            }            
        }); 
    };  
    
    $("#tweet").on("click",function(event) {
		
        event.preventDefault();
            if (randomAuthor) {
                window.open('https://twitter.com/intent/tweet?text=' + '"' + randomQuote + '"' + '-' + randomAuthor );
            }
            else {
                window.open('https://twitter.com/intent/tweet?text=' + '"' + randomQuote + '"' + '-unknown');
            }
    });  
    
    // Placing a call to the getQuote function
    $("#newQuote").on("click",function(event) {
        event.preventDefault();
        getQuote();
        
       
        var colorArray = ["darkblue", "cadetblue",  "crimson", "brown",  "darkturquoise", "fuchsia", "hotpink",  "navy", "purple",  "teal",  "silver",  "red",  "forestgreen",  "slategray", "coral", "deeppink", "firebrick", "darkkhaki", "forestgreen", "maroon", "darkslategray"];
        var  colorIndex = colorArray.length;
        
        
        var colorValue = Math.floor((Math.random() * colorIndex) + 1);
        var randomColorOfQuote = colorArray[colorValue];
        
       
        var randomColorOfSurroundings = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + 0.65 + ')';
        
        // Setting font color of quote and author expression, background color of the body, "newquote" and "tweet" button

         $("body").css("backgroundColor", randomColorOfQuote);
         $("#quote").css("color", randomColorOfQuote);
         $("#author").css("color", randomColorOfQuote);
         $(".btn").css("background-color", randomColorOfQuote);
         $("#surroundings").css("backgroundColor", randomColorOfSurroundings);

    });   
});  
