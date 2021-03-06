  $(window).load(function(){
    setTimeout(function(){
     $('.loader').fadeOut();
     $('.hidding').fadeIn();
    }, 500);
});
$( document ).ready(function() {
// DOMMouseScroll included for firefox support
  var canScroll = true,
      scrollController = null;
  $(this).on('mousewheel DOMMouseScroll', function(e){
    if (!($('.outer-nav').hasClass('is-vis'))) {
      e.preventDefault();
      var delta = (e.originalEvent.wheelDelta) ? -e.originalEvent.wheelDelta : e.originalEvent.detail * 20;
      if (delta > 50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(1);
      }
      else if (delta < -50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(-1);
      }
    }
  });
  $('.side-nav li, .outer-nav li').click(function(){
    if (!($(this).hasClass('is-active'))) {
      var $this = $(this),
          curActive = $this.parent().find('.is-active'),
          curPos = $this.parent().children().index(curActive),
          nextPos = $this.parent().children().index($this),
          lastItem = $(this).parent().children().length - 1;
      updateNavs(nextPos);
      updateContent(curPos, nextPos, lastItem);
    }
  });
  $('.cta').click(function(){
    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length - 1,
        nextPos = lastItem;
    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);
  });
  $('.ctaevent').click(function(){
    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length - 4,
        nextPos = lastItem;
    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);
  });
  // swipe support for touch devices
  var targetElement = document.getElementById('viewport'),
      mc = new Hammer(targetElement);
      mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
      mc.on('swipeup swipedown', function(e) {
      updateHelper(e);
  });
  $(document).keyup(function(e){
    if (!($('.outer-nav').hasClass('is-vis'))) {
      e.preventDefault();
      updateHelper(e);
    }
  });
  // determine scroll, swipe, and arrow key direction
  function updateHelper(param) {
    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length - 1,
        nextPos = 0;
    if (param.type === "swipeup" || param.keyCode === 40 || param > 0) {
      if (curPos !== lastItem) {
        nextPos = curPos + 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }
    else if (param.type === "swipedown" || param.keyCode === 38 || param < 0){
      if (curPos !== 0){
        nextPos = curPos - 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        nextPos = lastItem;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }
  }
  // sync side and outer navigations
  function updateNavs(nextPos) {
    $('.side-nav, .outer-nav').children().removeClass('is-active');
    $('.side-nav').children().eq(nextPos).addClass('is-active');
    $('.outer-nav').children().eq(nextPos).addClass('is-active');
  }
  // update main content area
  function updateContent(curPos, nextPos, lastItem) {
    $('.main-content').children().removeClass('section--is-active');
    $('.main-content').children().eq(nextPos).addClass('section--is-active');
    $('.main-content .section').children().removeClass('section--next section--prev');
    if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
      $('.main-content .section').children().removeClass('section--next section--prev');
    }
    else if (curPos < nextPos) {
      $('.main-content').children().eq(curPos).children().addClass('section--next');
    }
    else {
      $('.main-content').children().eq(curPos).children().addClass('section--prev');
    }
    if (nextPos !== 0 && nextPos !== lastItem) {
      $('.header--cta').addClass('is-active');
    }
    else {
      $('.header--cta').removeClass('is-active');
    }
  }
  function outerNav() {
    $('.header--nav-toggle').click(function(){
      $('.perspective').addClass('perspective--modalview');
      setTimeout(function(){
        $('.perspective').addClass('effect-rotate-left--animate');
      }, 25);
      $('.outer-nav, .outer-nav li, .outer-nav--return').addClass('is-vis');
    });
    $('.outer-nav--return, .outer-nav li').click(function(){
      $('.perspective').removeClass('effect-rotate-left--animate');
      setTimeout(function(){
        $('.perspective').removeClass('perspective--modalview');
      }, 400);
      $('.outer-nav, .outer-nav li, .outer-nav--return').removeClass('is-vis');
    });
  }
  outerNav();
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbxODVGD6gp-NemmUGNCr42WLzaN4TS23-0I9sfiik-jAnCon64/exec'
const form = document.forms['submit-to-google-sheet']
const successMessage = document.querySelector('.js-success-message')
const regtitle = document.querySelector('.regtitle')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => showSuccessMessage(response))
})
function showSuccessMessage (response) {
  console.log('Success!', response);
    successMessage.classList.remove('is-hidden');
    form.classList.add('is-hidden');
    regtitle.classList.add('is-hidden');
  setTimeout(function(){
    window.location.reload();
  }, 1500);
}
var counttiles = 0;
$('.abouttxp').click(function(){
  counttiles += 1;
  if(counttiles == 7){
    console.log("7 Taps");
    window.location.replace("games/tiles.html");
  }
});

var counttower = 0;
$('.oursponsors').click(function(){
  counttower += 1;
  if(counttower == 7){
    console.log("7 Taps");
    window.location.replace("games/tower.html");
  }
});

var count2048 = 0;
$('.txptitle').click(function(){
  count2048 += 1;
  if(count2048 == 7){
    console.log("7 Taps");
    window.location.replace("games/2048.html");
  }
});

var countmath = 0;
$('.tech').click(function(){
  countmath += 1;
  if(countmath == 7){
    console.log("7 Taps");
    window.location.replace("games/math.html");
  }
});

if (typeof window.ontouchstart !== 'undefined') {
var funtime = 0;
  $('.fun').click(function() {
    if(funtime == 0) {
      //set first click
      console.log("first click");
      funtime = new Date().getTime();
    }
    else {
      //compare first click to this click and see if they occurred within double click threshold
      if(((new Date().getTime())-funtime) < 8000) {
        //double click occurred
        funtime = 0;
        window.location = "#fun";
      }
      else {
        //not a double click so set as a new first click
        funtime = new Date().getTime();
      }
    }
    return false;
  });

  var techtime = 0;
  $('.tech').click(function() {
    if(techtime == 0) {
      //set first click
      console.log("first click");
      techtime = new Date().getTime();
    }
    else {
      //compare first click to this click and see if they occurred within double click threshold
      if(((new Date().getTime())-techtime) < 8000) {
        //double click occurred
        techtime = 0;
        window.location = "#tech";
      }
      else {
        //not a double click so set as a new first click
        techtime = new Date().getTime();
      }
    }
    return false;
  });

  var culturaltime = 0;
  $('.cultural').click(function() {
    if(culturaltime == 0) {
      //set first click
      console.log("first click");
      culturaltime = new Date().getTime();
    }
    else {
      //compare first click to this click and see if they occurred within double click threshold
      if(((new Date().getTime())-culturaltime) < 8000) {
        //double click occurred
        culturaltime = 0;
        window.location = "#cultural";
      }
      else {
        //not a double click so set as a new first click
        culturaltime = new Date().getTime();
      }
    }
    return false;
  });

  var gamingtime = 0;
  $('.gaming').click(function() {
    if(gamingtime == 0) {
      //set first click
      console.log("first click");
      gamingtime = new Date().getTime();
    }
    else {
      //compare first click to this click and see if they occurred within double click threshold
      if(((new Date().getTime())-gamingtime) < 1000) {
        //double click occurred
        gamingtime = 0;
        window.location = "#gaming";
      }
      else {
        //not a double click so set as a new first click
        gamingtime = new Date().getTime();
      }
    }
    return false;
  });

}
else{
  $('.fun').click(function() {
    window.location = "#fun";
  });
  $('.tech').click(function() {
    window.location = "#tech";
  });
  $('.cultural').click(function() {
    window.location = "#cultural";
  });
  $('.gaming').click(function() {
    window.location = "#gaming";
  });
}