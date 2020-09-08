window.PursuitCollective = {};

$('.subscription-article-topic').each(function() {
  var text = $(this).text();

  var DOMElement = '<label class="w-checkbox checkbox-field"> ' +
    '<input type="checkbox" id="'+ text +'" name="'+ text.replace(/' '/g, '-') +'" data-name="'+ text +'" class="w-checkbox-input checkbox">' +
      '<span for="'+ text +'" class="checkbox-label w-form-label">'+ text +'</span>' +
  '</label>';

  $('.subscription-article-checkboxes').append(DOMElement);
});



var openSearchBar = function(){
  $(this).addClass('.navbar_search-button--active');
  $('.subnav-wrapper').addClass('subnav-wrapper--hidden');
  $('.navbar_logo').addClass('navbar_logo--hidden');
  
  window.setTimeout(function(){
    $('.navbar_search-wrapper').removeClass('navbar_search-wrapper--hidden');
  }, 350);
};


var closeSearchBar = function(){
  $('.navbar_search-wrapper').addClass('navbar_search-wrapper--hidden');
  
  window.setTimeout(function(){
    $('.subnav-wrapper').removeClass('subnav-wrapper--hidden');
    $('.navbar_logo').removeClass('navbar_logo--hidden');
  }, 350);
};


let homepage_logo_animation = function(){
  var logo_animator = $('.logo-animation .logo-animation-container');
       
  logo_animator.append('<img src="https://cdn.jsdelivr.net/gh/Davey-Wright/pursuit-collective@latest/assets/logo-animation.svg" />')

  this.setTimeout( function() { 
    $('.logo-animation').addClass('hide') 
  }, 5000);
}



$(document).ready(function(){
  $('.navbar_search-button').click(openSearchBar);
  $('.footer_search-link').click(openSearchBar);
  $('.navbar_search-cancel-btn').click(closeSearchBar);   

  homepage_logo_animation();
  

}) 
