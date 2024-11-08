const library = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary(book) {
  library.push(book);
}

addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", true));
displayBooks();

function displayBooks() {
  const books = document.querySelector("#books");
  books.innerHTML = (library.length == 0) ? "Add a book to the library!" : "";

  library.forEach((book, index) => {
    const table = document.createElement("table");
    const tableHead = document.createElement("thead");
    tableHead.innerHTML = `
      <th>Title</th>
      <th>Author</th>
      <th>Read</th>
    `

    const tableBody = document.createElement("tbody")
    const row = document.createElement("tr");

    const title = document.createElement("td");
    title.textContent = book.title;
    row.appendChild(title);
    const author = document.createElement("td");
    author.textContent = book.author;
    row.appendChild(author);
    const read = document.createElement("td");
    read.textContent = book.read ? "Yes" : "No";
    row.appendChild(read);

    const remove = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeBook(index);
    remove.appendChild(removeButton);
    row.appendChild(remove);

    const markRead = document.createElement("td");
    const markReadButton = document.createElement("button");
  markRead.innerHTML = `<button type="button" onclick="markRead(${index})">Mark Read</button>`;
    row.appendChild(markRead);

    tableBody.appendChild(row);
    books.appendChild(tableHead);
    books.appendChild(tableBody);
  });
}

function displayBookForm() {
  const form = document.getElementById("bookForm");
  form.innerHTML = ''; // Clear existing content

  const titleLabel = document.createElement("label");
  titleLabel.htmlFor = "title";
  titleLabel.textContent = "Title:";
  form.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  form.appendChild(titleInput);

  form.appendChild(document.createElement("br"));

  const authorLabel = document.createElement("label");
  authorLabel.htmlFor = "author";
  authorLabel.textContent = "Author:";
  form.appendChild(authorLabel);

  const authorInput = document.createElement("input");
  authorInput.type = "text";
  authorInput.id = "author";
  authorInput.name = "author";
  form.appendChild(authorInput);

  form.appendChild(document.createElement("br"));

  const readLabel = document.createElement("label");
  readLabel.htmlFor = "read";
  readLabel.textContent = "Read:";
  form.appendChild(readLabel);

  const readInput = document.createElement("input");
  readInput.type = "checkbox";
  readInput.id = "read";
  readInput.name = "read";
  form.appendChild(readInput);

  form.appendChild(document.createElement("br"));

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.textContent = "Submit";
  submitButton.onclick = submitBookForm;
  form.appendChild(submitButton);
}

function submitBookForm() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(new Book(title, author, read));
  const form = document.getElementById("bookForm");
  form.innerHTML = "";
  displayBooks();
}

function removeBook(index) {
  library.splice(index, 1);
  displayBooks();
}

function markRead(index) {
  library[index].read = true;
  displayBooks();
}

function updateBookList(books) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ''; // Clear existing content

  books.forEach((book, index) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const readCell = document.createElement("td");
    readCell.textContent = book.read ? "Yes" : "No";
    row.appendChild(readCell);

    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeBook(index);
    removeCell.appendChild(removeButton);
    row.appendChild(removeCell);

    const markReadCell = document.createElement("td");
    const markReadButton = document.createElement("button");
    markReadButton.type = "button";
    markReadButton.textContent = "Mark Read";
    markReadButton.onclick = () => markRead(index);
    markReadCell.appendChild(markReadButton);
    row.appendChild(markReadCell);

    tableBody.appendChild(row);
  });
}
