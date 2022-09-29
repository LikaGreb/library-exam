class Book{
    constructor(bookId, bookName, author, pageQuant, publisher, copyOfBook) {
        this.bookId = bookId,
        this.bookName = bookName,
        this.author = author,
        this.pageQuant = pageQuant,
        this.publisher = publisher,
        this.copyOfBook = copyOfBook
    }
    setBook() {
        let book = {
            bookId: this.bookId,
            bookName : this.bookName,
            author : this.author,
            pageQuant : this.pageQuant,
            publisher : this.publisher,
            copyOfBook : this.copyOfBook
        }
    }
}
var JSPart1 = new Book(1, "JS part 1", "Allen Fox", 523, "NYPablisher", 2);
JSPart1.setBook();

var fullStuck = new Book(2, "Full Stack Recruiter: The Ultimate Edition", "Jan Tegze", 762, "Jan Tegze", 1);
fullStuck.setBook();

var softwareArchitecture = new Book(3, "Software Architecture in Practice (SEI Series in Software Engineering) 4th Edition", " Len Bass, Paul Clements, Rick Kazman", 442, "Addison-Wesley Professional", 3);
softwareArchitecture.setBook();

var artOfColor = new Book(4, "Искусство цвета", "Иоханнес Иттен", 96, "Видавець Дмитро Аронов", 5);
artOfColor.setBook();

var clientWay = new Book(5, "Путь клиента. Создаем ценность продуктов и услуг через карты путей, блупринты и другие инструменты визуализации", "Джим Калбах", 432, "Манн, Иванов и Фербер", 3);
clientWay.setBook();

var blockchain = new Book(6, "Машина правды. Блокчейн и будущее человечества", "Пол Винья, Майкл Кейси", 655, "Пол Винья, Майкл Кейси", 1);
blockchain.setBook();

var things97 = new Book(7, "97 Things Every Java Programmer Should Know: Collective Wisdom from the Experts 1st Edition", "Kevlin Henney", 255, "O'Reilly Media", 5);
things97.setBook();

var APIDesignPatterns = new Book(8, "API Design Patterns", "JJ Geewax", 480, "Manning Publications Co.", 2);
APIDesignPatterns.setBook();

var wordpress = new Book(9, "Building Web Apps with WordPress: WordPress as an Application Framework 2nd Edition", "Brian Messenlehner, Jason Coleman", 532, "O'Reilly Media", 1);
wordpress.setBook();

var HTTP_2 = new Book(10, "HTTP/2 в действии", "Барри Поллард", 424, "ДМК Пресс", 4);
HTTP_2.setBook();

var books=[JSPart1, fullStuck, softwareArchitecture, artOfColor, clientWay, blockchain, things97, APIDesignPatterns, wordpress, HTTP_2];

var tbody = document.querySelector("tbody");

for (let i = 0; i < books.length; i++){
    tbody.innerHTML += "<tr><td>" + books[i].bookId + "</td><td>" + books[i].bookName + "</td><td>" + books[i].author + "</td><td>" + books[i].pageQuant + "</td><td>" + books[i].publisher + "</td><td>" + books[i].copyOfBook + "</td></tr>";
}