let myLibrary = JSON.parse(window.localStorage.getItem('libraryStorage'));
if (!myLibrary) myLibrary = [];

function Book(title, author, numPages) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = false;
}

function addBookToLibrary() {
  const title = document.getElementById('booktitle').value;
  const author = document.getElementById('author').value;
  const numPages = document.getElementById('pages').value;
  const newBook = new Book(title, author, numPages);

  if (title === '' || author === '' || numPages <= 0 || numPages === '') {
    showError();
    return;
  }

  myLibrary.push(newBook);
  updateLocalStorage(myLibrary);
  render();
}

function renderBook(books, i, myLibrary) {
  const row = books.insertRow(0);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  cell1.innerHTML = myLibrary[i].title;
  cell2.innerHTML = myLibrary[i].author;
  cell3.innerHTML = myLibrary[i].numPages;
  cell4.innerHTML = `<button class='readButton' data-index= ${i}>Unread</button>`;
  cell5.innerHTML = `<button class='deleteButton' data-index= ${i}>Delete</button>`;
}

function render() {
  const books = document.getElementById('books');
  books.innerHTML = '';
  for (let i = myLibrary.length - 1; i >= 0; i -= 1) {
    renderBook(books, i, myLibrary);
  }
  const buttons = document.querySelectorAll('.readButton');
  buttons.forEach(buttonElement => buttonElement.addEventListener('click', updateReadStatus));
  const deletebuttons = document.querySelectorAll('.deleteButton');
  deletebuttons.forEach(deleteElement => deleteElement.addEventListener('click', deleteBook));
}

render();

const addNewBook = document.getElementById('newBookButton');
addNewBook.addEventListener('click', addBookToLibrary);

function updateReadStatus(event) {
  const button = event.target;
  const index = button.getAttribute('data-index');

  myLibrary[index].read = !myLibrary[index].read;
  if (myLibrary[index].read) {
    button.innerHTML = 'Already Read';
  } else {
    button.innerHTML = 'Unread';
  }
  updateLocalStorage(myLibrary);
}

function deleteBook(deletebook) {
  const button = deletebook.target;
  const index = button.getAttribute('data-index');
  alert('Are you sure you want to delete this book?');
  myLibrary.splice(index, 1);
  updateLocalStorage(myLibrary);
  render();
}

function validateForm() {
  const x = document.forms.formSection.title.value;
  if (x === '') {
    alert('Name must be filled out');
    return false;
  }
  const y = document.forms.formSection.author.value;
  if (y === '') {
    alert('author must be filled out');
    return false;
  }
}

function updateLocalStorage(array) {
  window.localStorage.setItem('libraryStorage', JSON.stringify(array));
}
