$(document).ready(function () {
    var books = '{' +
    '"books": [ {"bookName": "Immortals of Meluha","author": "Amish Tripathi","price": 300,"publisher": "Westland Ltd" },' +
        '{ "bookName": "Chanakyas Chant","author": "Ashwin SAnghi","price": 250,"publisher": "Westland Ltd" },' +
        '{ "bookName": "Deception Point","author": "Dan Brown","price": 500,"publisher": "DoubleDay" },' +
        '{"bookName": "Abduction","author": "Robin Cook","price": 210,"publisher": "Penguin" }' +
        ']' +
        '}';
    jsonData = JSON.parse(books);
    var length = jsonData.books.length;

    for (var i = 0; i < length; i++) {
        var bookName = jsonData.books[i].bookName;
        var author = jsonData.books[i].author;
        var price = jsonData.books[i].price;
        var publisher = jsonData.books[i].publisher;

        var table = document.getElementById("booksTBLBody");
        var row = table.insertRow(i);

        row.insertCell(0).innerHTML = bookName;
        row.insertCell(1).innerHTML = author;
        row.insertCell(2).innerHTML = price;
        row.insertCell(3).innerHTML = publisher;
    }

    document.getElementById("content").appendChild(booksTable);
});