class Visitor{
    constructor(visitorId, visitorName, phoneNumber) {
        this.visitorId = visitorId,
        this.visitorName = visitorName,
        this.phoneNumber = phoneNumber
    }
    setVisitor() {
        let book = {
            visitorId: this.visitorId,
            visitorName : this.visitorName,
            phoneNumber : this.phoneNumber
        }
    }
}
var kelley = new Visitor(1, "Collette Kelley", '044-233-22-55');
kelley.setVisitor();
var lennon = new Visitor(2, "Rubby-Rose Lennon", '044-892-45-73');
lennon.setVisitor();
var gibbons = new Visitor(3, "Leanne Gibbons", '044-789-26-43');
gibbons.setVisitor();
var peel = new Visitor(4, "Rumaisa Peel", '044-289-41-56');
peel.setVisitor();
var medrano = new Visitor(5, "Gene Medrano", '044-281-45-27');
medrano.setVisitor();
var tucker = new Visitor(6, "Sheridan Tucker", '044-172-18-94');
tucker.setVisitor();
var mack = new Visitor(7, "Christina Mack", '044-168-45-13');
mack.setVisitor();
var moses = new Visitor(8, "Everley Moses", '044-467-34-38');
moses.setVisitor();
var feeney = new Visitor(9, "Kara Feeney", '044-765-13-45');
feeney.setVisitor();
var rennie = new Visitor(10, "Cameron Rennie", '044-468-35-98');
rennie.setVisitor();

//масив відвідувачів
var visitorsStart = [kelley, lennon, gibbons, peel, medrano, tucker, mack, moses, feeney, rennie];

var visitors;
if (window.localStorage.getItem("visitors") == null) {
    window.localStorage.setItem("visitors", JSON.stringify(visitorsStart));
    visitors = JSON.parse(window.localStorage.getItem("visitors"));
    console.log(visitors);
}
if (window.localStorage.getItem("visitors") !== null) {
  
    visitors = JSON.parse(window.localStorage.getItem("visitors"));
    console.log(visitors);
}

 //запис змін у LocalStorage
function editLocalStorage() {
    window.localStorage.removeItem("visitors");
    window.localStorage.setItem("visitors", JSON.stringify(visitors));
    visitors = JSON.parse(window.localStorage.getItem("visitors"));
    console.log(visitors);
}
editLocalStorage();

//відображення таблиці відвідувачів
var tbody = document.querySelector("tbody");
function setTable(arr) {
    for (let i = 0; i < arr.length; i++) {
        tbody.innerHTML += "<tr><td>" + arr[i].visitorId + "</td><td>" + arr[i].visitorName + "</td><td>" + arr[i].phoneNumber + "</td><td><button class='editBtn' onclick='editButton(this)'>Edit</button></td></tr>";
    }
}
setTable(visitors);

var editBtn = document.getElementsByClassName("editBtn");

function editButton(btn) {
  
  var tr = btn.parentNode.parentNode;
  tr.style.backgroundColor = "yellow";
    console.log(tr);

    //потрібне модальне вікно
    
}



function addVisitor() {
    
    //модальне вікно
}

//сортування

function sort() {
    var sortBy = document.getElementById("sortBy");
    var sortedRows;
    switch (sortBy.value) {
        case "ID": sortedRows = Array.from(table.rows)
        .slice(1)
            .sort((rowA, rowB) => { return rowA.cells[0].innerHTML - rowB.cells[0].innerHTML; });
            break;
        
        case "Visitor's name": sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
            break;
    
    }

    table.tBodies[0].append(...sortedRows);
}

//пошук
 var search = document.getElementById("search");

function searchVisitor() {
    let counter = 0;
    if (search.value.length < 3) {
        alert("You must input more than 2 symbols"); return;
    }
    else if (search.value == "tbody") {
        alert("No mathes");
        return;
    }
    for(let i=0; i<tbody.children.length; i++){
        if(tbody.children[i].innerHTML.toLowerCase().includes(search.value)){
            tbody.children[i].style.backgroundColor = "red";
            counter++;
        }
        
    }
    if (counter===0) {
            alert("No mathes"); 
        }
}

function backSearch() {
    for(let i=0; i<tbody.children.length; i++){
        
            tbody.children[i].style.backgroundColor="";
       
    }
}