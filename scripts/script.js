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
    const tableBody = document.querySelector('#bookTable');
    
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
populateTable()




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
function showConfirmation() {
    const name = document.getElementById('name').value; 
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const adress = document.getElementById('adress').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const sip_code = document.getElementById('sip code').value;

    if (name && fname && lname && email && adress && city && state && sip_code){
        document.getElementById('cart').style.display = 'none';

        const cart = document.getElementById('cart')
        cart.innerHTML = `
        <liv><strong>Name:</strong> ${name}</liv>
        <liv><strong>Name:</strong> ${fname}</liv>
        <liv><strong>Name:</strong> ${lname}</liv>
        <liv><strong>Name:</strong> ${email}</liv>
        <liv><strong>Name:</strong> ${adress}</liv>
        <liv><strong>Name:</strong> ${city}</liv>
        <liv><strong>Name:</strong> ${state}</liv>
        <liv><strong>Name:</strong> ${sip_code}</liv>
        `;
        document.getElementById('cart').style.display = 'block';
    }
}

showConfirmation() 