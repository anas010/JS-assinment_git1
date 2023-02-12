var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var allBooks = [];
function submit() {
    var book = {
        name: siteName.value,
        url: siteUrl.value
    };
    allBooks.push(book);
    display();
    clear();
}
function display() {
    var container = ``;
    for (var i = 0; i < allBooks.length; i++) {
        container += `
        <div class="webwell row" id="${allBooks[i].name}">
                <h2>${allBooks[i].name}</h2>
                <a class="btn btn-primary" href="http://${allBooks[i].url}" target="_blank">visit</a>
                <button class="btn btn-danger btndelete" onclick="delet(${i})" id="${i}">Delete</button>
            </div>
        `;
    }
    document.getElementById("bookmarkList").innerHTML = container;
}
function clear() {
    siteName.value = "";
    siteUrl.value = "";
}
function delet(index) {
    allBooks.splice(index, 1);
    display();
}








