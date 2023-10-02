document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const tableBody = document.querySelector("#Table tbody");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const pincode = document.getElementById('Pincode').value;
        const address = document.getElementById('Address').value;
        const state = document.getElementById('State').value;
        const country = document.getElementById('Country').value;

        const gender = document.querySelector('input[name="gender"]:checked').value;
        const selected = document.querySelectorAll('input[name="foods"]:checked');

    if (selected.length < 2) {
        event.preventDefault(); 
        alert("Only 2 options allowed");
        return;
    }
    const food = Array.from(selected).map(radio => radio.value).join(', ');
        
        let newROw = document.createElement('tr');
        newROw.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${gender}</td>
        <td>${pincode}</td>
        <td>${address}</td>
        <td>${state}</td>
        <td>${country}</td>
        <td>${food}</td>
        `;

        tableBody.appendChild(newROw);

        form.reset();
    });
});
