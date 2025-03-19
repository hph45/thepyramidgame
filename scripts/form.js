/* FORM VALIDATION ####### */

const username = document.querySelector('.username') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.login-btn');

if (username == null) { //means login page is open
    loginBtn.addEventListener('click', () => {
        fetch('/login-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })
} else { //means register page is open

    loginBtn.addEventListener('click', () => {
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                username: username.value,
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateDataRegister(data);
        })
    })
}

const validateData = (data) => {
    if (!data.username) {
        alertBox(data);
    } else {
        sessionStorage.database = Object.keys(data);
        sessionStorage.username = data.username;
        sessionStorage.email = data.email;
        location.href = '/home'
    }
}

const validateDataRegister = (data) => {
    if (!data.username) {
        alertBox(data);
    } else {
        sessionStorage.username = data.username;
        sessionStorage.email = data.email;
        location.href = '/login' //this might need to be changed to /payhere or osomething
    }
}

const alertBox = (data) => {
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');
    alertMsg.innerHTML = data;

    alertContainer.style.top = '5%';
    setTimeout(() => {
        alertContainer.style.top = null;
    }, 5000);
}

/* ############## COLOR CHANGED W ANIMATION */

function randomColor() {
    if ( document.URL.includes('login') ) {
        var colors = ['#89CFF0', '#0047AB', '#005d8e', '#1434A4'];
    } else {
        var colors = ['#097969', '#50C878', '#4F7942', '#355E3B'];
    }
    const randIndex = Math.floor(Math.random() * colors.length);
    return (colors[randIndex]);
}

const interval = setInterval(function () {
    let dots = document.querySelectorAll('.element');
    dots.forEach(function (eachDot) {
        eachDot.style.backgroundColor = randomColor();
    });
}, 2000);

setInterval(interval);

/* LOGIN AND SIGNUP PAGE BACKGROUND ANIMATION ################### */

let container = document.querySelector('.container');
for (let i = 1; i <= 10; i++) {
    let dot = document.createElement('div');
    dot.classList.add('element');
    container.appendChild(dot);
}

let dotAll = document.querySelectorAll('.element');
let animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutQuad',
    loop: true,
    delay: anime.stagger(100, { grid: [10, 10], from: 'center' })
})
animation
    .add({
        translateY: anime.stagger(-20, { grid: [1, 10], from: 'center', axis: 'y' }),
    })
    .add({
        translateY: anime.stagger(20, { grid: [1, 10], from: 'center', axis: 'y' }),
        delay: function (el, i, l) {
            return i * 250;
        }
    })
    .add({
        translateY: -70,
        delay: function (el, i, l) {
            return i * 100;
        }
    })
    .add({
        height: '100px',
        delay: function (el, i, l) {
            return (l - i) * 100;
        }
    })
    .add({
        height: '40px',
        translateY: 0,
        delay: function (el, i, l) {
            return i * 100;
        }
    })
    .add({
        borderRadius: 50
    })
    .add({
        translateX: anime.stagger(-53, { grid: [10, 10], from: 'center', axis: 'x' }),
    })
    .add({
        scale: 0.2
    })
    .add({
        translateX: anime.stagger(50, { grid: [10, 10], from: 'center', axis: 'x' }),
        borderRadius: 0
    })
    .add({
        scale: 1,
        rotateZ: 360,
        translateX: anime.stagger(0, { grid: [10, 10], from: 'center', axis: 'x' }),
    })
