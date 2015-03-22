function clearContents() {
    $("#Artistcontents").html("");
    $("#Artworkcontents").html("");
}
$(document).ready(function () {

    $("#submitArtist").click(function () {

        clearContents();
        var artist = document.getElementById("searchString").value;
        var url = "";
        var url1 = "https://api.artsy.net/api/search?q=";
        var url2 = artist;
        var url3 = "&Token:";
        var searchURL = url1 + url2;
        url = url1 + url2 + url3;
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
                    if (result.total_count == 0) {
                        var text = document.createTextNode("No results match the search criteria. Please try some different search data");
                        document.getElementById("content").appendChild(text);
                    }
                    $.each(result._embedded.results, function (i, results) {
                        switch (results.type) {
                            case "Artist":
                                var linebreak = document.createElement("br");
                                var para = document.createElement("p");
                                var artist = document.createElement("a");
                                artist.innerText = results.title;
                                artist.setAttribute('href', results._links.permalink.href);
                                artist.setAttribute('target', '_blank');
                                para.appendChild(artist);
                                para.appendChild(linebreak);
                                document.getElementById("Artistcontents").appendChild(para);
                                break;

                            case "Profile":
                                var linebreak = document.createElement("br");
                                var para = document.createElement("p");
                                var artist = document.createElement("a");
                                artist.innerText = results.title;
                                artist.setAttribute('href', results._links.permalink.href);
                                artist.setAttribute('target', '_blank');
                                para.appendChild(artist);
                                para.appendChild(linebreak);
                                document.getElementById("Artistcontents").appendChild(para);
                                break;

                            default:
                                var para = document.createElement("p");
                                if (results._links.thumbnail.href != "/images/icon-152.png") {
                                    var linebreak = document.createElement("br");
                                    var title = document.createTextNode(results.title);
                                    var img = document.createElement("img");
                                    img.setAttribute('src', results._links.thumbnail.href);
                                    para.appendChild(title);
                                    para.appendChild(linebreak);
                                    para.appendChild(img);
                                }
                                document.getElementById("Artworkcontents").appendChild(para);
                                break;
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
    }
});