/*const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.header-menu');

//display mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);
*/
const humbmenu = document.querySelector('#mobile-menu');
const barmenu = document.querySelector('.header-menu');
const navLogo = document.querySelector('#navbar-logo');

const dosome = ()=> {
    humbmenu.classList.toggle('is-active');
    barmenu.classList.toggle('active');
};

humbmenu.addEventListener('click',dosome);

// show active menu when scroling ;

const highlightmenu = () =>{
    const elem =document.querySelector('.highlight');
    const home =document.querySelector('#home-page');
    const about =document.querySelector('#about-page');
    const vote =document.querySelector('#vote-page');

    let scrollPos = window.scrollY;
    console.log(scrollPos);

    //adds 'highlights' class to my menu items

    if(window.innerWidth >960 && scrollPos < 600){
        home.classList.add('highlight')
        about.classList.remove('highlight')
        return
    }else if(window.innerWidth >960 && scrollPos < 1400)
    {
        about.classList.add('highlight')
        home.classList.remove('highlight')
        vote.classList.remove('highlight')
        return
    }
    else if(window.innerWidth >960 && scrollPos < 2345)
    {
        vote.classList.add('highlight')
        about.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollpos <600 ) || elem ){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll',highlightmenu)
window.addEventListener('click',highlightmenu)




// close mobile menu when clicking on a menu item
const hidemobilemenu = () =>{
    /*const home =document.querySelector('#home-page');
    const about =document.querySelector('#about-page');
    const vote =document.querySelector('#vote-page');
    const butt =document.querySelector('#sign-up');

    home.classList.toggle('gogo');
    about.classList.toggle('gogo');
    vote.classList.toggle('gogo');
    butt.classList.toggle('gogo');
}

home.addEventListener('click',hidemobilemenu);
about.addEventListener('click',hidemobilemenu);
vote.addEventListener('click',hidemobilemenu);
butt.addEventListener('click',hidemobilemenu);
*/
const menuBars = document.querySelector('.is-active')
if(window.innerWidth <= 768 && menuBars){
    humbmenu.classList.remove('is-active');
    barmenu.classList.remove('active');
}
}

barmenu.addEventListener('click',hidemobilemenu);
navLogo.addEventListener('click',hidemobilemenu);