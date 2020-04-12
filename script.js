$(document).ready(function () {


    $("#find").on("click", function (event) {

        // Get User Input Value For City
        var city = $("#city").val().trim();

        var apiKey = "2f4e8dfb57bfb030fdf2188d7ed0b5e7"
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2f4e8dfb57bfb030fdf2188d7ed0b5e7";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)

            // Display Weather Info For Entered City
            $("#name").text(response.name);
            $("#temperature").text(response.main.temp);
            $("#humidity").text(response.main.humidity);
            $("#wind-speed").text(response.wind.speed);

            var lon = response.coord.lon;
            var lat = response.coord.lat;
            var uvURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;

            $.ajax({
                url: uvURL,
                method: "GET"
            }).then(function (response) {

                // Display UV Index
                $("#uv-index").text(response.value);

                // Conditions To Add Css Styling
                if (response.value < 5) {
                    $("#uv-index").addClass("uv-ok")
                }
                if (response.value > 8) {
                    $("#uv-index").addClass("uv-severe")
                }
                else {
                    $("#uv-index").addClass("uv-moderate")
                }

                // 5 Day Forecast Code
                var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=2f4e8dfb57bfb030fdf2188d7ed0b5e7"

                $.ajax({
                    url: forecastURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response)

                    // Display Forecast Dates
                    $("#forecastday1").text(response.list[0].dt_txt);
                    $("#forecastday2").text(response.list[1].dt_txt);
                    $("#forecastday3").text(response.list[2].dt_txt);
                    $("#forecastday4").text(response.list[3].dt_txt);
                    $("#forecastday5").text(response.list[4].dt_txt);

                    // Display Forecast Temperatures
                    $("#forecast-temp1").text(response.list[0].main.temp);
                    $("#forecast-temp2").text(response.list[1].main.temp);
                    $("#forecast-temp3").text(response.list[2].main.temp);
                    $("#forecast-temp4").text(response.list[3].main.temp);
                    $("#forecast-temp5").text(response.list[4].main.temp);

                    // Display Humidity 
                    $("#forecast-humid1").text(response.list[0].main.humidity);
                    $("#forecast-humid2").text(response.list[1].main.humidity);
                    $("#forecast-humid3").text(response.list[2].main.humidity);
                    $("#forecast-humid4").text(response.list[3].main.humidity);
                    $("#forecast-humid5").text(response.list[4].main.humidity);

                    // Display Temperature Icon
                    if (response.list[0].main.temp > 72 || response.list[1].main.temp > 72 || response.list[2].main.temp > 72 || response.list[3].main.temp > 72 || response.list[4].main.temp > 72) {
                        $("#icon").attr("src", "https://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-icon.png");
                    }


                    // Append To List Of Searches
                    var listed = $("<li>");
                    listed.text(city);
                    listed.addClass("collection-item")
                    $(".collection").prepend(listed);
                });
            });


        });
    });

    $(".collection-item").on("click", function (event) {
        // Get User Input Value For City
        var city = $(this).text();

        var apiKey = "2f4e8dfb57bfb030fdf2188d7ed0b5e7"
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2f4e8dfb57bfb030fdf2188d7ed0b5e7";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            // Display Weather Info For Entered City
            $("#name").text(response.name);
            $("#temperature").text(response.main.temp);
            $("#humidity").text(response.main.humidity);
            $("#wind-speed").text(response.wind.speed);

            var lon = response.coord.lon;
            var lat = response.coord.lat;
            var uvURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;

            $.ajax({
                url: uvURL,
                method: "GET"
            }).then(function (response) {

                // Display UV Index
                $("#uv-index").text(response.value);

                // Conditions To Add Css Styling
                if (response.value < 5) {
                    $("#uv-index").addClass("uv-ok")
                }
                if (response.value > 8) {
                    $("#uv-index").addClass("uv-severe")
                }
                else {
                    $("#uv-index").addClass("uv-moderate")
                }

                // 5 Day Forecast Code
                var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=2f4e8dfb57bfb030fdf2188d7ed0b5e7"

                $.ajax({
                    url: forecastURL,
                    method: "GET"
                }).then(function (response) {

                    // Display Forecast Dates
                    $("#forecastday1").text(response.list[0].dt_txt);
                    $("#forecastday2").text(response.list[1].dt_txt);
                    $("#forecastday3").text(response.list[2].dt_txt);
                    $("#forecastday4").text(response.list[3].dt_txt);
                    $("#forecastday5").text(response.list[4].dt_txt);

                    // Display Forecast Temperatures
                    $("#forecast-temp1").text(response.list[0].main.temp);
                    $("#forecast-temp2").text(response.list[1].main.temp);
                    $("#forecast-temp3").text(response.list[2].main.temp);
                    $("#forecast-temp4").text(response.list[3].main.temp);
                    $("#forecast-temp5").text(response.list[4].main.temp);

                    // Display Humidity 
                    $("#forecast-humid1").text(response.list[0].main.humidity);
                    $("#forecast-humid2").text(response.list[1].main.humidity);
                    $("#forecast-humid3").text(response.list[2].main.humidity);
                    $("#forecast-humid4").text(response.list[3].main.humidity);
                    $("#forecast-humid5").text(response.list[4].main.humidity);

                    // console.log(response.list[0].weather[0].description);


                    var daysArray = response.list

                    console.log(daysArray[1].weather[0])

                    // Light Rain
                    if (daysArray[0].weather[0].description === "light rain") {
                        $("#icon-1").attr("src", "images/kisspng-emoji-cloud-rain-sky-computer-icons-5b37b2c14ec929.4957995615303768973227.png")
                    }
                    if (daysArray[1].weather[0].description === "light rain") {
                        $("#icon-2").attr("src", "images/kisspng-emoji-cloud-rain-sky-computer-icons-5b37b2c14ec929.4957995615303768973227.png")
                    }
                    if (daysArray[2].weather[0].description === "light rain") {
                        $("#icon-3").attr("src", "images/kisspng-emoji-cloud-rain-sky-computer-icons-5b37b2c14ec929.4957995615303768973227.png")
                    }
                    if (daysArray[3].weather[0].description === "light rain") {
                        $("#icon-4").attr("src", "images/kisspng-emoji-cloud-rain-sky-computer-icons-5b37b2c14ec929.4957995615303768973227.png")
                    }
                    if (daysArray[4].weather[0].description === "light rain") {
                        $("#icon-3").attr("src", "images/kisspng-emoji-cloud-rain-sky-computer-icons-5b37b2c14ec929.4957995615303768973227.png")
                    }

                    // Clear Sky
                    if (daysArray[0].weather[0].description === "clear sky") {
                        $("#icon-1").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[1].weather[0].description === "clear sky") {
                        $("#icon-2").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[2].weather[0].description === "clear sky") {
                        $("#icon-3").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[3].weather[0].description === "clear sky") {
                        $("#icon-4").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[4].weather[0].description === "clear sky") {
                        $("#icon-3").attr("src", "images/pngguru.com.png")
                    }

                    // Overcast Clouds
                    if (daysArray[0].weather[0].description === "overcast clouds") {
                        $("#icon-1").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[1].weather[0].description === "overcast clouds") {
                        $("#icon-2").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[2].weather[0].description === "overcast clouds") {
                        $("#icon-3").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[3].weather[0].description === "overcast clouds") {
                        $("#icon-4").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[4].weather[0].description === "overcast clouds") {
                        $("#icon-3").attr("src", "images/pngguru.com.png")
                    }

                    // Broken Clouds
                    if (daysArray[0].weather[0].description === "broken clouds") {
                        $("#icon-1").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[1].weather[0].description === "broken clouds") {
                        $("#icon-2").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[2].weather[0].description === "overcast clouds") {
                        $("#icon-3").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[3].weather[0].description === "broken clouds") {
                        $("#icon-4").attr("src", "images/pngguru.com.png")
                    }
                    if (daysArray[4].weather[0].description === "broken clouds") {
                        $("#icon-3").attr("src", "images/pngguru.com.png")
                    }

                    // Display Temperature Icon
                    // if (response.list[0].main.temp > 67 || response.list[1].main.temp > 67 || response.list[2].main.temp > 72 || response.list[3].main.temp > 67 || response.list[4].main.temp > 67) {
                    //     $("#icon").attr("src", "https://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-icon.png");
                    // }
                    // if (response.list[0].weather[0].description === "light rain") {
                    //     $("#icon").attr("src", "https://img.favpng.com/15/4/12/emojipedia-rain-text-messaging-cloud-png-favpng-ixy79RDB8hK06XHePpg6gGFFp.jpg")
                    // }
                });
            });


        });
    });

});
