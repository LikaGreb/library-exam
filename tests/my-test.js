module.exports = class Book{
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

var newBook;

//масив книг
var booksStart=[JSPart1, fullStuck, softwareArchitecture, artOfColor, clientWay, blockchain, things97, APIDesignPatterns, wordpress, HTTP_2];
var books;
var bookIdCounter;
if (window.localStorage.getItem("books") == null) {
    window.localStorage.setItem("books", JSON.stringify(booksStart));
    books = JSON.parse(window.localStorage.getItem("books"));
    
}
if (window.localStorage.getItem("books") !== null) {
  
    books = JSON.parse(window.localStorage.getItem("books"));
    
}
if (window.localStorage.getItem("bookIdCounter") == null) {
    window.localStorage.setItem("bookIdCounter", 11);
    bookIdCounter=window.localStorage.getItem("bookIdCounter")
    
}
if (window.localStorage.getItem("bookIdCounter") !== null) {
    bookIdCounter=window.localStorage.getItem("bookIdCounter")
    
}

 //запис змін у LocalStorage
function editLocalStorage() {
    window.localStorage.removeItem("books");
    window.localStorage.setItem("books", JSON.stringify(books));
    books = JSON.parse(window.localStorage.getItem("books"));
    
}
editLocalStorage();
var tbody = document.querySelector("tbody");

//відображення таблиці книг
function setTable(arr) {
    for (let i = 0; i < arr.length; i++) {
        tbody.innerHTML += "<tr><td>" + arr[i].bookId + "</td><td>" + arr[i].bookName + "</td><td>" + arr[i].author + "</td><td>" + arr[i].pageQuant + "</td><td>" + arr[i].publisher + "</td><td>" + arr[i].publishYear + "</td><td>" + arr[i].copyOfBook + "</td><td><button class='editBtn' onclick='editButton(this)'>Edit</button></td><td><button class='deleteBtn' onclick='deleteButton(this)'>Delete</button></td></tr>";
    }
}
setTable(books);
module.exports = setTable(arr);

    var editBtn = document.getElementsByClassName("editBtn");
    var editBookName = document.getElementById("editBookName");
    var editAuthor = document.getElementById("editAuthor");
    var editPageQuant = document.getElementById("editPageQuant");
    var editPublisher = document.getElementById("editPublisher");
    var editPublishYear = document.getElementById("editPublishYear");
    var editCopy = document.getElementById("editCopy");
    var bookIdTable;
    var bookNameTable;
    var authorTable;
    var pageQuantTAble;
    var publisherTable;
    var publishYearTable;
    var copyOfBookTable;

    //МОДАЛЬНЕ ВІКНО
// Отримуеш модальне вікно
var modal = document.getElementById('myModal');

// Отримуеш кнопку, яка відкриває модальне вікно
var btn = document.getElementById("myBtn");

// Отримуеш елемент <span>, який закриває модальне вікно
var span = document.getElementsByClassName("close")[0];

// Коли користувач натискає кнопку, відкривається модальне вікно
module.exports= function openModal() {
    modal.style.display = "block";
}

// Коли користувач клацає на <span> (x), закривається модальне вікно
/*span.onclick = function closeM() {
    modal.style.display = "none";
}*/

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
    bookIdTable = tr.cells[0].innerText;
    bookNameTable = tr.cells[1].innerText;
    authorTable = tr.cells[2].innerText;
    pageQuantTAble = tr.cells[3].innerText;
    publisherTable = tr.cells[4].innerText;
    publishYearTable = tr.cells[5].innerText;
    copyOfBookTable = tr.cells[6].innerText;

    editBookName.value = bookNameTable;
    editAuthor.value = authorTable;
    editPageQuant.value = pageQuantTAble;
    editPublisher.value = publisherTable;
    editPublishYear.value = publishYearTable;
    editCopy.value = copyOfBookTable;
 
}
function saveEdit() {

    if ((editBookName.value.length > 1) && (editAuthor.value.length > 1) && (editPageQuant.value > 0) && (editPublisher.value.length > 1) && (editPublishYear.value > 0) && (editCopy.value > 0)) {
       
        for (let i = 0; i < books.length; i++) {
            if (books[i].bookId == bookIdTable) {
                books[i].author = editAuthor.value;
                books[i].pageQuant = editPageQuant.value;
                books[i].publisher = editPublisher.value;
                books[i].publishYear = editPublishYear.value;
                books[i].copyOfBook = editCopy.value;
            }
        }
        editLocalStorage();
        location.reload();
    }
    else {
        alert("All fields must be filled and numbers must be positive");
        
    }
}



function deleteButton(btn) {
  
    var tr = btn.parentNode.parentNode;
    bookIdTable = tr.cells[0].innerText;
    
    let a = books.findIndex(item => item.bookId == bookIdTable);
    books.splice(a, 1);
    
    tbody.innerHTML = "";
    setTable(books);

   editLocalStorage();
}

function addBook() {
    
        modal.style.display = "block";
    if ((editBookName.value.length > 1) && (editAuthor.value.length > 1) && (editPageQuant.value > 0) && (editPublisher.value.length > 1) && (editPublishYear.value > 0) && (editCopy.value > 0)) {
         for (let i = 0; i < books.length; i++) {
            if (books[i].bookId < bookIdCounter) {
                
                newBook = new Book(bookIdCounter, editBookName.value, editAuthor.value, editPageQuant.value, editPublisher.value, editPublishYear.value, editCopy.value); 
                newBook.setBook();
                books.push(newBook);
                
                editLocalStorage();
                location.reload();
                return  window.localStorage.setItem("bookIdCounter", (Number(bookIdCounter) + 1));
         
            }
        }
    }
    else alert("All fields must be filled and numbers must be positive")
    
}

//сортування

function sort() {
    var sortBy = document.getElementById("sortBy");
    var sortedRows;
    switch (sortBy.value) {
        case "Book title": sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
            break;
        
        case "Author's name": sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[2].innerHTML > rowB.cells[2].innerHTML ? 1 : -1);
            break;
    
        case "Copy of book": sortedRows = Array.from(table.rows)
        .slice(1)
            .sort((rowA, rowB) => { return rowA.cells[6].innerHTML - rowB.cells[6].innerHTML; });
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
// test
