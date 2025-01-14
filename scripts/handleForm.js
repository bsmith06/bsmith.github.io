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
            <li><strong>First Name:</strong> ${fname}</li>
            <li><strong>Last Name:</strong> ${lname}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Adress:</strong> ${adress}</li>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>State:</strong> ${state}</li>
            <li><strong>Zip_Code:</strong> ${sip_code}</li>
        </ul>
        `;
        document.getElementById('confirmationPage').style.display = 'block';
    } else {
        alert('Please fill out all fields');
    }
});