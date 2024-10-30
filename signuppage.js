const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // Here, you can add your server-side code or API call to handle the sign-up process
    console.log('Signing up with:', { username, email, password });
    errorMessage.textContent = '';
    alert('Sign up Successful!');
    window.location.href = 'main.html'
    form.reset();
});
