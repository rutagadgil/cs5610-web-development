$(document).ready(function () {

    var location, lat, lon = "";
    var url = "";
    var x = document.getElementById("demo");
    var map = document.getElementById("mapholder");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        var url1 = "http://places.cit.api.here.com/places/v1/discover/explore?at=";
        var url2 = "&app_id=E6d3Wfmofr1rYyUCR88r&app_code=KCoseeOnSQiA_i-RiZqsXw&tf=plain";
        url = url1 + lat + "," + lon + url2;

        $.getJSON(url)
        .done(function (data) {
            $.each(data, function (results, search) {
                $.each(search.items, function (i, content) {
                    if (content.category.id == 'sights-museums') {

                        var para = document.createElement("p");
                        var title = document.createTextNode(content.title);
                        var linebreak = document.createElement("br");
                        para.appendChild(title);
                        para.appendChild(linebreak);

                        var latlon = content.position;
                        var image = document.createElement("img");
                        var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";

                        image.setAttribute('src', img_url);
                        mapholder.appendChild(para);
                        mapholder.appendChild(image);
                        mapholder.appendChild(linebreak);
                    }
                });

            });
        });
    }
});
