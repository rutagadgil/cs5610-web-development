$(document).ready(function () {
    //alert("ready");

    var key = "../getkey.aspx?apikey";
    var passwd;

    generateURL();

    function generateURL() {
        //alert("inside generateURL");
        var getmy_key_result = $.ajax(key);
        getmy_key_result.fail(ErrorGettingKey);
        getmy_key_result.done(getkey);
    }

    function getkey(result) {
        passwd = result;
        //alert(passwd);
        var status = $("input[name=showselection]:checked").val();
        fetchShows(status, passwd);
    }

    function ErrorGettingKey() {
        alert("Error getting API key!")
    }

    function fetchShows(status, passwd) {
        $("#data").empty();
        $("#showStatus").empty();
        var statusValue = document.createTextNode(status + " SHOWS");
        document.getElementById("showStatus").appendChild(statusValue);
        
        var count = 0;
        var url = "https://api.artsy.net:443/api/shows?status=" + status;
        var tokenURL = "https://api.artsy.net/oauth2/access_token?client_id=4ca711359d8808b1614e&client_secret=2caa296b14a0239be025fc31ff6f5686&grant_type=credentials&email=gadgil.r@husky.neu.edu&password=" + passwd;
        $.getJSON(tokenURL, function (result) {
            token = result.access_token;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function loadresults(result) {
                    $.each(result._embedded.shows, function (i, results) {
                        //alert(results.id);
                        var div = document.createElement("div");
                        var linebreak = document.createElement("br");

                        var namePara = document.createElement("h3");
                        var name = document.createTextNode(results.name);
                        namePara.appendChild(name);
                        namePara.setAttribute('class', 'showName');

                        var startAtPara = document.createElement("p");
                        var startAt = results.start_at;
                        startAt = startAt.substring(0, 10);
                        startAtPara.appendChild(document.createTextNode(startAt + " to "));

                        var endAt = results.end_at;
                        endAt = endAt.substring(0, 10);
                        startAtPara.appendChild(document.createTextNode(endAt));
                        startAtPara.setAttribute('class', 'dates');

                        var descPara = document.createElement("p");
                        var description = document.createTextNode(results.description);
                        descPara.appendChild(description);
                        descPara.setAttribute('class', 'about');

                        var image = document.createElement("img");
                        image.setAttribute('src', results._links.thumbnail.href);

                        
                        div.appendChild(namePara);
                        div.appendChild(startAtPara);
                        div.appendChild(image);
                        div.appendChild(descPara);
                        div.appendChild(linebreak);

                        //div.style.backgroundImage = "url(" + results._links.thumbnail.href + ")";
                        document.getElementById("data").appendChild(div);
                    });
                },
                error: function () {
                    alert("An error has occurred!! Please try again later");
                },
                fail: function () {
                    alert("Some failure has occurred!! Please try again later");
                },
                beforeSend: function (jqXHR, settings) {
                    jqXHR.setRequestHeader("X-Access-Token", token);
                }
            });
        });
    }

    $('input:radio').change(function () {
        //alert(this.value);
        fetchShows(this.value, passwd);
    }
);
});