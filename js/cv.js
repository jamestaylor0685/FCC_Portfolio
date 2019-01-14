var popMe = document.getElementById('popMe');
var aboutMe = document.getElementById('aboutMe');
var popCareer = document.getElementById('popCareer');
var myCareer = document.getElementById('myCareer');
var popProjects = document.getElementById('popProjects');
var myProjects = document.getElementById('myProjects');
var myLinks = document.getElementById('myLinks');
var popLinks = document.getElementById('popLinks');
var btnAbout = document.getElementById('btnAbout');
var btnCareer = document.getElementById('btnCareer');
var btnProjects = document.getElementById('btnProjects');
var btnLinks = document.getElementById('btnLinks');
var popContainer = document.getElementsByClassName('popContainer');
var body = document.getElementsByTagName('body');

btnAbout.addEventListener('click', function() {
  popMe.style.display = 'block';
});
btnCareer.addEventListener('click', function() {
  popCareer.style.display = 'block';
});
btnLinks.addEventListener('click', function() {
  popLinks.style.display = 'block';
});

window.onclick = function(event) {
  if (event.target == popMe) {
    popMe.style.display = 'none';
  } else if (event.target == aboutMe) {
    popMe.style.display = 'none';
  } else if (event.target == myCareer) {
    popCareer.style.display = 'none';
  } else if (event.target == popCareer) {
    popCareer.style.display = 'none';
  } else if (event.target == popLinks) {
    popLinks.style.display = 'none';
  } else if (event.target == myLinks) {
    popLinks.style.display = 'none';
  }
}
