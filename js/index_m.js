$(document).ready(function(){

    let info = $('.tail_neo .bsns_wrap .btn_com');
    let detail = $('.com_detail');
    let lang = $('.go_foreign .list_pop span.title');
    let pop = $('.go_foreign .list_pop ul');
    


    info.click(function() {
        info.toggleClass("active");
        detail.slideToggle(300);
    });
    
    lang.click(function() {
        lang.toggleClass("on");
        pop.slideToggle(300);
    });
    
    $('.hsn').click(function() {
        $(this).toggleClass("active");
        
        $(this).next('.sideCommSub').slideToggle(300);
    });
    
});



document.querySelector('.search_btn').addEventListener('click', function() {
    let modalView = document.querySelector('html');
    modalView.classList.add('expand');
});
document.querySelector('.btnClose').addEventListener('click', function() {
    let modalView = document.querySelector('html');
    modalView.classList.remove('expand');
});



document.querySelector('#mNav1').addEventListener('click', function() {
    let modalView = document.querySelector('html');
    modalView.classList.add('show');
});
document.querySelector('#search_back_button').addEventListener('click', function() {
    let modalView = document.querySelector('html');
    modalView.classList.remove('show');
});

