$(document).ready(function () {
    var zipCode;
    $("#submit").on("click", function (event) {
        var zipCode = $('#zipcode').val();
        console.log(zipCode);
        event.preventDefault();
        var nameLink = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=b3dc022962d2363640dc857959398db8";
        $.ajax({
            method: "GET",
            url: nameLink,
            success: function (result) {
                console.log(result);
                console.log(result.name);
                var $name=$('<p></p>').text(result.name).css("font-size","30px");
                $('#result').append($name);
                var temp = $('<p></p>').text("Temprutre  :" + result.main.temp)
                if (result.main.temp > 90) {
                    temp.css("color", "red");
                }
                else if (result.main.temp < 40) {
                    temp.css("color", "blue");
                }
                $('#result').append(temp);
                $('#result').append($('<p></p>').text("Description  :" + result.weather[0].description));
                $('#result').append($('<p></p>').text("Min temprutre   :" + result.main.temp_min));
                $('#result').append($('<p></p>').text("Max temprutre   :" + result.main.temp_max));
                $('#result').append($('<p></p>').text("Location   :" + result.coord.lon + "  ,  " + result.coord.lon));
                $('#result').append($('<p></p>').text("Humidity    :" + result.main.humidity));
                $('#result').append($('<p></p>').text("Wind speed   :" + result.wind.speed));

            },
            error: console.log("error")
        });

    });
}); 
