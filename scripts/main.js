/* ########### SERVERS */
var logEl = document.querySelector('.server-performance');

var battery = {
  'Server Performance': '0%',
}

anime({
  targets: battery,
  'Server Performance': '100%',
  round: 1,
  easing: 'linear',
  update: function () {
    logEl.innerHTML = JSON.stringify(battery);
  }
});

/* ############## HAM MENU */

if (!document.URL.includes('home')) {
  const hamMenu = document.querySelector('.hamburger-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');
  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
  });
}