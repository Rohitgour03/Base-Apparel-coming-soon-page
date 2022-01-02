// Regular expression to validate the email address.
// const validateEmail = (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };

// const email = document.querySelector('#email');
// const form = document.querySelector('#email-form')
// const submit = form.querySelector('#submit-btn');

// const validate = (e) => {
//     e.preventDefault();
//     const result = document.createElement('span');
//     const value = email.value;

//     console.log(result);

//     if (validateEmail(value)) {
//         result.classList.add('error-msg');
//         result.textContent = 'your email is valid';
//         result.style.color = 'green';

//     } else {
//         result.classList.add('error-msg');
//         result.textContent = `Please provide a valid email`;
//         result.style.color = 'red';
//     }
//     form.append(result);
//     return true;
// }

// email.addEventListener('focus', validate);
// email.addEventListener('keydown', validate);