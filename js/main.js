
document.querySelector('.header-burger-inner').onclick = function(){
    document.querySelector('.header_burger').classList.toggle('header_burger-active');
    document.querySelector('.header_burger_menu').classList.toggle('header_burger_menu_active');
    document.querySelector('.overlay-bg').classList.toggle('overlay-bg-active');
}

 // services
 document.querySelector('.services-btn').onclick = function(){
    document.querySelector('.drop-down-serices').classList.toggle('drop-down-serices-active');
    document.querySelector('.arrow-down-submenu-services').classList.toggle('arrow-down-submenu-services-active');
}
// services

// products
document.querySelector('.about-btn-sub-menu').onclick = function(){
    document.querySelector('.sub-menu-ul').classList.toggle('sub-menu-ul-active');
    document.querySelector('.third').classList.toggle('rotate');

}
// products


// products-payments
document.querySelector('.payments-btn').onclick = function(){
    document.querySelector('.payments-btn').classList.toggle('payments-btn-active');
    document.querySelector('.drop-down-3').classList.toggle('drop-down-3-active');
    document.querySelector('.arrow-down-submenu').classList.toggle('arrow-down-submenu-active');
}
// products-payments

// products-bussines
document.querySelector('.bussines-btn').onclick = function(){
    document.querySelector('.bussines-btn').classList.toggle('bussines-btn-active');
    document.querySelector('.drop-down-bussines').classList.toggle('drop-down-bussines-active');
    document.querySelector('.arrow-down-submenu-bussines').classList.toggle('arrow-down-submenu-bussines-active');
}
// products-bussines

// about
document.querySelector('.products-btn-sub-menu').onclick = function(){
document.querySelector('.sub-menu-products').classList.toggle('sub-menu-products-active');
document.querySelector('.arrow-sub-menu').classList.toggle('arrow-sub-menu-active');
}
// about




window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active" , window.scrollY > 500)
})



function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}











