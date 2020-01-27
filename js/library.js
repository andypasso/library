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
 this.title = document.getElementById("booktitle").value;
  this.author = document.getElementById("author").value;
  this.numPages = document.getElementById("pages").value;
  this.read = false;
}

function addBookToLibrary() {


  let newBook = new Book(title, author, numPages);
  myLibrary.push(newBook);
  //console.log(myLibrary);
}

/*Book.prototype = {
  constructor: Book,
  updateRead () {
    if (this.readAlready === 'been reading'){
      this.readAlready = 'not been reading';
    } else {
      this.readAlready = 'been reading';
    }
  },
};

  /*let updateRead = document.createElement("Already read?");
  if updateRead () {
    cell4.innerHTML = "already read that book";
  }
  else {
  cell4.innerHTML = "book not read yet";
  }
}*/

function render() {
  const books = document.getElementById("books");
  books.innerHTML = "";

  for (let i = myLibrary.length - 1; i >= 0; i--) {
    let row = books.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = myLibrary[i].title;
    cell2.innerHTML = myLibrary[i].author;
    cell3.innerHTML = myLibrary[i].numPages; 
    //let updateRead = document.getElementById("myBtn");
    cell4.innerHTML = myLibrary[i].read;
  }
}

render();

/*if (myLibrary.read) {
cell4.innerHTML = "already read that book"
}
else{
cell4.innerHTML = "book not read yet"}*/