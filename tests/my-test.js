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

