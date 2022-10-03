class Card{
    constructor(cardId, visitorName, bookName, borrowDate, returnDate){}
    
}
var visitors = JSON.parse(window.localStorage.getItem("visitors"));
var books = JSON.parse(window.localStorage.getItem("books"));

        
var card1 = new Card();
card1.cardId = 1;
card1.visitorName = visitors[0].visitorName;
card1.bookName = books[0].bookName;
card1.borrowDate = formatDate('09 22 2022');
card1.returnDate = "";

var card2 = new Card();
card2.cardId = 2;
card2.visitorName = visitors[1].visitorName;
card2.bookName = books[1].bookName;
card2.borrowDate = formatDate('08 22 2022');
card2.returnDate = formatDate('09 22 2022');

//масив карток
var cardsStart = [card1, card2];
var cards;
var cardIdCounter;
if (window.localStorage.getItem("cards") == null) {
    window.localStorage.setItem("cards", JSON.stringify(cardsStart));
    cards = JSON.parse(window.localStorage.getItem("cards"));
    
}
if (window.localStorage.getItem("cards") !== null) {
  
    cards = JSON.parse(window.localStorage.getItem("cards"));
    
}
if (window.localStorage.getItem("cardIdCounter") == null) {
    window.localStorage.setItem("cardIdCounter", 3);
    cardIdCounter=window.localStorage.getItem("cardIdCounter")
    
}
if (window.localStorage.getItem("cardIdCounter") !== null) {
    cardIdCounter=window.localStorage.getItem("cardIdCounter")
    
}

function editLocalStorage() {
    window.localStorage.removeItem("cards");
    window.localStorage.setItem("cards", JSON.stringify(cards));
    cards = JSON.parse(window.localStorage.getItem("cards"));
    
}
editLocalStorage();

function editLocalStorageBooks() {
    window.localStorage.removeItem("books");
    window.localStorage.setItem("books", JSON.stringify(books));
    books = JSON.parse(window.localStorage.getItem("books"));
    
}

var tbody = document.querySelector("tbody");

//відображення таблиці книг
function setTable(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].returnDate == "") {
            tbody.innerHTML += "<tr><td>" + arr[i].cardId + "</td><td>" + arr[i].visitorName + "</td><td>" + arr[i].bookName + "</td><td>" + arr[i].borrowDate + "</td><td><button onclick=returnBook(this)>Return</button></td></tr>";
    
        }
        if (arr[i].returnDate !== "") {
            tbody.innerHTML += "<tr><td>" + arr[i].cardId + "</td><td>" + arr[i].visitorName + "</td><td>" + arr[i].bookName + "</td><td>" + arr[i].borrowDate + "</td><td>" + arr[i].returnDate + "</td></tr>";
        }
    }
}
setTable(cards);

var editBtn = document.getElementsByClassName("editBtn");

function addcard() {
    
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
        
        case "Visitor": sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
            break;
    
        case "Book": sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[2].innerHTML > rowB.cells[2].innerHTML ? 1 : -1);
            break;
        
        case "Borrow Date": sortedRows = Array.from(table.rows)
        .slice(1)
            .sort((rowA, rowB) => {
                var aComps = rowA.cells[3].innerHTML.split(".");
                
                var bComps = rowB.cells[3].innerHTML.split(".");
                var aDate = new Date(aComps[2], aComps[1], aComps[0]);
                var bDate = new Date(bComps[2], bComps[1], bComps[0]);
                return aDate.getTime() - bDate.getTime();
                
            });
            break;
        
        case "Return Date": sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => {
                var aComps = rowA.cells[4].innerHTML.split(".");
                
                var bComps = rowB.cells[4].innerHTML.split(".");
                var aDate = new Date(aComps[2], aComps[1], aComps[0]);
                var bDate = new Date(bComps[2], bComps[1], bComps[0]);
                return aDate.getTime() - bDate.getTime();
                
            });;
            break;
    }

    table.tBodies[0].append(...sortedRows);
}

//пошук
 var search = document.getElementById("search");

function searchCard() {
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

//modal1 window

       
(function () {
    if (typeof window.CustomEvent === "function") return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: null };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    window.CustomEvent = CustomEvent;
})();

$modal1 = function (options) {
    var
        _elemmodal1,
        _eventShowmodal1,
        _eventHidemodal1,
        _hiding = false,
        _destroyed = false,
        _animationSpeed = 200;

    function _createmodal1(options) {
        var
            elemmodal1 = document.createElement('div'),
            modal1Template = '<div class="modal1__backdrop" data-dismiss="modal1"><div class="modal1__content"><div class="modal1__header"><div class="modal1__title" data-modal1="title">{{title}}</div><span class="modal1__btn-close" data-dismiss="modal1" title="Close">×</span></div><div class="modal1__body" data-modal1="content">{{content}}</div>{{footer}}</div></div>',
            modal1FooterTemplate = '<div class="modal1__footer">{{buttons}}</div>',
            //modal1ButtonTemplate = '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
            modal1HTML,
            modal1FooterHTML = '';

        elemmodal1.classList.add('modal11');
        modal1HTML = modal1Template.replace('{{title}}', "New card");
        modal1HTML = modal1HTML.replace('{{content}}', '<form id="selectVisitor"><label for="visitorList">Visitor:</label><select name="visitorList" id="visitorList" size="5"></select></form><form id="selectBook"><label for="bookList">Book:</label><select name="bookList" id="bookList" size="5"></select></form>');
     
        modal1FooterHTML = modal1FooterTemplate.replace('{{buttons}}', '<button data-dismiss="modal1" onclick="saveCard()">Save</button>');
        
        modal1HTML = modal1HTML.replace('{{footer}}', modal1FooterHTML);
        elemmodal1.innerHTML = modal1HTML;
        document.body.appendChild(elemmodal1);
        return elemmodal1;
    }

    function _showmodal1() {
        if (!_destroyed && !_hiding) {
            _elemmodal1.classList.add('modal1__show');
            document.dispatchEvent(_eventShowmodal1);
        }

        var selectVisitor = document.getElementById("selectVisitor");
        var visitorSelect = selectVisitor.visitorList;
        
       
        for (let i = 0; i < visitors.length; i++){
            newOption = new Option(visitors[i].visitorName, visitors[i].visitorName);
            visitorSelect.options[visitorSelect.options.length] = newOption;
        }

        var selectBook = document.getElementById("selectBook");
        var bookSelect = selectBook.bookList;
               
        for (let i = 0; i < books.length; i++){
           
                if (books[i].copyOfBook > 0) {
                    newOption = new Option(books[i].bookName, books[i].bookName);
                    bookSelect.options[bookSelect.options.length] = newOption;
                }
                
            
            
        }
    }

    function _hidemodal1() {
        _hiding = true;
        _elemmodal1.classList.remove('modal1__show');
        _elemmodal1.classList.add('modal1__hiding');
        setTimeout(function () {
            _elemmodal1.classList.remove('modal1__hiding');
            _hiding = false;
        }, _animationSpeed);
        document.dispatchEvent(_eventHidemodal1);
    }

    function _handlerClosemodal1(e) {
        if (e.target.dataset.dismiss === 'modal1') {
            _hidemodal1();
        }
    }

    _elemmodal1 = _createmodal1(options || {});


    _elemmodal1.addEventListener('click', _handlerClosemodal1);
    _eventShowmodal1 = new CustomEvent('show.modal1', { detail: _elemmodal1 });
    _eventHidemodal1 = new CustomEvent('hide.modal1', { detail: _elemmodal1 });

    return {
        show: _showmodal1,
        hide: _hidemodal1,
        destroy: function () {
            _elemmodal1.parentElement.removeChild(_elemmodal1),
                _elemmodal1.removeEventListener('click', _handlerClosemodal1),
                _destroyed = true;
        },
        setContent: function (html) {
            _elemmodal1.querySelector('[data-modal1="content"]').innerHTML = html;
        },
        setTitle: function (text) {
            _elemmodal1.querySelector('[data-modal1="title"]').innerHTML = text;
        }
    }
};

function saveCard() {
    var selVis;
    var selBook;
    var selectVisitor = document.getElementById("selectVisitor");
    var visitorSelect = selectVisitor.visitorList;
    for (let i = 0; i < visitorSelect.options.length; i++){
        if (visitorSelect.options[i].selected == true) {
            selVis=visitorSelect.options[i].value;
           
        }
    }
    var selectBook = document.getElementById("selectBook");
    var bookSelect = selectBook.bookList;
    for (let i = 0; i < bookSelect.options.length; i++){
        if (bookSelect.options[i].selected == true) {
            selBook=bookSelect.options[i].value;
           
        }
    }
    for (let i = 0; i < books.length; i++){
        if (books[i].bookName == selBook) {
            books[i].copyOfBook--;
            
        }
    }
    
    editLocalStorageBooks();
    
    var newCard = new Card();
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].cardId < bookIdCounter) {
            newCard.cardId = cardIdCounter;
            return window.localStorage.setItem("bookIdCounter", (Number(bookIdCounter) + 1));
        }
    }
    newCard.visitorName = selVis;
    newCard.bookName = selBook;
    newCard.borrowDate = formatDate(new Date);
    newCard.returnDate = "";
   

    cards.push(newCard);
    tbody.innerHTML = "";
    setTable(cards);
    editLocalStorage();
    return cardIdCounter;
}


    

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('.');
}
function returnBook(btn) {
    var tr = btn.parentNode.parentNode;
    var bookNameTable = tr.cells[2].innerText;
    var cardIdTable = tr.cells[0].innerText;
    
    for (let i = 0; i < books.length; i++){
        if (books[i].bookName == bookNameTable) {
            books[i].copyOfBook++;
            
        }
    }
    editLocalStorageBooks();

    for (let i = 0; i < cards.length; i++){
        if (cards[i].cardId == cardIdTable) {
            cards[i].returnDate=formatDate(new Date);
            
        }
    }
    editLocalStorage();
    location.reload();
}