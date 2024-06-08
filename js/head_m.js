let lastScrollTop = 0;
let delta = 5;
let headerHeight = document.getElementById('header').clientHeight;
let header = document.querySelector('.header_wrap');

function onScroll() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - currentScroll) <= delta)
        return;

    if (currentScroll > lastScrollTop && currentScroll > headerHeight){
        header.classList.add('h_scroll');
    } else {
        header.classList.remove('h_scroll');
    }

    lastScrollTop = currentScroll;
}

window.addEventListener('scroll', onScroll);

$(function(){
    $('.btnTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
})
