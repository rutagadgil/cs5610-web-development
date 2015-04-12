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
        var status = $("input[name=fairselection]:checked").val();
        fetchFairs(status, passwd);
    }

    function ErrorGettingKey() {
        alert("Error getting API key!")
    }

    function fetchFairs(status, passwd) {
        //alert("fetching fairs");
        $("#data").empty();
        $("#fairStatus").empty();
        var statusValue = document.createTextNode(status + " FAIRS");
        document.getElementById("fairStatus").appendChild(statusValue);
        
        var count = 0;
        var url = "https://api.artsy.net:443/api/fairs?status=" + status;
        var tokenURL = "https://api.artsy.net/oauth2/access_token?client_id=4ca711359d8808b1614e&client_secret=2caa296b14a0239be025fc31ff6f5686&grant_type=credentials&email=gadgil.r@husky.neu.edu&password=" + passwd;
        $.getJSON(tokenURL, function (result) {
            token = result.access_token;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function loadresults(result) {
                    $.each(result._embedded.fairs, function (i, results) {
                        //alert(results.id);
                        var div = document.createElement("div");
                        var linebreak = document.createElement("br");

                        var namePara = document.createElement("h3");
                        var name = document.createTextNode(results.name);
                        namePara.appendChild(name);
                        namePara.setAttribute('class', 'fairName');

                        var startAtPara = document.createElement("p");
                        var startAt = results.start_at;
                        startAt = startAt.substring(0, 10);
                        startAtPara.appendChild(document.createTextNode(startAt + " to "));

                        var endAt = results.end_at;
                        endAt = endAt.substring(0, 10);
                        startAtPara.appendChild(document.createTextNode(endAt));
                        startAtPara.setAttribute('class', 'dates');

                        var aboutPara = document.createElement("p");
                        var about = document.createTextNode(results.about);
                        aboutPara.appendChild(about);
                        aboutPara.setAttribute('class', 'about');
                        div.appendChild(namePara);
                        div.appendChild(startAtPara);
                        div.appendChild(aboutPara);
                        div.appendChild(linebreak);

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
        fetchFairs(this.value, passwd);
    }
);
});