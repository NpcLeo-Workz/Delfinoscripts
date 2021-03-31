

    window.addEventListener('scroll', function(){
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
    })