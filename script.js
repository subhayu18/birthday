// Function to save birthday to localStorage
function saveBirthday() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;

    if (!name || !dob) {
        alert("Please provide both a name and a date of birth.");
        return;
    }

    let birthdays = JSON.parse(localStorage.getItem("birthdays")) || [];

    birthdays.push({ name, dob });

    localStorage.setItem("birthdays", JSON.stringify(birthdays));

    alert("Birthday added successfully!");
    window.location.href = "view.html";  // Redirect to the view page
}

// Function to display birthdays from localStorage
function showBirthdays() {
    const birthdays = JSON.parse(localStorage.getItem("birthdays")) || [];
    const birthdayList = document.getElementById("birthdayList");

    if (birthdays.length === 0) {
        birthdayList.innerHTML = "No birthdays found.";
    } else {
        birthdayList.innerHTML = birthdays.map(birthday => {
            const date = new Date(birthday.dob);
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            return `<li>${birthday.name} - ${formattedDate}</li>`;
        }).join("");
    }
}
