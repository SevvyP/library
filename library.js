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
  books.innerHTML = "";

  library.forEach((book, index) => {
    const table = document.createElement("table");
    table.appendChild(document.createElement("thead"));
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
    remove.innerHTML = `<button type="button" onclick="removeBook(${index})">Remove</button>`;
    row.appendChild(remove);

    const markRead = document.createElement("td");
    markRead.innerHTML = `<button type="button" onclick="markRead(${index})">Mark Read</button>`;
    row.appendChild(markRead);
    tableBody.appendChild(row);
  });
}

function displayBookForm() {
  const form = document.getElementById("bookForm");
  form.innerHTML = `
      <label for="title">Title:</label>
      <input type="text" id="title" name="title"><br>
      <label for="author">Author:</label>
      <input type="text" id="author" name="author"><br>
      <label for="read">Read:</label>
      <input type="checkbox" id="read" name="read"><br>
      <button type="button" onclick="submitBookForm()">Submit</button>
    `;
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
