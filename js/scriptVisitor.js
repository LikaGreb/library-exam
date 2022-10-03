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
var newVisitor;

//масив відвідувачів
var visitorsStart = [kelley, lennon, gibbons, peel, medrano, tucker, mack, moses, feeney, rennie];
var visitorIdCounter;
var visitors;

if (window.localStorage.getItem("visitors") == null) {
    window.localStorage.setItem("visitors", JSON.stringify(visitorsStart));
    visitors = JSON.parse(window.localStorage.getItem("visitors"));
    
}
if (window.localStorage.getItem("visitors") !== null) {
    visitors = JSON.parse(window.localStorage.getItem("visitors"));
    
}
if (window.localStorage.getItem("visitorIdCounter") == null) {
    window.localStorage.setItem("visitorIdCounter", 11);
    visitorIdCounter=window.localStorage.getItem("visitorIdCounter")
    
}
if (window.localStorage.getItem("visitorIdCounter") !== null) {
    visitorIdCounter=window.localStorage.getItem("visitorIdCounter")
    
}

 //запис змін у LocalStorage
function editLocalStorage() {
    window.localStorage.removeItem("visitors");
    window.localStorage.setItem("visitors", JSON.stringify(visitors));
    visitors = JSON.parse(window.localStorage.getItem("visitors"));
   
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
    var editVisitorName = document.getElementById("editVisitorName");
    var editPhone = document.getElementById("editPhone");
  
    var visitorIdTable;
    var editVisitorTable;
    var editPhoneTable;
        
 //МОДАЛЬНЕ ВІКНО
// Отримуеш модальне вікно
var modal = document.getElementById('myModal');

// Отримуеш кнопку, яка відкриває модальне вікно
var btn = document.getElementById("myBtn");

// Отримуеш елемент <span>, який закриває модальне вікно
var span = document.getElementsByClassName("close")[0];

// Коли користувач натискає кнопку, відкривається модальне вікно
 function openModal() {
    modal.style.display = "block";
}

// Коли користувач клацає на <span> (x), закривається модальне вікно
span.onclick = function() {
    modal.style.display = "none";
}

// Коли користувач клацає будь-де за межами модального вікна, воно закривається
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//МОДАЛЬНЕ ВІКНО

function editButton(btn) {
   modal.style.display = "block";
    var tr = btn.parentNode.parentNode;
    tr.style.backgroundColor = "yellow";
    visitorIdTable = tr.cells[0].innerText;
    editVisitorTable = tr.cells[1].innerText;
    editPhoneTable = tr.cells[2].innerText;
    
    editVisitorName.value = editVisitorTable;
    editPhone.value = editPhoneTable;

}

function saveEdit() {
    let template = /^[\d\s-]*$/;;
    if ((editVisitorName.value.length > 1) && (template.test(editPhone.value)) && (editPhone.value.length > 0)) {
        for (let i = 0; i < visitors.length; i++) {
            if (visitors[i].visitorId == visitorIdTable) {
                visitors[i].visitorName = editVisitorName.value;
                visitors[i].phoneNumber = editPhone.value;
            
            }
        }
        editLocalStorage();
        location.reload();
    }
    else alert("All fields must be filled and phone must contains only numbers, spase and '-'")
}



function addVisitor() {
    modal.style.display = "block";
    let template = /^[\d\s-]*$/;
        
    if ((editVisitorName.value.length > 1) && (template.test(editPhone.value)) && (editPhone.value.length > 0)) {
        for (let i = 0; i < visitors.length; i++) {
            if (visitors[i].visitorId < visitorIdCounter) {
                newVisitor = new Visitor(visitorIdCounter, editVisitorName.value, editPhone.value); 
                newVisitor.setVisitor();
                visitors.push(newVisitor);
                
                editLocalStorage();
                location.reload();
                return  window.localStorage.setItem("visitorIdCounter", (Number(visitorIdCounter) + 1));
         
            }
        }
    }
    else alert("All fields must be filled and phone must contains only numbers, spase and '-'")
    
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