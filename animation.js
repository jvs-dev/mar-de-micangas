let body = document.querySelector("body")
let menubtn = document.querySelector('.main__menutoggle')
let menu = document.querySelector('.main__menu')
let daynightbtn = document.querySelector('.main__daynight')

function init() {
    if (localStorage.dark == 1) {
        body.classList.toggle('dark');
        setTimeout(() => {
            daynightbtn.name = "sunny-outline";
        }, 100);
    }
}

function daynight() {
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
        daynightbtn.name = "sunny-outline"
        localStorage.setItem('dark', 1)
    }
    else {
        daynightbtn.name = "moon-outline"
        localStorage.setItem('dark', 0)
    }
}

function menutoggle() {
    menu.classList.toggle('disabled')
    menubtn.classList.toggle('menuopen')
    daynightbtn.classList.toggle('menuopen')
    window.scrollTo(0, 0)
    if (menu.classList.contains('disabled')) {
        menubtn.name = "menu-outline"
        body.style.overflowY = "auto"
    }
    else {
        menubtn.name = "close-outline"
        body.style.overflowY = "hidden"
    }

}

window.addEventListener("load", init())