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
                    // if (response.list[0].main.temp > 72 || response.list[1].main.temp > 72 || response.list[2].main.temp > 72 || response.list[3].main.temp > 72 || response.list[4].main.temp > 72) {
                    //     $("#icon").attr("src", "https://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-icon.png");
                    // }


                    // Append To List Of Searches
                    var listed = $("<li>");
                    listed.text(city);
                    listed.addClass("collection-item")
                    $(".collection").prepend(listed);
                });
            });


        });
    });

});
