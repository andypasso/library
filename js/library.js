let myLibrary = [];

function Book(title,author,numPages) {
    this.title = title
    this.author = author
    this.numPages = numPages
  // the constructor...
}

function addBookToLibrary(book) {
  myLibrary.push(book)
    // do stuff here
}