
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



class SocialNetwork {

	constructor(name) { // associo il paramentro in ingresso al nome della nuova instanza
  	this.name = name;
  }

  publish(message) { // prende il valore in ingresso dalla funzione PUBLIC riga
  	console.log('I am publish this message on ' + this.name + ' : ' + message); // message permette di stampare helloOoOoOoOo
}
// console.log(SocialNetwork);
}
class User {

	constructor() {
  	this.socialProfiles = {}; // contruttore che crea una nuova istanza
  }

  addSocial(name, social) { // a addSocial diamo in pasto 2
  	this.socialProfiles[name] = social;

    console.log(social); // restituisce 2 oggetti INSTAGRAM + FACEBOOK
    // console.log(name); // restituisce 2 oggetti INSTAGRAM + FACEBOOK
    console.log(User);
    // forEach((social, i) => socials {
    //   console.log(social);
    // });

  }

  publishAll(message) {

  	Object.keys(this.socialProfiles).forEach(function (profile) {
    	this.socialProfiles[profile].publish(message);
      // console.log(message);
      // Il metodo Object.keys() restituisce un array contenente le proprietà enumerabili di un dato oggetto, nel medesimo ordine fornito da un ciclo for...in  (la differenza è che un ciclo for-in enumera anche le proprietà nella catena di prototipi).
          // Object.keys restituisce un array i quali elementi sono stringhe corrispondenti alle proprietà enumerabili trovate direttamente in obj. L'ordine delle proprietà è lo stesso di quello dato ciclando manualmente sulle proprietà dell'oggetto.
    });

  }
}

console.log(SocialNetwork);
const u = new User(); // COSTANTE per contrarre il codice u = nuova Classe User


const Facebook = new SocialNetwork('Facebook'); // COSTANTE per contrarre il codice u = nuova Classe SocialNetwork
const Instagram = new SocialNetwork('Instagram'); // COSTANTE per contrarre il codice u = nuova Classe SocialNetwork
u.addSocial(Facebook, Facebook); // Nuova classe User  con due parametri in ingresso, new SocialNetwork al cui interno si crea Instagram e Facebook come stringa in ingresso
u.addSocial(Instagram, Instagram); // funzioni con parametri in ingresso

// u.publishAll("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

// Users = {
      //     name: "Instagram" {
      //              name: 'SocialNetwork'
      //              publish(message);
      //              }
      //    },
//        {
//           name: "Facebook" {
//                    name: 'SocialNetwork'
//                     publish(message);
//                }
//         }

Instagram.publish('helloOoOoOoOo!'); // publish stampa il messaggio helloOoOoO  dentro la new l'instanza di Social Network
Facebook.publish('hello!');
// console.log(Facebook); // oggetto con nome:facebook

// console.log(Instagram);
// console.log(SocialNetwork);

// console.log(User);

// entro dentro User, il contruttore crea un OGGETTO, la funziona addSocial riceve 2 oggetti, in qeusto caso INSTAGRAM e FACEBOOK, dentro Queste 2 altre classi
