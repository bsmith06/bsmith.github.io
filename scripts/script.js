import { booklibrary } from "./books.js";
const books = booklibrary;

async function fetchBooks() {
    try {
        const response = await fetch('./books.js');
        const data = await response.json();
        return data.books;
    } catch (error) {
        console.error('Error fetching the books:', error);
    }
}

async function populateTable() {
    const tableBody = document.querySelector('#bookTable tbody');
    const books = await fetchBooks();
    
    if (books) {
        books.forEach(book => {
            const row = document.createElement('tr');
            
            const nameCell = document.createElement('td');
            nameCell.textContent = book.name;
            row.appendChild(nameCell);
            
            const authorCell = document.createElement('td');
            authorCell.textContent = book.author;
            row.appendChild(authorCell);
            
            const isbnCell = document.createElement('td');
            isbnCell.textContent = book.isbn;
            row.appendChild(isbnCell);
            
            const descriptionCell = document.createElement('td');
            descriptionCell.textContent = book.description;
            row.appendChild(descriptionCell);
            
            tableBody.appendChild(row);
        });
    }
}

populateTable();

books.forEach((booklibrary) => {
    const bookSelect = document.getElementById('bookSelect');
    const bookSelect2 = document.getElementById('bookSelect2');

    const option1 = document.createElement('option');
    option1.value = booklibrary.isbn;
    option1.textContent = booklibrary.name;
    bookSelect.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = booklibrary.isbn;
    option2.textContent = booklibrary.name;
    bookSelect2.appendChild(option2);
});

