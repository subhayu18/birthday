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

        // Get existing birthdays from localStorage or initialize as empty array
        let birthdays = JSON.parse(localStorage.getItem("birthdays")) || [];
        
        // Push new birthday to the list
        birthdays.push(birthday);

        // Save updated list back to localStorage
        localStorage.setItem("birthdays", JSON.stringify(birthdays));

        // Debugging: Check what's stored in localStorage
        console.log("Birthday added:", birthday);
        console.log("All Birthdays in localStorage:", birthdays);

        alert("Birthday added successfully!");

        // Reset form
        form.reset();
    });

    // Display Birthdays
    const birthdayListDiv = document.getElementById("birthday-list");
    const birthdays = JSON.parse(localStorage.getItem("birthdays")) || [];
    
    // Debugging: Check the retrieved list of birthdays
    console.log("Retrieved Birthdays:", birthdays);
    
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
