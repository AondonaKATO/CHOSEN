let users = [];
let selectedUser = null;

document.getElementById('register-btn').addEventListener('click', registerUser);
document.getElementById('randomize-btn').addEventListener('click', randomizeUser);

function registerUser() {
    const usernameInput = document.getElementById('username-input');
    const imageInput = document.getElementById('image-input');
    const username = usernameInput.value.trim();
    const imageFile = imageInput.files[0];

    if (username && imageFile) {
        const reader = new FileReader();
        reader.onload = function (event) {
            users.push({ name: username, image: event.target.result });
            usernameInput.value = '';
            imageInput.value = '';
            updateUserCount();
            displayUsers();
        };
        reader.readAsDataURL(imageFile);
    } else {
        alert('Please enter a username and upload an image!');
    }
}

function updateUserCount() {
    document.getElementById('count').innerText = users.length;
}

function displayUsers() {
    const userCards = document.getElementById('user-cards');
    userCards.innerHTML = '';

    users.forEach((user, index) => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
            <img src="${user.image}" alt="${user.name}">
            <p>${index + 1}. ${user.name}</p>
        `;
        userCards.appendChild(card);
    });
}

function randomizeUser() {
    if (users.length > 0) {
        selectedUser = users[Math.floor(Math.random() * users.length)];
        document.getElementById('selected-user').innerText = `Selected User: ${selectedUser.name}`;
    } else {
        alert('No users registered!');
    }
}

/*
function randomizeUser() {
    if (users.length > 0) {
        selectedUser = users[Math.floor(Math.random() * users.length)];
document.getElementById('selected-user').innerHTML = `
    <div class="selected-user-card">
        <img src="${selectedUser.image}" alt="${selectedUser.name}" class="selected-user-image">
        <p class="selected-user-name">${selectedUser.name}</p>
    </div>
`;

    } else {
        alert('No users registered!');
    }
} */

    function randomizeUser() {
        if (users.length > 0) {
            selectedUser = users[Math.floor(Math.random() * users.length)];
            document.getElementById('selected-user').innerHTML = `
                <div class="selected-user-card">
                    <img src="${selectedUser.image}" alt="${selectedUser.name}" class="img-fluid">
                    <p>${selectedUser.name}</p>
                </div>
            `;
        } else {
            alert('No users registered!');
        }
    }
    