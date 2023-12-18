function generateIDCard() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const idNumber = document.getElementById('idNumberInput').value;
    const phoneNumber = document.getElementById('phoneInput').value;
    const course = document.getElementById('courseInput').value;
    const activities = document.getElementById('activitiesInput').checked ? 'Active' : 'Inactive';
    const age = document.getElementById('ageInput').value;

    document.getElementById('name').innerText = name;
    document.getElementById('email').innerText = `Email: ${email}`;
    document.getElementById('idNumber').innerText = `ID Number: ${idNumber}`;
    document.getElementById('phoneNumber').innerText = `Phone Number: ${phoneNumber}`;
    document.getElementById('course').innerText = `Course: ${course}`;
    document.getElementById('activities').innerText = `Activities: ${activities}`;
    document.getElementById('age').innerText = `Age: ${age}`;
}
