var passwd;
$(document).ready(function () {

    var key = "../getkey.aspx?apikey";
    var flag = 0;
    generateURL();
    var url = "https://api.artsy.net/api/artworks?gene_id=51f18d0e275b24a84d00063a";

    $("#ArtworkDetails").hide();

    function generateURL() {
        var getmy_key_result = $.ajax(key);
        getmy_key_result.fail(ErrorGettingKey);
        getmy_key_result.done(getkey);
    }

    function getkey(result) {
        passwd = result;
        //alert(passwd);
        if (flag == 0) {
            token = retrieveResults(url, passwd);
        }
    }

    function ErrorGettingKey() {
        alert("Error getting API key!");
    }

    $(document).keypress(function (e) {
        if (e.which == 13) {
            flag = 1;
            clearContents();
            var url = "";
            var url1 = "https://api.artsy.net/api/search?q=";
            var url3 = "&Token:";
            var artist = document.getElementById("searchString").value;
            var url2 = artist;
            var url3 = "&Token:";
            url = url1 + url2 + url3;
            displayResults(url, passwd);
        }
    });

    $("#submitArtist").click(function () {
        flag = 1;
        clearContents();
        var url = "";
        var url1 = "https://api.artsy.net/api/search?q=";
        var url3 = "&Token:";
        var artist = document.getElementById("searchString").value;
        var url2 = artist;
        var url3 = "&Token:";
        url = url1 + url2 + url3;
        displayResults(url, passwd);
    });

    $("#ArtworkDetails").hide();
});

function changeDisplay() {
    $("#Artworkcontents").empty();
    $("#displayDetails").empty();
    $("#ArtworkDetails").empty();
    var text = document.createTextNode("Click on a artwork to get its details.");
    document.getElementById("displayDetails").appendChild(text);
    //alert("inside go btn cllick");
    var genetype = document.getElementById("dropdownlist");
    var i = genetype.selectedIndex;
    var url = "";
    switch (genetype.options[i].value) {
        case "16century":
            url = "https://api.artsy.net/api/artworks";
            token = retrieveResults(url, passwd);
            break;
        case "arthistory":
            url = "https://api.artsy.net/api/artworks?gene_id=51f18d0e275b24a84d00063a";
            token = retrieveResults(url, passwd);
            break;
        case "isolation":
            url = "https://api.artsy.net/api/artworks?gene_id=4d90d194dcdd5f44a5000092";
            token = retrieveResults(url, passwd);
            break;
        case "nostalgia":
            url = "https://api.artsy.net/api/artworks?gene_id=4dcdf3f18080ad0001003b2c";
            token = retrieveResults(url, passwd);
            break;
        case "patterns":
            url = "https://api.artsy.net/api/artworks?gene_id=4e5ffebe1bb9170001001566";
            token = retrieveResults(url, passwd);
            break;
        case "landscape":
            url = "https://api.artsy.net/api/artworks?gene_id=4d90d193dcdd5f44a500007d";
            token = retrieveResults(url, passwd);
            break;
        case "selfportrait":
            url = "https://api.artsy.net/api/artworks?gene_id=4dc7f1ddb1783b0001000266";
            token = retrieveResults(url, passwd);
            break;
        case "colortheorey":
            url = "https://api.artsy.net/api/artworks?gene_id=4de817cafe38390001001d7d";
            token = retrieveResults(url, passwd);
            break;
        case "stillife":
            url = "https://api.artsy.net/api/artworks?gene_id=4d90d193dcdd5f44a500007f";
            token = retrieveResults(url, passwd);
            break;
        case "calligraphic":
            url = "https://api.artsy.net/api/artworks?gene_id=4dc7edffb1783b0001000239";
            token = retrieveResults(url, passwd);
            break;
        case "nature":
            url = "https://api.artsy.net/api/artworks?gene_id=4dcdf920522d6e00010042ca";
            token = retrieveResults(url, passwd);
            break;
        case "free":
            url = "https://api.artsy.net/api/artworks?gene_id=518ba7fd9c0dedda83000235";
            token = retrieveResults(url, passwd);
            break;
        case "city":
            url = "https://api.artsy.net/api/artworks?gene_id=4e4ec2464c2606000104bff1";
            token = retrieveResults(url, passwd);
            break;
        case "realism":
            url = "https://api.artsy.net/api/artworks?gene_id=4dd54e60043eb10001002738";
            token = retrieveResults(url, passwd);
            break;
            
        case "grand":
            url = "https://api.artsy.net/api/artworks?gene_id=4fa2e77a0385570001001293";
            token = retrieveResults(url, passwd);
            break;
            
        case "religious":
            url = "https://api.artsy.net/api/artworks?gene_id=51b662d08b3b81ec27000289";
            token = retrieveResults(url, passwd);
            break;
    }
}

function clearContents() {
    $("#displayDetails").empty();
}

function displayResults(url, passwd) {
    var noartwork = true;
    var count = 0;
    var tokenURL = "https://api.artsy.net/oauth2/access_token?client_id=4ca711359d8808b1614e&client_secret=2caa296b14a0239be025fc31ff6f5686&grant_type=credentials&email=gadgil.r@husky.neu.edu&password=" + passwd;
    $.getJSON(tokenURL, function (result) {
        token = result.access_token;
        alert(url);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function display(result) {
                if (count < 10) {
                    count++;
                    //alert("success!!!!");
                    //alert(url);
                    //alert(result);
                    if (result.total_count == 0) {
                        var text = document.createTextNode("No results match the search criteria. Please try some different search data");
                        document.getElementById("content").appendChild(text);
                    }
                    $.each(result._embedded.results, function (i, results) {
                        //alert(results.title + results.type);
                        if (results.type == "Artwork") {
                            noartwork = false;
                            //alert("artwork found");
                            var hrefid = results._links.self.href;
                            //alert(hrefid);
                            var para = document.createElement("p");
                            para.setAttribute('class', 'artworkpara');
                            if (results._links.thumbnail.href != "/images/icon-152.png") {
                                var linebreak = document.createElement("br");
                                var description = document.createElement("p");
                                var desc = document.createTextNode(results.description);
                                var img = document.createElement("img");
                                img.setAttribute('src', results._links.thumbnail.href);
                                description.appendChild(desc);
                                para.appendChild(description);
                                para.appendChild(linebreak);
                                para.appendChild(img);
                            }
                            document.getElementById("content").appendChild(para);
                        }
                    });
                    $.ajax({
                        url: result._links.next.href,
                        type: 'GET',
                        cache: false,
                        datatype: 'json',
                        success: function (result) {
                            display(result);
                        },
                        error: function () {
                            alert("An error has occurred!! Please try again later");
                        },
                        beforeSend: function (jqXHR, settings) {
                            jqXHR.setRequestHeader("X-Access-Token", token);
                        }
                    });
                }
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

function displayDetails(id) {
    clearContents();
    var elementId = parseInt(id.substring(12));
    var displayArtwork = "artDetails" + elementId;
    detailedArtwork = document.getElementById(displayArtwork);
    document.getElementById("ArtworkDetails").appendChild(detailedArtwork.cloneNode(true));
    document.getElementById("displayDetails").appendChild(detailedArtwork);
}

function determineArtist(url) {
    var tokenURL = "https://api.artsy.net/oauth2/access_token?client_id=4ca711359d8808b1614e&client_secret=2caa296b14a0239be025fc31ff6f5686&grant_type=credentials&email=gadgil.r@husky.neu.edu&password=" + passwd;
    var count = 0;
    alert("inside determine artist");
    $.getJSON(tokenURL, function (result) {
        $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            dataType: 'json',
            success: function loadresults(result) {
                alert("retrieving data artist name: ");
                alert(result);
            },
            error: function () {
                alert("An error has occurred!! Please try again later");
            },
            beforeSend: function (jqXHR, settings) {
                jqXHR.setRequestHeader("X-Access-Token", token);
            }
        });
    });
}
function retrieveResults(url, passwd) {
    //alert("inside retrieve results");
    //alert("password:"+passwd);

    var tokenURL = "https://api.artsy.net/oauth2/access_token?client_id=4ca711359d8808b1614e&client_secret=2caa296b14a0239be025fc31ff6f5686&grant_type=credentials&email=gadgil.r@husky.neu.edu&password=" + passwd;
    var count = 0;

    $.getJSON(tokenURL, function (result) {
        token = result.access_token;
        $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            dataType: 'json',
            success: function loadresults(result) {
                if (count < 10) {
                    count++;
                    $.each(result._embedded.artworks, function (i, artworks) {
                        i++;
                        if(artworks._links.thumbnail) {
                            var artwork_image = artworks._links.thumbnail.href;
                            var artwork_image_url = artwork_image.replace("medium", "square");
                            var li = document.createElement("li");
                            li.setAttribute('id', "imageDetails" + count + i);
                            var img = document.createElement("img");
                            img.setAttribute('src', artwork_image_url);
                            li.appendChild(img);
                            document.getElementById("Artworkcontents").appendChild(li);
                        
                            $('#imageDetails' + count + i).on("click", function () {
                                displayDetails(this.id);
                            });
                            var artworkDetailsDiv = document.createElement("div");
                            var linebreak = document.createElement("br");
                            artworkDetailsDiv.setAttribute('id', "artDetails" + count + i);
                            var titlePara = document.createElement("p");
                            var title = document.createTextNode(artworks.title);
                            var categoryPara = document.createElement("p");
                            var category = document.createTextNode("\nCategory: " + artworks.category);
                            var mediumPara = document.createElement("p");
                            var medium = document.createTextNode("\nMedium: " + artworks.medium);
                            var artDatePara = document.createElement("p");
                            var artDate = document.createTextNode("\nDate: " + artworks.date);
                            var institutionPara = document.createElement("p");
                            var collecting_institution = document.createTextNode("\nCollecting Institution: " + artworks.collecting_institution);
                            var painting = document.createElement("img");
                            var artist = determineArtist(artworks._links.artists.href);
                            painting.setAttribute('src', artworks._links.thumbnail.href);
                            titlePara.appendChild(title);
                            categoryPara.appendChild(category);
                            mediumPara.appendChild(medium);
                            artDatePara.appendChild(artDate);
                            institutionPara.appendChild(collecting_institution);
                            artworkDetailsDiv.appendChild(titlePara);
                            artworkDetailsDiv.appendChild(linebreak);
                            artworkDetailsDiv.appendChild(categoryPara);
                            artworkDetailsDiv.appendChild(linebreak);
                            artworkDetailsDiv.appendChild(mediumPara);
                            artworkDetailsDiv.appendChild(linebreak);
                            artworkDetailsDiv.appendChild(artDatePara);
                            artworkDetailsDiv.appendChild(linebreak);
                            artworkDetailsDiv.appendChild(institutionPara);
                            artworkDetailsDiv.appendChild(linebreak);
                            artworkDetailsDiv.appendChild(painting);
                            document.getElementById("ArtworkDetails").appendChild(artworkDetailsDiv);
                        }
                    });
                    if (result._links.next != null) {
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
                    }
                    else {
                        count = 10;
                        //break;
                    }
                }
            },
            error: function () {
                alert("An error has occurred!! Please try again later");
            },
            fail: function () {
                alert("Some failure has occurred!! Please try again later");
            },
            beforeSend: function (jqXHR, settings) {
                jqXHR.setRequestHeader("X-Access-Token", token);
            },
        });
    });
}