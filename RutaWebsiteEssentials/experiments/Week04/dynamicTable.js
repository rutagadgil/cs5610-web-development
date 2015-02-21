function addNewArtwork(title, price) {
    if (!title) {
        alert("Please enter a title for your artwork");
        return false;
    }
    if (!price || isNaN(price)) {
        alert("Please enter a price for your artwork");
        return false;
    }
    else {
        var table = document.getElementById("paintings");
        var count = table.rows.length;
        var row = table.insertRow(count);
        var cellNo = row.insertCell(0);
        var cellTitle = row.insertCell(1);
        var cellPrice = row.insertCell(2);

        cellNo.innerHTML = count - 1;
        cellTitle.innerHTML = title;
        cellPrice.innerHTML = price;

        document.getElementById("title").value = "";
        document.getElementById("price").value = "";
    }

}