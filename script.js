// Load birthdays from LocalStorage
let birthdays = JSON.parse(localStorage.getItem('birthdays')) || [];

// Handle the form submission on the "Add Birthday" page
document.getElementById('addForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const dob = new Date(document.getElementById('dob').value);
    const month = document.getElementById('month').value;

    // Add the new birthday to the array
    birthdays.push({ name, dob, month });

    // Save the updated list to LocalStorage
    localStorage.setItem('birthdays', JSON.stringify(birthdays));

    alert('Birthday added successfully!');
});

// Display birthdays for the selected month
function showBirthdays(month) {
    const filteredBirthdays = birthdays.filter(b => b.month == month);
    filteredBirthdays.sort((a, b) => a.dob - b.dob); // Sort by date

    let listHTML = '<ul>';
    filteredBirthdays.forEach(birthday => {
        listHTML += `<li>${birthday.name} - ${birthday.dob.toLocaleDateString()}</li>`;
    });
    listHTML += '</ul>';

    document.getElementById('birthdaysList').innerHTML = listHTML;
}
