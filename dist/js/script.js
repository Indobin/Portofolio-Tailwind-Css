// Navbar Fixed
window.onscroll = function(){
 const header = document.querySelector('header');
 const fixedNav = header.offsetTop;
 const panah = document.querySelector('#panah');
 if (window.pageYOffset > fixedNav) {
  header.classList.add('navbar-fixed');
  panah.classList.remove('hidden');
  panah.classList.add('flex');
}else{
 header.classList.remove('navbar-fixed');
 panah.classList.remove('flex');
 panah.classList.add('hidden');
}
};
//garistiga
const garistiga = document.querySelector('#garistiga');
const navMenu = document.querySelector('#nav-menu');
garistiga.addEventListener('click',function(){
 garistiga.classList.toggle('garistiga-active');
 navMenu.classList.toggle('hidden');
});

// Klik di luar garitiga
window.addEventListener('click',function(e){
  if(e.target != garistiga && e.target != navMenu){
    garistiga.classList.remove('garistiga-active');
    navMenu.classList.add('hidden');
  }
});

// Dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
  if(darkToggle.checked){
    html.classList.add('dark');
    localStorage.theme = 'dark';
  }else{
    html.classList.remove('dark');
    localStorage.theme  = 'light';
  }
});

// toggle dark sesuai checked
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia
('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}