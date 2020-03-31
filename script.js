$(document).ready(function () {




    $("#find").on("click", function (event) {
        var city = $("#city").val().trim();
        var apiKey = "2f4e8dfb57bfb030fdf2188d7ed0b5e7"
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2f4e8dfb57bfb030fdf2188d7ed0b5e7";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)

            $("#name").text(response.name);
            $("#temperature").text(response.main.temp);
            $("#humidity").text(response.main.humidity);
            $("#wind-speed").text(response.wind.speed);

            var lon = response.coord.lon;
            var lat = response.coord.lat;
            var uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;

            $.ajax({
                url: uvURL,
                method: "GET"
            }).then(function (response) {
                $("#uv-index").text(response.value);

                var forecastURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

                $.ajax({
                    url: forecastURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response)
                    $("#forecast").text();
                });
            });


        });
    });

});
