// Toggling the menu
let menuElem = document.getElementById('sweeties');
let titleElem = document.querySelector('.title');
titleElem.onclick = function(){
    menuElem.classList.toggle('open');
};

function eventClicker() {alert('Hello World');}
function eventClicker2() {alert('Hi World');}

document.getElementById('eventClick').addEventListener('click', eventClicker);
document.getElementById('eventClick').removeEventListener('click', eventClicker);
document.getElementById('eventClick').addEventListener('click', eventClicker2);

// document.getElementById('eventClick').addEventListener('click', function() { alert('Hello world');});
// document.getElementById('eventClick').addEventListener('click', function() { alert('Good morning');});
