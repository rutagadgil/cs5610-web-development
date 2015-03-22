function clearContents() {
    $("#data").html("");
}
$(document).ready(function () {

    $("#submitArtist").click(function () {

        clearContents();
        var artist = "4d8b92684eb68a1b2c00009e";
        var url = "";
        var url1 = "https://api.artsy.net/api/artists/";
        var url2 = artist;
        var url3 = "&Token:";
        var searchURL = url1 + url2;
        url = url1 + url2;
        token = retrieveResults(url);

    });

    function retrieveResults(url) {

        var tokenURL = "https://api.artsy.net/oauth2/access_token?client_id=4ca711359d8808b1614e&client_secret=2caa296b14a0239be025fc31ff6f5686&grant_type=credentials&email=gadgil.r@husky.neu.edu&password=ruts25391";
        $.getJSON(tokenURL, function (result) {
            token = result.access_token;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function (result) {

                    var div = document.createElement("div");
                    div.setAttribute('class', 'artistData');
                    var name_para = document.createElement("p");
                    var name = document.createTextNode("Name: " + result.name);
                    name_para.appendChild(name);
                    div.appendChild(name_para);

                    var dob_para = document.createElement("p");
                    var dob = document.createTextNode("Date of birth: " + result.birthday);
                    dob_para.appendChild(dob);
                    div.appendChild(dob_para);

                    var hometown_para = document.createElement("p");
                    var hometown = document.createTextNode("Hometown: " + result.hometown);
                    hometown_para.appendChild(hometown);
                    div.appendChild(hometown_para);

                    var location_para = document.createElement("p");
                    var location = document.createTextNode("Location: " + result.location);
                    location_para.appendChild(location);
                    div.appendChild(location_para);

                    var nationality = document.createTextNode("Nationality: " + result.nationality);
                    var nationality_para = document.createElement("p");
                    nationality_para.appendChild(nationality);
                    div.appendChild(nationality_para);

                    var url = result._links.artworks.href;
                    $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'json',
                        success: function (result) {
                            $.each(result._embedded.artworks, function (i, results) {
                                var para = document.createElement("p");
                                var title = document.createTextNode("Artwork Title: " + results.title);
                                para.appendChild(title);

                                var linebreak = document.createElement("br");
                                para.appendChild(linebreak);
                                var img = document.createElement("img");
                                img.setAttribute('src', results._links.thumbnail.href);
                                para.appendChild(img);
                                document.getElementById("data").appendChild(para);
                            });
                        },
                        fail: function (result) {
                            alert("Some failure has occurred!! Please try again later");
                        },
                        error: function (result) {
                            alert("An error has occurred!! Please try again later");
                        },
                        beforeSend: function (jqXHR, settings) {
                            jqXHR.setRequestHeader("X-Access-Token", token);
                        }
                    });
                    document.getElementById("data").appendChild(div);
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
});