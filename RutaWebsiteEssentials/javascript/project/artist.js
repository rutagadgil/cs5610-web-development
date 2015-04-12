function clearContents() {
    $("#data").html("");
}
$(document).ready(function () {
    //alert("ready");
    var key = "../getkey.aspx?apikey";
    var secretKey = "../getkey.aspx?secret";
    var flag = 0;
    var passwd;
    var url;
    var token = "";

    var secret;
    generateURL();


    var artists;
    $("#ArtworkDetails").hide();

    function generateURL() {
        var getmy_key_result = $.ajax(key);
        getmy_key_result.fail(ErrorGettingKey);
        getmy_key_result.done(getkey);
    }

    function getkey(result) {
        passwd = result;
        //alert(passwd);
        getSecret();
    }

    function getSecret() {
        var getmy_secret_result = $.ajax(secretKey);
        getmy_secret_result.fail(ErrorGettingKey);
        getmy_secret_result.done(getsecret);
    }

    function getsecret(result) {
        secret = result;
        //getArtistDetails();
        var tokenURL = "https://api.artsy.net/oauth2/access_token?client_id=4ca711359d8808b1614e&client_secret="
            + secret
            + "&grant_type=credentials&email=gadgil.r@husky.neu.edu&password="
            + passwd;
        getToken(tokenURL);
    }

    function ErrorGettingKey() {
        alert("Error getting API key!");
    }

    function getToken(tokenURL) {
        alert("inisde getTOkenURL()");
        $.ajax({
            url: tokenURL,
            dataType: "json",
            type: 'GET',
            cache: false,
        })
        .done(function (result) {
            token = result.access_token;
            //alert(tokenURL);
            //document.getElementById("debug").appendChild(document.createTextNode(tokenURL));
            //alert("getToken - result" + result);
            alert("getToken - result.token" + result.access_token);
            getArtistDetails();
        })
        .fail(function () {
            alert("Could not authenticate Token!!. Please try again later");
        })
        
    }

    function getArtistDetails() {
        alert("inside artist details");
        //alert("secret" + secret);
        alert("token before getToken" + token + "test");
        $.ajax({
            url: "https://api.artsy.net/api/artists/vincent-van-gogh",
            dataType: "json",
            type:'GET',
            cache: false,
            beforeSend: function (jqXHR, settings) {
                jqXHR.setRequestHeader("X-Access-Token", token);
            }
        })
        .done(artistDetailsSuccess)
        .fail(artistDetailsFail)
    }

    function artistDetailsSuccess(result) {
        alert("inside artist details success");
    }
    function artistDetailsFail() {
        alert("failure");
    }
        /*
        $.getJSON(tokenURL, function (result) {
            token = result.access_token;
            $.ajax({
                url: "https://api.artsy.net/api/artists/vincent-van-gogh",
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


                    var artworks = document.createTextNode("Artworks: ");
                    var artworks_para = document.createElement("p");
                    artworks_para.appendChild(artworks);
                    div.appendChild(artworks_para);
                    var count = 0;

                    //retrieving artworks of the artist
                    var url = result._links.artworks.href;
                    $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'json',
                        success: function getMoreImages(result) {
                            if (count < 10) {
                                count++;
                                $.each(result._embedded.artworks, function (i, results) {
                                    var para = document.createElement("p");
                                    para.setAttribute('class', 'datap');
                                    var title = document.createTextNode("Title: " + results.title);
                                    //para.appendChild(title);
                                    var linebreak = document.createElement("br");
                                    para.appendChild(linebreak);

                                    var artwork_image = results._links.thumbnail.href;
                                    var artwork_image_url = artwork_image.replace("medium", "square");

                                    var img = document.createElement("img");
                                    img.setAttribute('src', artwork_image_url);
                                    para.appendChild(img);
                                    document.getElementById("data").appendChild(para);
                                });
                                if (result._links.next != null) {
                                    $.ajax({
                                        url: result._links.next.href,
                                        type: 'GET',
                                        cache: false,
                                        datatype: 'json',
                                        success: function (result) {
                                            getMoreImages(result);
                                        },
                                        error: function () {
                                            alert("An error has occurred!! Please try again later");
                                        },
                                        beforeSend: function (jqXHR, settings) {
                                            jqXHR.setRequestHeader("X-Access-Token", token);
                                        }
                                    });
                                }
                                else {
                                    count = 10;
                                    //break;
                                }
                            }
                        },
                        fail: function (result) {
                            alert("Some failure has occurred!! Please try again later");
                        },
                        error: function (result) {
                            alert("An error has occurred!! Please try again later");
                        },
                        beforeSend: function (jqXHR, settings) {
                            jqXHR.setRequestHeader("X-Access-Token", token);

                        },

                        xhrFields: {
                            withCredentials: true
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
    /*$("#submitArtist").click(function () {
        alert("inside button click");
        clearContents();
        var artist = document.getElementById("searchString").value;
        var url = "";
        var url1 = "https://api.artsy.net/api/search?q=";
        var url2 = artist;
        var url3 = "&Token:";
        var searchURL = url1 + url2;
        url = url1 + url2;
        token = retrieveResults(url,passwd,artist);
        alert(url);
    });

    function retrieveResults(url, passwd,artist) {
        var count = 0;
        var tokenURL = "https://api.artsy.net/oauth2/access_token?client_id=4ca711359d8808b1614e&client_secret=2caa296b14a0239be025fc31ff6f5686&grant_type=credentials&email=gadgil.r@husky.neu.edu&password=" + passwd;
        //alert(passwd);
        $.getJSON(tokenURL, function (result) {
            token = result.access_token;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function loadresults(result) {
                    if (count < 5) {
                        alert("count: " + count);
                        count++;
                        if (result.total_count == 0) {
                            var text = document.createTextNode("No results match the search criteria. Please ensure you have entered correct spelling");
                            document.getElementById("content").appendChild(text);
                        }
                        $.each(result._embedded.results, function (i, res) {
                            //alert(i);
                            if (res.type == "Artist") {
                                var artistpara = document.createElement("p");
                                var title = res.title;
                                title = title.substr(0, title.indexOf('-'));
                                var name = document.createTextNode(title);
                                artistpara.appendChild(name);
                                artistpara.appendChild(document.createTextNode(res._links.self.href));
                                artistpara.setAttribute('id', res._links.self.href);
                                document.getElementById("allArtists").appendChild(artistpara);
                                //alert(this.id);
                                $("#"+title).on("click", function () {
                                    getArtistDetails(this.id);
                                    alert(this.id);
                                });
                            }
                        });
                    }
                    $.ajax({
                        url: result._links.next.href,
                        type: 'GET',
                        cache: false,
                        datatype: 'json',
                        success: function (result) {
                            loadresults(result);
                        },
                        error: function () {
                            alert("An error has occurred!! Please try again later");
                        },
                        beforeSend: function (jqXHR, settings) {
                            jqXHR.setRequestHeader("X-Access-Token", token);
                        }
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
        getArtistDetails(url);
    }
    */
});