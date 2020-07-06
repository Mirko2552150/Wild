
$('.fa-angle-right').click(nextSlide);;

function nextSlide() {
    if ( $('.images img.active').hasClass('last') ) {

        $('.images img.active').removeClass('active');
        $('.images img.first').addClass('active');

        $('.slider-nav i.active').removeClass('active');
        $('.slider-nav i.first').addClass('active');

    } else {
        var imgAttiva = $('.images img.active');
        var prossimaImg = $('.images img.active').next();

        imgAttiva.removeClass('active');
        prossimaImg.addClass('active');

        var pallinoAttivo = $('.slider-nav i.active');
        var prossimaPallino = $('.slider-nav i.active').next();

        pallinoAttivo.removeClass('active');
        prossimaPallino.addClass('active');
    }
}

$('.fa-angle-left').click(backSlide);;

function backSlide() {
    if ( $('.images img.active').hasClass('first') ) {
        $('.images img.active').removeClass('active');
        $('.images img.last').addClass('active');

        $('.slider-nav i.active').removeClass('active');
        $('.slider-nav i.last').addClass('active');

    } else {
        var imgAttiva = $('.images img.active');
        var precedenteImg = $('.images img.active').prev();

        imgAttiva.removeClass('active');
        precedenteImg.addClass('active');

        var pallinoAttivo = $('.slider-nav i.active');
        var precedentePallino = $('.slider-nav i.active').prev();

        precedentePallino.addClass('active');;
    }
}

var id = setInterval(function(){
  nextSlide();
  setTimeout(function(){
      clearTimeout(id);
  }, 28000);

}, 4000);


$('.uno').click(function(){
  $('.press').removeClass('altezza');
  $('.contact').removeClass('altezza');
  $('.main-tendina-box-img-tre').addClass('none');
  $('.main-tendina-box-text-tre').addClass('none');
  $('.main-tendina-box-img-quattro').addClass('none');
  $('.main-tendina-box-text-quattro').addClass('none');
  setTimeout(function(){
    $('.about-me').toggleClass('altezza'); // aggiunge o rimuove la classe altezza dopo 0.3 sec
    setTimeout(function(){
      $('.main-tendina-box-img').toggleClass('none'); //  aggiunge o rimuove la classe none dopo 0.1 sec
      $('.main-tendina-box-text').toggleClass('none');
    },100)
  }, 300);

});

$('.tre').click(function(){
  $('.press').removeClass('altezza');
  $('.about-me').removeClass('altezza');
  $('.main-tendina-box-img').addClass('none');
  $('.main-tendina-box-text').addClass('none');
  $('.main-tendina-box-img-quattro').addClass('none');
  $('.main-tendina-box-text-quattro').addClass('none');
  setTimeout(function(){
    $('.contact').toggleClass('altezza');
    setTimeout(function(){
      $('.main-tendina-box-img-tre').toggleClass('none');
      $('.main-tendina-box-text-tre').toggleClass('none');
    },100)
  }, 300);

});

$('.quattro').click(function(){
  $('.about-me').removeClass('altezza');
  $('.contact').removeClass('altezza');
  $('.main-tendina-box-img-tre').addClass('none');
  $('.main-tendina-box-text-tre').addClass('none');
  $('.main-tendina-box-img').addClass('none');
  $('.main-tendina-box-text').addClass('none');
  setTimeout(function(){
    $('.press').toggleClass('altezza');
    setTimeout(function(){
      $('.main-tendina-box-img-quattro').toggleClass('none');
      $('.main-tendina-box-text-quattro').toggleClass('none');
    },100)
  }, 300);

});

$('.about-me, .contact, .press').click(function(){
  $('.about-me').removeClass('altezza');
  $('.contact').removeClass('altezza');
  $('.press').removeClass('altezza');
  $('.main-tendina-box-img').addClass('none');
  $('.main-tendina-box-text').addClass('none');
  $('.main-tendina-box-img-tre').addClass('none');
  $('.main-tendina-box-text-tre').addClass('none');
  $('.main-tendina-box-img-quattro').addClass('none');
  $('.main-tendina-box-text-quattro').addClass('none');

});

$('#contattami, #contattami2').click(function(){
  window.location.href = "mailto:irene@wildpaper.it?.est&subject=Richiesta Informazioni&body=Ciao! Ti contatto per chiederti informazioni in merito a...";
  // $('.inserimento-dati').toggleClass('none');

});

// $('.close').click(function(){
//   $('.inserimento-dati').addClass('none');
//
// });
