window.addEventListener('scroll', function(){  
    let header = document.querySelector('header');
let menu = document.querySelector('ul');
let dropmenu = document.querySelector('.oceanwp-mobile-menu-icon');
    menu.classList.toggle('scrolling-nav', window.scrollY>0);
    dropmenu.classList.toggle('scrolling-active', window.scrollY>0);
    header.classList.toggle('scrolling-active', window.scrollY>0);
});
let kutrommel = document.getElementsByClassName('mobile-menu');
kutrommel[0].addEventListener('click', function(){
    let header = document.querySelector('header');
    let dropmenu = document.querySelector('.oceanwp-mobile-menu-icon');
    if(kutrommel[0].classList.contains('opened')){
        setTimeout(() => {
            header.classList.remove('scrolling-active');
            dropmenu.classList.remove('scrolling-active')
        }, 500);
    }else
    {
        header.classList.add('scrolling-active');
        dropmenu.classList.add('scrolling-active');
    };
});