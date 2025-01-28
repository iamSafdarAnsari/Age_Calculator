// CodeAlpha_Age_Calculator.js
document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    if (isNaN(dob)) {
        document.getElementById('result').innerHTML = '<p>Please enter a valid date.</p>';
        return;
    }

    const today = new Date();

    // Calculate age in years
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Calculate total days lived
    const timeDifference = today - dob;
    const totalDaysLived = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Calculate days until next birthday
    let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    document.getElementById('result').innerHTML = `
        <p>Your age is <strong>${age}</strong> years and <strong>${totalDaysLived % 365}</strong> days.</p>
        <p>Days remaining until your next birthday: <strong>${daysUntilNextBirthday}</strong> days.</p>
    `;
});
