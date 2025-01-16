import { booklibrary } from "./books.js";

async function fetchBooks() {
    try {
        return booklibrary;
    } catch (error) {
        console.error('Error fetching the books:', error);
    }
}

async function populateTable() {
    const tableBody = document.querySelector('#bookTable tbody');
    if (!tableBody) {
        console.error('Table body not found');
        return;
    }
    
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