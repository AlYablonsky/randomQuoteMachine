$(document).ready(function () {

    var randomQuote, randomAuthor;
   
    // Obtaining a random quote and author through the forismatic API
    
    function getQuote() {
    
/*        
    var url="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";  // Version using JSON
    $.getJSON(url,function(data) {
        $("#quote").html('"' + data.quoteText + '"'); 
        $("#author").html("-" + data.quoteAuthor);  
        randomQuote = data.quoteText;
        randomAuthor = data.quoteAuthor;
        });
        
*/
        
/* Beginning of work    */
        
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
                randomQuote = response.quoteText;     // Obtaining the quote
                randomAuthor = response.quoteAuthor;   // Obtaining the author
                $("#quote").text(randomQuote);
                if (randomAuthor) {
                    $("#author").html("- " + randomAuthor);
                } else {
                    $("#author").html("- unknown");     // Case unkown Author
                }   
            }            
        }); // end of ajax
         
/*    End of work  */        
        
        
    };  // End of get quote
    
    // Opening a box for tweeting the quote and its author "on Click"
    
    $("#tweet").on("click",function(event) {
        event.preventDefault();
            if (randomAuthor) {
                window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " - " + randomAuthor );
            }
            else {
                window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " -unknown ");
            }
    });  
    
    // Placing a call to the getQuote function
    $("#newQuote").on("click",function(event) {
        event.preventDefault();
        getQuote();
        
        // Array of dark colors for random coloring of the area surrounding the quote and its author
        var colorArray = ["darkblue", "cadetblue",  "crimson", "brown",  "darkturquoise", "fuchsia", "hotpink",  "navy", "purple",  "teal",  "silver",  "red",  "forestgreen",  "slategray", "coral", "deeppink", "firebrick", "darkkhaki", "forestgreen", "maroon", "darkslategray"];
        var  colorIndex = colorArray.length;
        
        // Random color generated from colors of the color array, these are dark colors so the quote and author are easy to see
        var colorValue = Math.floor((Math.random() * colorIndex) + 1);
        var hue = colorArray[colorValue];
        
        // Random color generated from 0-255 r,g,b and a (transparency fixed at 0.6 ), this is used to mix with the image in the "surroundings" div
        var hue1 = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + 0.65 + ')';
        
        // Setting font color of quote and author expression, background color of the body, "newquote" and "tweet" button
        document.body.style.backgroundColor = hue;
        document.getElementById("quote").style.color = hue;
        document.getElementById("author").style.color = hue;
    
        
        // Using Jquery to style background colors and colors for all button elements
            $(".btn").css({"background-color" : hue });

        // surroundindgs fileld background color set to very random value
        document.getElementById("surroundings").style.backgroundColor = hue1;
        
    
        
    });  // end of "new quote - OnClick" 
});  // End of $document ready 
