

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    if (!form || !message) {
        console.error("Form or message element not found.");
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = form.username.value;
        const password = form.password.value;

        if (!username || !password) {
            message.textContent = 'Please enter both username and password.';
            message.style.color = 'red';
            return;
        }

        // Check username and password (replace with your authentication logic)
        if (username === 'amutha' && password === '1234') {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
            window.location.href = 'main.html';
            
        } else {
            message.textContent = 'Invalid username or password.';
            message.style.color = 'red';
        }
    });
});

