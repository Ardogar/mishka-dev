'use strict'

function checkAttribute() {
  var mainNavigation = document.querySelector('.main-navigation__list');
  var arr = mainNavigation.classList;
  var closeMenu = document.querySelector('.menu-btn-close');
  var openMenu = document.querySelector('.menu-btn-open');
  

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] !== 'close-menu') {
      mainNavigation.classList.add('close-menu')
    }
  }
  openMenu.addEventListener('click', function() {
    mainNavigation.classList.remove('close-menu');
  });
  closeMenu.addEventListener('click', function(){
    mainNavigation.classList.add('close-menu');
  });
}  

checkAttribute();



function searchMenu() {
  var searchBlock = document.querySelector('.search-item');
  var searchBtn = document.querySelector('.search-link');


  searchBlock.classList.add('visually');


  searchBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    var searchBlockClass = searchBlock.getAttribute('class').split(' ');
    for(var i = 0; i < searchBlockClass.length; i++) {
      if(searchBlockClass[i] == 'visually') {
        searchBlock.classList.remove('visually');
    } else {
     searchBlock.classList.add('visually');
    }
    }
    
  })
}



searchMenu();