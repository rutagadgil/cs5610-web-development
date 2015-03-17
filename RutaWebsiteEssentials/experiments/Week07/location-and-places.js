$(document).ready(function () {

    var location, lat, lon = "";
    var url = "";
    var x = document.getElementById("demo");
    
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
        
        var header = document.createElement("h3");
        var htitle = document.createTextNode("Places to Visit Nearby your Current Location");
        header.appendChild(htitle);
        x.appendChild(header);
        $.getJSON(url)
        .done(function (data) {
            $.each(data, function (results, search) {
                $.each(search.items, function (i, content) {

                    var para = document.createElement("p");
                    var bold = document.createElement("b");
                    var title = document.createTextNode(content.title);
                    bold.appendChild(title);
                    var linebreak = document.createElement("br");
                    var vicinity = document.createTextNode("Address: "+content.vicinity);
                    para.appendChild(bold);
                    para.appendChild(linebreak);
                    para.appendChild(vicinity);
                    x.appendChild(para);

                });

            });
        });
    }
});