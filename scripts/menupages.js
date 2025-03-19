/* ############## COLOR CHANGED W ANIMATION */

function randomColor() {
    if ( document.URL.includes('leaderboard') ) {
        var colors = ['#FFAC1C', '#E3963E', '#CC5500', '#E49B0F'];
    } else if ( document.URL.includes('rules') ) {
        var colors = ['#880808', '#D22B2B', '#D70040', '#DC143C', '#DC143C'];
    } else {
        var colors = ['#9F2B68', '#BF40BF', '#702963', '#CF9FFF'];
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

let container2 = document.querySelector('.container2');
for (let i = 1; i <= 15; i++) {
    let dot = document.createElement('div');
    dot.classList.add('element');
    container2.appendChild(dot);
}

let dotAll = document.querySelectorAll('.element');
let animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutQuad',
    loop: true,
    delay: anime.stagger(100, { grid: [15, 15], from: 'center' })
})
animation
    .add({
        translateY: anime.stagger(-20, { grid: [15, 15], from: 'center', axis: 'y' }),
    })
    .add({
        translateY: anime.stagger(20, { grid: [15, 15], from: 'center', axis: 'y' }),
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
        borderRadius: 50
    })
    .add({
        translateX: anime.stagger(-53, { grid: [5, 5], from: 'center', axis: 'x' }),
    })
    .add({
        scale: 0.2
    })
    .add({
        translateX: anime.stagger(50, { grid: [15, 15], from: 'center', axis: 'x' }),
        borderRadius: 0
    })
    .add({
        scale: 1,
        rotateZ: 360,
        translateX: anime.stagger(0, { grid: [15, 15], from: 'center', axis: 'x' }),
        translateY: anime.stagger(0, { grid: [15, 15], from: 'center', axis: 'y' })
    })
