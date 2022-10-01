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

var cardIdCounter = 3;

//масив карток
var cardsStart = [card1, card2];
var cards;
if (window.localStorage.getItem("cards") == null) {
    window.localStorage.setItem("cards", JSON.stringify(cardsStart));
    cards = JSON.parse(window.localStorage.getItem("cards"));
    console.log(cards);
}
if (window.localStorage.getItem("cards") !== null) {
  
    cards = JSON.parse(window.localStorage.getItem("cards"));
    console.log(cards);
}

function editLocalStorage() {
    window.localStorage.removeItem("cards");
    window.localStorage.setItem("cards", JSON.stringify(cards));
    cards = JSON.parse(window.localStorage.getItem("cards"));
    console.log(cards);
}
editLocalStorage();

function editLocalStorageBooks() {
    window.localStorage.removeItem("books");
    window.localStorage.setItem("books", JSON.stringify(books));
    books = JSON.parse(window.localStorage.getItem("books"));
    console.log(books);
}

var tbody = document.querySelector("tbody");

//відображення таблиці книг
function setTable(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].returnDate == "") {
            tbody.innerHTML += "<tr><td>" + arr[i].cardId + "</td><td>" + arr[i].visitorName + "</td><td>" + arr[i].bookName + "</td><td>" + arr[i].borrowDate + "</td><td><button onclick=returnBook()>Return</button></td></tr>";
    
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
        .sort((rowA, rowB) => rowA.cells[3].innerHTML > rowB.cells[3].innerHTML ? 1 : -1);
            break;
        
        case "Return Date": sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[4].innerHTML > rowB.cells[4].innerHTML ? 1 : -1);
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

//modal window

       
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

$modal = function (options) {
    var
        _elemModal,
        _eventShowModal,
        _eventHideModal,
        _hiding = false,
        _destroyed = false,
        _animationSpeed = 200;

    function _createModal(options) {
        var
            elemModal = document.createElement('div'),
            modalTemplate = '<div class="modal__backdrop" data-dismiss="modal"><div class="modal__content"><div class="modal__header"><div class="modal__title" data-modal="title">{{title}}</div><span class="modal__btn-close" data-dismiss="modal" title="Close">×</span></div><div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div></div>',
            modalFooterTemplate = '<div class="modal__footer">{{buttons}}</div>',
            //modalButtonTemplate = '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
            modalHTML,
            modalFooterHTML = '';

        elemModal.classList.add('modal');
        modalHTML = modalTemplate.replace('{{title}}', "New card");
        modalHTML = modalHTML.replace('{{content}}', '<form id="selectVisitor"><label for="visitorList">Visitor:</label><select name="visitorList" id="visitorList" size="5"></select></form><form id="selectBook"><label for="bookList">Book:</label><select name="bookList" id="bookList" size="5"></select></form>');
     
        modalFooterHTML = modalFooterTemplate.replace('{{buttons}}', '<button data-dismiss="modal" onclick="saveCard()">Save</button>');
        
        modalHTML = modalHTML.replace('{{footer}}', modalFooterHTML);
        elemModal.innerHTML = modalHTML;
        document.body.appendChild(elemModal);
        return elemModal;
    }

    function _showModal() {
        if (!_destroyed && !_hiding) {
            _elemModal.classList.add('modal__show');
            document.dispatchEvent(_eventShowModal);
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

    function _hideModal() {
        _hiding = true;
        _elemModal.classList.remove('modal__show');
        _elemModal.classList.add('modal__hiding');
        setTimeout(function () {
            _elemModal.classList.remove('modal__hiding');
            _hiding = false;
        }, _animationSpeed);
        document.dispatchEvent(_eventHideModal);
    }

    function _handlerCloseModal(e) {
        if (e.target.dataset.dismiss === 'modal') {
            _hideModal();
        }
    }

    _elemModal = _createModal(options || {});


    _elemModal.addEventListener('click', _handlerCloseModal);
    _eventShowModal = new CustomEvent('show.modal', { detail: _elemModal });
    _eventHideModal = new CustomEvent('hide.modal', { detail: _elemModal });

    return {
        show: _showModal,
        hide: _hideModal,
        destroy: function () {
            _elemModal.parentElement.removeChild(_elemModal),
                _elemModal.removeEventListener('click', _handlerCloseModal),
                _destroyed = true;
        },
        setContent: function (html) {
            _elemModal.querySelector('[data-modal="content"]').innerHTML = html;
        },
        setTitle: function (text) {
            _elemModal.querySelector('[data-modal="title"]').innerHTML = text;
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
            console.log(books[i]);
        }
    }
    
    editLocalStorageBooks();

   
    var counter = makeCounter();
   
    let c = counter();
    console.log(c);
    var newCard = new Card();
    newCard.cardId = c;
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

function makeCounter() {
        return function() {
            return cardIdCounter++;
        };
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

    return [day, month, year].join('.');
}
function returnBook() {
    
}