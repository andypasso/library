let myLibrary = [
  {
    title: "book 1",
    author: "author 1",
    numPages: "100"
  },
  {
    title: "book 2",
    author: "author 2",
    numPages: "200"
  }
];

function Book(title, author, numPages) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
}

function addBookToLibrary() {
  let title = document.getElementById("booktitle").value;
  let author = document.getElementById("author").value;
  let numPages = document.getElementById("pages").value;

  let newBook = new Book(title, author, numPages);
  myLibrary.push(newBook);
  //console.log(myLibrary);
}

function render() {
  const books = document.getElementById("books");
  books.innerHTML = "";

  for (let i = myLibrary.length - 1; i >= 0; i--) {
    let row = books.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = myLibrary[i].title;
    cell2.innerHTML = myLibrary[i].author;
    cell3.innerHTML = myLibrary[i].numPages;
  }
}

render();

