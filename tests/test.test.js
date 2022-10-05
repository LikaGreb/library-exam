
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

