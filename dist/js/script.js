// Navbar Fixed
window.onscroll = function(){
 const header = document.querySelector('header');
 const fixedNav = header.offsetTop;
 if (window.pageYOffset > fixedNav) {
  header.classList.add('navbar-fixed');
}else{
 header.classList.remove('navbar-fixed');
}
};
//garistiga
const garistiga = document.querySelector('#garistiga');
const navMenu = document.querySelector('#nav-menu');
garistiga.addEventListener('click',function(){
 garistiga.classList.toggle('garistiga-active');
 navMenu.classList.toggle('hidden');
});