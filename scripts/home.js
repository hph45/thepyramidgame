/* YEA THIS AINT WOKING */

window.onload = () => {
    if (!sessionStorage.username) {
        location.href = '/';
    }
}

/*  ##### .  GREETING and LOG OUT  ##### */

const greeting = document.querySelector('.greeting');
greeting.innerHTML = sessionStorage.username;

const idcode = document.querySelector('.idcode');
idcode.innerHTML = 'Referral Code: \'' + sessionStorage.username + '\'';

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
  sessionStorage.clear();
  location.reload();
}

// ********** pop up controls

const openpopup = document.querySelector('.takeover1');
const closepopup = document.querySelector('.closepopup');
const popup = document.getElementById('takeoverriskpopup');

openpopup.onclick = () => {
  popup.classList.remove('hidden');
}

closepopup.onclick = () => {
  popup.classList.add('hidden');
}
