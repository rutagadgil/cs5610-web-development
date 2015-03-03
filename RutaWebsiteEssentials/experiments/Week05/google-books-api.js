$(document).ready(function () {
    $("#button1").click(function () {
        document.getElementById("content").innerHTML = "";
        document.getElementById("numberOfBooks").innerHTML = "";
        var url1 = "https://www.googleapis.com/books/v1/volumes?q=";
        var bookName = $("#bookName").val();
        var url2 = "&callback=handleResponse";
        var url = url1 + bookName + url2;
        searchAllBooks(url);
    });
});

function searchAllBooks(url) {
    $.ajax({
        url: url,
        dataType: 'jsonp'
    });
}

function handleResponse(response) {
    document.getElementById("numberOfBooks").innerHTML +=
        "<br><p>Number of Books found: " + response.items.length + "</p>";

    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        var title = item.volumeInfo.title;
        var authors = item.volumeInfo.authors;
        var description = item.volumeInfo.description;
        var rating = item.volumeInfo.averageRating;
        
        document.getElementById("content").innerHTML += "<br><b>" + title + "</b>";
        document.getElementById("content").innerHTML += "<br><i>" + authors + "</i>";
        document.getElementById("content").innerHTML += "<br><p>Description:" + description + "</p>";
        document.getElementById("content").innerHTML += "<br><p>Average Rating:" + rating + "</p>";
        document.getElementById("content").innerHTML += "<hr>";
    }
}