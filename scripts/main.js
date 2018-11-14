var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jugendrotkreuz-rohrbach.png') {
      myImage.setAttribute ('src','images/jugendrotkreuz-rohrbach2.png');
    } else {
      myImage.setAttribute ('src','images/jugendrotkreuz-rohrbach.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2.willkommen');

function setUserName() {
  var myName = prompt('Gib bitte deinen Namen ein:');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Herzlich Willkommen, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} 
  else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Herzlich Willkommen, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

