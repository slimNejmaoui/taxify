jQuery(function($) {'use strict';



	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// accordian
	$('#accordionDivers .accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});
	$('#accordionPassengers .accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});
	//Slider
	$(document).ready(function() {
		var time = 7; // time in seconds

	 	var $progressBar,
	      $bar, 
	      $elem, 
	      isPause, 
	      tick,
	      percentTime;
	 
	    //Init the carousel
	    $("#main-slider").find('.owl-carousel').owlCarousel({
	      slideSpeed : 500,
	      paginationSpeed : 500,
	      singleItem : true,
	      navigation : true,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			],
	      afterInit : progressBar,
	      afterMove : moved,
	      startDragging : pauseOnDragging,
	      //autoHeight : true,
	      transitionStyle : "fadeUp"
	    });
	    $("#features").find('.owl-carousel').owlCarousel({
	      itemsCustom : [
        [0, 2],
        [450, 2],
        [600, 3],
        [700, 3],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
     


	    });

	 
	    //Init progressBar where elem is $("#owl-demo")
	    function progressBar(elem){
	      $elem = elem;
	      //build progress bar elements
	      buildProgressBar();
	      //start counting
	      start();
	    }
	 
	    //create div#progressBar and div#bar then append to $(".owl-carousel")
	    function buildProgressBar(){
	      $progressBar = $("<div>",{
	        id:"progressBar"
	      });
	      $bar = $("<div>",{
	        id:"bar"
	      });
	      $progressBar.append($bar).appendTo($elem);
	    }
	 
	    function start() {
	      //reset timer
	      percentTime = 0;
	      isPause = false;
	      //run interval every 0.01 second
	      tick = setInterval(interval, 10);
	    };
	 
	    function interval() {
	      if(isPause === false){
	        percentTime += 1 / time;
	        $bar.css({
	           width: percentTime+"%"
	         });
	        //if percentTime is equal or greater than 100
	        if(percentTime >= 100){
	          //slide to next item 
	          $elem.trigger('owl.next')
	        }
	      }
	    }
	 
	    //pause while dragging 
	    function pauseOnDragging(){
	      isPause = true;
	    }
	 
	    //moved callback
	    function moved(){
	      //clear interval
	      clearTimeout(tick);
	      //start again
	      start();
	    }
	});

	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	$(document).ready(function() {
		//Animated Progress
		$('.progress-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).css('width', $(this).data('width') + '%');
				$(this).unbind('inview');
			}
		});

		//Animated Number
		$.fn.animateNumbers = function(stop, commas, duration, ease) {
			return this.each(function() {
				var $this = $(this);
				var start = parseInt($this.text().replace(/,/g, ""));
				commas = (commas === undefined) ? true : commas;
				$({value: start}).animate({value: stop}, {
					duration: duration == undefined ? 1000 : duration,
					easing: ease == undefined ? "swing" : ease,
					step: function() {
						$this.text(Math.floor(this.value));
						if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
					},
					complete: function() {
						if (parseInt($this.text()) !== stop) {
							$this.text(stop);
							if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
						}
					}
				});
			});
		};

		$('.animated-number').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			var $this = $(this);
			if (visible) {
				$this.animateNumbers($this.data('digit'), false, $this.data('duration')); 
				$this.unbind('inview');
			}
		});
	});


/*******************************
* ACCORDION WITH TOGGLE ICONS
*******************************/
	function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus-sign glyphicon-minus-sign');
    }

    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);




//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});


	// video
	var videoPlayButton,
	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
				this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#ec118f"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#ec118f"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
	}

videoMethods.renderVideoPlayButton();



});
const logoImg = document.querySelector('.logo-img');
let lastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;
  
  if (currentScrollPosition < lastScrollPosition) {
    logoImg.classList.remove('zoom-in');
    logoImg.classList.add('zoom-out');
  } else {
    logoImg.classList.remove('zoom-out');
    logoImg.classList.add('zoom-in');
  }
  
  lastScrollPosition = currentScrollPosition;
});

$(document).ready(function(){
	$('.image1').addClass('animated');
	$('.image2').addClass('animated');
	$('.image3').addClass('animated');
  
	$('.text1').addClass('animated');
	$('.text2').addClass('animated');
	$('.text3').addClass('animated');
	$('.text4').addClass('animated');
  });
  
  $(window).scroll(function() {
	var hT = $('#work-process').offset().top,
		hH = $('#work-process').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
	if (wS > (hT+hH-wH)){
	  setTimeout(function(){
		$('.image2').css('visibility', 'visible');
		$('.text2').css('visibility', 'visible');
		$('.image2').addClass('fadeInLeft');
		$('.text2').addClass('fadeInLeft');
	  }, 500);
	  setTimeout(function(){
		$('.image3').css('visibility', 'visible');
		$('.text3').css('visibility', 'visible');
		$('.image3').addClass('fadeInLeft');
		$('.text3').addClass('fadeInLeft');
	  }, 1000);
	  setTimeout(function(){
		$('.image5').css('visibility', 'visible');
		$('.text3').css('visibility', 'visible');
		$('.image5').addClass('fadeInLeft');
		$('.text3').addClass('fadeInLeft');
	  }, 1500);
	  setTimeout(function(){
		$('.image5').css('visibility', 'visible');
		$('.text4').css('visibility', 'visible');
		$('.image5').addClass('fadeInLeft');
		$('.text4').addClass('fadeInLeft');
	  }, 1500);
	}
  });
  new WOW().init({
    animateClass: 'animated',
    offset: 2000,
    mobile: false,
    live: true
});

  // Cacher toutes les réponses au début
  var answers = document.getElementsByClassName("answer");
  for (var i = 0; i < answers.length; i++) {
    answers[i].style.display = "none";
  }

  // Ajouter un gestionnaire d'événements au clic sur chaque question
  var questions = document.getElementsByClassName("question");
  for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function() {
      // Changer l'icône et afficher/masquer la réponse
      var icon = this.querySelector(".icon");
      var answer = this.querySelector(".answer");
      if (icon.innerHTML == "+") {
        icon.innerHTML = "-";
        answer.style.display = "block";
      } else {
        icon.innerHTML = "+";
        answer.style.display = "none";
      }
    });
  }
var answers = document.querySelectorAll('.answer');

answers.forEach(function(answer) {
  answer.addEventListener('click', function() {
    answer.parentNode.classList.toggle('active');
  });
});

  window.addEventListener('resize', function () {
	google.maps.event.trigger(map, 'resize');
  });

function changeLanguage(lang) {
	i18next.changeLanguage(lang, function(err, t) {
	  localStorage.setItem('language', lang);
	  document.querySelectorAll('[data-i18n]').forEach(function(element) {
		var key = element.getAttribute('data-i18n');
		element.innerHTML = t(key, { escape: false });
	  });
	});
  }
  
  document.addEventListener('DOMContentLoaded', function() {
	var language = localStorage.getItem('language');
	if (language) {
	  changeLanguage(language);
	}
  });
  
  
  


