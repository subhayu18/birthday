// This code assumes you're using localStorage to save the birthday entries
document.addEventListener("DOMContentLoaded", function() {
    // Add Birthday
    const form = document.getElementById("birthday-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const dob = document.getElementById("dob").value;
        const relation = document.getElementById("relation").value;

        const birthday = {
            name: name,
            dob: dob,
            relation: relation
        };

        let birthdays = JSON.parse(localStorage.getItem("birthdays")) || [];
        birthdays.push(birthday);
        localStorage.setItem("birthdays", JSON.stringify(birthdays));

        alert("Birthday added successfully!");

        // Reset form
        form.reset();
    });

    // Display Birthdays
    const birthdayListDiv = document.getElementById("birthday-list");
    const birthdays = JSON.parse(localStorage.getItem("birthdays")) || [];
    
    if (birthdays.length === 0) {
        birthdayListDiv.innerHTML = "<p>No birthdays added yet!</p>";
    } else {
        let listHTML = "<ul>";
        birthdays.forEach(birthday => {
            listHTML += `<li>${birthday.name} (${birthday.relation}) - ${birthday.dob}</li>`;
        });
        listHTML += "</ul>";
        birthdayListDiv.innerHTML = listHTML;
    }
});
