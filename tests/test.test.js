
   /**
    * @jest-environment jsdom
    */


const  Book = require("./my-test");

describe("Test of Book", function () {
    const book = new Book();
    it("Should  create a book", function () {
       
        expect(typeof book.setBook).toBe("function");
    });
});

/*const openModal = require("./my-test");

describe("test openModal", function () {
    it("click", function () {
        var modal = document.getElementById('myModal');
        
        expect(modal.style.display).toBe("block");
    })
})*/
const setTable = require('./my-test');
describe("Test of Book", function () {
    const a = setTable(arr);
    const arr=[{
    "bookId": 1,
    "bookName": "JS part 1",
    "author": "Allen Fox",
    "pageQuant": 523,
    "publisher": "NYPablisher",
    "publishYear": 2000,
    "copyOfBook": 2
    },
    {
    "bookId": 2,
    "bookName": "Full Stack Recruiter: The Ultimate Edition",
    "author": "Jan Tegze",
    "pageQuant": 762,
    "publisher": "Jan Tegze",
    "publishYear": 2010,
    "copyOfBook": 1
}];

    it("Should  create a booklist", function () {
       
        expect(setTable(arr)).toBe('<tr><td>1</td><td>"JS part 1"</td><td>"Allen Fox"</td><td>523</td><td>"NYPablisher"</td><td>2000</td><td>2</td><td><button class="editBtn" onclick="editButton(this)">Edit</button></td><td><button class="deleteBtn" onclick="deleteButton(this)">Delete</button></td></tr><tr><td>2</td><td>"Full Stack Recruiter: The Ultimate Edition"</td><td>"Jan Tegze"</td><td>762</td><td>"Jan Tegze"</td><td>2010</td><td>1</td><td><button class="editBtn" onclick="editButton(this)">Edit</button></td><td><button class="deleteBtn" onclick="deleteButton(this)">Delete</button></td></tr>');
    });
});