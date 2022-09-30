class Book{
    constructor(bookId, bookName, author, pageQuant, publisher, publishYear, copyOfBook) {
        this.bookId = bookId,
        this.bookName = bookName,
        this.author = author,
        this.pageQuant = pageQuant,
            this.publisher = publisher,
            this.publishYear=publishYear,
        this.copyOfBook = copyOfBook
    }
    setBook() {
        let book = {
            bookId: this.bookId,
            bookName : this.bookName,
            author : this.author,
            pageQuant : this.pageQuant,
            publisher: this.publisher,
            publishYear:this.publishYear,
            copyOfBook : this.copyOfBook
        }
    }
}
var JSPart1 = new Book(1, "JS part 1", "Allen Fox", 523, "NYPablisher", 2000, 2);
JSPart1.setBook();

var fullStuck = new Book(2, "Full Stack Recruiter: The Ultimate Edition", "Jan Tegze", 762, "Jan Tegze", 2010, 1);
fullStuck.setBook();

var softwareArchitecture = new Book(3, "Software Architecture in Practice (SEI Series in Software Engineering) 4th Edition", "Len Bass, Paul Clements, Rick Kazman", 442, "Addison-Wesley Professional", 2007, 3);
softwareArchitecture.setBook();

var artOfColor = new Book(4, "Искусство цвета", "Иоханнес Иттен", 96, "Видавець Дмитро Аронов", 2003, 5);
artOfColor.setBook();

var clientWay = new Book(5, "Путь клиента. Создаем ценность продуктов и услуг через карты путей, блупринты и другие инструменты визуализации", "Джим Калбах", 432, "Манн, Иванов и Фербер", 2012, 3);
clientWay.setBook();

var blockchain = new Book(6, "Машина правды. Блокчейн и будущее человечества", "Пол Винья, Майкл Кейси", 655, "Пол Винья, Майкл Кейси", 2005, 1);
blockchain.setBook();

var things97 = new Book(7, "97 Things Every Java Programmer Should Know: Collective Wisdom from the Experts 1st Edition", "Kevlin Henney", 255, "O'Reilly Media", 2018, 5);
things97.setBook();

var APIDesignPatterns = new Book(8, "API Design Patterns", "JJ Geewax", 480, "Manning Publications Co.", 2017, 2);
APIDesignPatterns.setBook();

var wordpress = new Book(9, "Building Web Apps with WordPress: WordPress as an Application Framework 2nd Edition", "Brian Messenlehner, Jason Coleman", 532, "O'Reilly Media", 2019, 1);
wordpress.setBook();

var HTTP_2 = new Book(10, "HTTP/2 в действии", "Барри Поллард", 424, "ДМК Пресс", 2015, 4);
HTTP_2.setBook();

//масив книг
var books=[JSPart1, fullStuck, softwareArchitecture, artOfColor, clientWay, blockchain, things97, APIDesignPatterns, wordpress, HTTP_2];

var tbody = document.querySelector("tbody");

//відображення таблиці книг
function setTable(arr) {
    for (let i = 0; i < arr.length; i++) {
        tbody.innerHTML += "<tr><td>" + arr[i].bookId + "</td><td>" + arr[i].bookName + "</td><td>" + arr[i].author + "</td><td>" + arr[i].pageQuant + "</td><td>" + arr[i].publisher + "</td><td>" + arr[i].publishYear + "</td><td>" + arr[i].copyOfBook + "</td><td><button class='editBtn' onclick='editButton(this)'>Edit</button></td><td><button class='deleteBtn' onclick='deleteButton(this)'>Delete</button></td></tr>";
    }
}
setTable(books);

var editBtn = document.getElementsByClassName("editBtn");

function editButton(btn) {
  
  var tr = btn.parentNode.parentNode;
  tr.style.backgroundColor = "yellow";
    console.log(tr);

    //потрібне модальне вікно
    
}

function deleteButton(btn) {
  
    var tr = btn.parentNode.parentNode;
    var bookIdTable = tr.cells[0].innerText;
    
    let a = books.findIndex(item => item.bookId == bookIdTable);
    books.splice(a, 1);
    
    tbody.innerHTML = "";
    setTable(books);
    
}

function addBook() {
    
    //модальне вікно
}

//сортування

function sort() {
    var sortBy = document.getElementById("sortBy");
    var sortedRows;
    switch (sortBy.value) {
        case "Назва книги": sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
            break;
        
        case "Ім'я автора": sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[2].innerHTML > rowB.cells[2].innerHTML ? 1 : -1);
            break;
    
        case "Кількість екземплярів у бібліотеці": sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[6].innerHTML > rowB.cells[6].innerHTML ? 1 : -1);
            break;
        
        default: sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
            break;
    }

    table.tBodies[0].append(...sortedRows);
}

//пошук
 var search = document.getElementById("search");

function searchBook() {
    let counter = 0;
    if (search.value.length < 3) {
        alert("Потрібно ввести більше трьох символів"); return;
    }
    else if (search.value == "tbody") {
        alert("Збігів не знайдено");
        return;
    }
    for(let i=0; i<tbody.children.length; i++){
        if(tbody.children[i].innerHTML.toLowerCase().includes(search.value)){
            tbody.children[i].style.backgroundColor = "red";
            counter++;
        }
        
    }
    if (counter===0) {
            alert("Збігів не знайдено"); 
        }
}

function backSearch() {
    for(let i=0; i<tbody.children.length; i++){
        
            tbody.children[i].style.backgroundColor="";
       
    }
}