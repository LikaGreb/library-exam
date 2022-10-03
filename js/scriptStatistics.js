

cards = JSON.parse(window.localStorage.getItem("cards"));

//для відвідувачів
var resultVisitors = [];

cards.forEach(element => {
    resultVisitors.push(element.visitorName);
});

    counts = {},
    res = [];
for (var i in resultVisitors) {
    counts[resultVisitors[i]] = (counts[resultVisitors[i]] || 0) + 1;
}
Object.keys(counts).sort(function(a, b) {
    return counts[b] - counts[a]
}).forEach(function(el, idx, resultVisitors) {
    res.push([el, counts[el]]);
});


var visitorsTable = document.getElementById("visitorsTable");

for (let i = 0; i <= 4; i++){
    visitorsTable.innerHTML += "<tr><td>" + res[i][0] + "</td><td>" + res[i][1] + "</td></tr>";
}


//для книг
var resultBooks = [];

cards.forEach(element => {
    resultBooks.push(element.bookName);
});



    counts1 = {},
    res1 = [];
for (var i in resultBooks) {
    counts1[resultBooks[i]] = (counts1[resultBooks[i]] || 0) + 1;
}
Object.keys(counts1).sort(function(a, b) {
    return counts1[b] - counts1[a]
}).forEach(function(el, idx, resultBooks) {
    res1.push([el, counts1[el]]);
});


var booksTable = document.getElementById("booksTable");

for (let i = 0; i <= 4; i++){
    booksTable.innerHTML += "<tr><td>" + res1[i][0] + "</td><td>" + res1[i][1] + "</td></tr>";
}