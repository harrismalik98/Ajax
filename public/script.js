$(document).ready(function() {
    $("#changeQuote").on("submit", function(event){
        event.preventDefault();

        let value = $("#value-name").val();

        // Ajax http request object.
        // This code is sending data to the server and updating the page with the response data without requiring a page refresh.
        $.ajax({  
            url: '/',
            method: 'POST',
            contentType: "application/json", // Sending data in json format.
            data: JSON.stringify({quote: value}),  // The value being sent is an object with a property called "quote" that is set to the value of the "value" variable.
            success: function(res) {
                $('h1').html(`Quote: ${res.quote}`);
            },
        });

    })
    
});
  