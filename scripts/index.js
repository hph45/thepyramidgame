/* ############## COLOR CHANGED W ANIMATION */

function randomColor() {
    const colors = ['#FFD700', '#1E1E1E', '#000000', '#bababa'];
    const randIndex = Math.floor(Math.random() * colors.length);
    return(colors[randIndex]);
}

const interval = setInterval(function() {
    let dots = document.querySelectorAll('.element');
    dots.forEach(function(eachDot) {
        eachDot.style.backgroundColor = randomColor();
    });
  }, 5000);
 
setInterval(interval);

/* MENU BAR (((((((((((()))))))))))) */

if (window.innerWidth > 400) {
    console.log('1') // find a way to call method whenever window is resized as well
    //then change the way the x works for the takeover risk
}

/* ############## HOME PAGE ANIMATION */

let container = document.querySelector('.container');
for (let i = 1; i <= 100; i++) {
    let dot = document.createElement('div');
    dot.classList.add('element');
    container.appendChild(dot);
}

let dotAll = document.querySelectorAll('.element');
let animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutQuad',
    loop: true,
    delay: anime.stagger(100, {grid: [10, 10], from: 'center'})
})
animation
.add ({
    rotateZ: 180,
    translateY: anime.stagger(-20, {grid: [10, 10], from: 'center', axis: 'y'}),
    translateX: anime.stagger(-20, {grid: [10, 10], from: 'center', axis: 'x'}),
})
.add ({
    borderRadius: 50
})
.add ({
    scale: 0.2,
})
animation
.add ({
    rotateZ: 180,
    translateY: anime.stagger(0, {grid: [10, 10], from: 'center', axis: 'y'}),
    translateX: anime.stagger(0, {grid: [10, 10], from: 'center', axis: 'x'}),
})
.add ({
    scale: 1,
    borderRadius: 0
})
.add ({
    scale: 1,
    rotateZ: 90,
    translateY: anime.stagger(0, {grid: [10, 10], from: 'center', axis: 'y'}),
    translateX: anime.stagger(0, {grid: [10, 10], from: 'center', axis: 'x'}),
})
.add ({
    translateX: anime.stagger(50, {grid: [10, 10], from: 'center', axis: 'x'}),
    translateY: anime.stagger(50, {grid: [10, 10], from: 'center', axis: 'y'}),
    /*delay: anime.stagger(200, {grid: [10, 10], from: 'center'})*/
})
.add ({
    scale: 1,
    translateY: anime.stagger(0, {grid: [10, 10], from: 'center', axis: 'y'}),
    translateX: anime.stagger(0, {grid: [10, 10], from: 'center', axis: 'x'}),
})
