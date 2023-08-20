const nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav(){
    if(nav.offsetHeight + 100 < window.scrollY){
        nav.classList.add('active')
    } else{
        nav.classList.remove('active')
    }
}