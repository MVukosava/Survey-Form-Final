
document.getElementById('survey-form').addEventListener('submit', (event) => {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;


    console.log(name);
    console.log(email);
    console.log(age);
});

let minLength = 3;
let name = document.getElementById('name');

if (name) {
    name.addEventListener('input', function () {
        setTimeout(function () {
            if (name.value !== '' && name.value.length >= minLength) {
                console.log('Validation is passed');
            } else {
                console.log('Please enter the valid name');
            }
        }, 100);
    });
}