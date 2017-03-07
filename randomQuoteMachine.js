$(document).ready(function () {

  
	randomQuoteMachineNameSpace = function(){
	    var randomQuote, randomAuthor;
	    function getRandomQuote(){return randomQuote;}
	    function getRandomAuthor(){return randomAuthor;}
	    function setRandomQuote(quoteValue){randomQuote = quoteValue;}
	    function setRandomAuthor(authorValue){randomAuthor =authorValue;}
	    return {
		    getRandomQuote:getRandomQuote,
		    getRandomAuthor:getRandomAuthor,
		    setRandomQuote:setRandomQuote,
		    setRandomAuthor:setRandomAuthor
	    }
	}();
	
    
	
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
                var randomQuote1 = response.quoteText;     
                var randomAuthor1 = response.quoteAuthor;
                randomQuoteMachineNameSpace.setRandomQuote(randomQuote1);
                randomQuoteMachineNameSpace.setRandomAuthor(randomAuthor1);
				
                $("#quote").text(randomQuote1);
                if (randomAuthor1) {
                    $("#author").html("- " + randomAuthor1);
                } else {
                    $("#author").html("- unknown");     
                }   
            }            
        }); 
         
    };  
    
    $("#tweet").on("click",function(event) {
		
		 var randomQuote2 = randomQuoteMachineNameSpace.getRandomQuote();
		 var randomAuthor2 = randomQuoteMachineNameSpace.getRandomAuthor();
		
        event.preventDefault();
            if (randomAuthor2) {
                window.open("https://twitter.com/intent/tweet?text=" + randomQuote2 + " - " + randomAuthor2 );
            }
            else {
                window.open("https://twitter.com/intent/tweet?text=" + randomQuote2 + " -unknown ");
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
        document.body.style.backgroundColor = randomColorOfQuote;
        document.getElementById("quote").style.color = randomColorOfQuote;
        document.getElementById("author").style.color = randomColorOfQuote;
    
        
       
            $(".btn").css({"background-color" : randomColorOfQuote});

        
        document.getElementById("surroundings").style.backgroundColor = randomColorOfSurroundings;
        
    });   
});  
