
let myLibrary = [];

function Book(title,author,numPages) {
    this.title = title
    this.author = author
    this.numPages = numPages
}

function addBookToLibrary() {
  let title= document.getElementById ("booktitle").value; 
  let author= document.getElementById ("author").value;
  let numPages= document.getElementById ("pages").value;

  let newBook = new Book (title,author,numPages)
  myLibrary.push(newBook);
  //console.log(myLibrary);
}

function render() {
  document.write(myLibrary);
}