window.addEventListener('scroll', function(){  
    let header = document.querySelector('header');
    let menu = document.querySelector('ul');
    let dropmenu = document.querySelector('.oceanwp-mobile-menu-icon');
    menu.classList.toggle('scrolling-nav', window.scrollY>0);
    dropmenu.classList.toggle('scrolling-active', window.scrollY>0);
    header.classList.toggle('scrolling-active', window.scrollY>0);

    /* Paralaxscrolling home page */
    let bg = document.getElementById("bg");
    let man = document.getElementById("man1");
    let vrouw1 = document.getElementById("vrouw1");
    let dolfijn = document.getElementById("dolfijn");
    let vrouw2 = document.getElementById("vrouw2");
    let text = document.getElementById("text");
    let text2 = document.getElementById("text2");
    let bubbles = document.getElementById("bubbles");
    let bubbles2 = document.getElementById("bubbles2");


        var value = window.scrollY;
        bg.style.top = value * 0.4 + 'px';
        man.style.left = value * 1 + 'px';
        vrouw1.style.right = value * 0.6 + 'px';
        vrouw2.style.right = value * 1 + 'px';
        dolfijn.style.left = value * 2 + 'px';
        text.style.top = value * 0.2 + 'px';
        text2.style.top = value * 0.2 + 'px';
        bubbles.style.bottom = value * 1 + 'px';
        bubbles2.style.bottom = value * 2 + 'px';

});
let kutrommel = document.getElementsByClassName('mobile-menu');
kutrommel[0].addEventListener('click', function(){
    let header = document.querySelector('header');
    let dropmenu = document.querySelector('.oceanwp-mobile-menu-icon');
    if(kutrommel[0].classList.contains('opened')){
        setTimeout(() => {
            header.classList.remove('scrollmenu');
            dropmenu.classList.remove('scrollmenu')
        }, 500);
    }else
    {
        header.classList.add('scrollmenu');
        dropmenu.classList.add('scrollmenu');
    };
});