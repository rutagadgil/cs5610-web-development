$(document).ready(function () {

    var i = 0;
    var url = "https://api.artsy.net/api/artworks?gene_id=51b662d08b3b81ec27000289";

    $.when(retrieveResults(url))
    .done(function () {
        //alert("done retrieving results");
    })
    .fail(function () {
        //alert("Could not retrive any artwork!!");
    });
    $("#ArtworkDetails").hide();
});

function clearContents() {
    $("#displayDetails").empty();
}
function displayDetails(id) {
    clearContents();
    var elementId = parseInt(id.substring(12));
    var displayArtwork = "artDetails" + elementId;
    detailedArtwork = document.getElementById(displayArtwork);
    document.getElementById("ArtworkDetails").appendChild(detailedArtwork.cloneNode(true));
    document.getElementById("displayDetails").appendChild(detailedArtwork);
}
function retrieveResults(url) {
    var tokenURL = "https://api.artsy.net/oauth2/access_token?client_id=4ca711359d8808b1614e&client_secret=2caa296b14a0239be025fc31ff6f5686&grant_type=credentials&email=gadgil.r@husky.neu.edu&password=ruts25391";
    var count = 0;
    $.getJSON(tokenURL, function (result) {
        token = result.access_token;
        $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            dataType: 'json',
            success: function loadresults(result) {
                if (count < 7) {
                    count++;
                    $.each(result._embedded.artworks, function (i, artworks) {
                        i++;
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
                    });
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