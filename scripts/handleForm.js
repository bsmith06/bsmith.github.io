document.getElementById('submitBtn').addEventListener('click', function() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const adress = document.getElementById('adress').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const sip_code = document.getElementById('sip code').value;

    if (fname && lname && email && adress && city && state && sip_code){
        document.getElementById('cart').style.display = 'none';

        const confirmationPage = document.getElementById('confirmationPage')
        confirmationPage.innerHTML = `
        <ul id="conf">
            <li><strong>Name:</strong> ${fname}</li>
            <li><strong>Name:</strong> ${lname}</li>
            <li><strong>Name:</strong> ${email}</li>
            <li><strong>Name:</strong> ${adress}</li>
            <li><strong>Name:</strong> ${city}</li>
            <li><strong>Name:</strong> ${state}</li>
            <li><strong>Name:</strong> ${sip_code}</li>
        </ul>
        `;
        document.getElementById('confirmationPage').style.display = 'block';
    } else {
        alert('Please fill out all fields');
    }
});

