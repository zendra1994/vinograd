import jQuery from 'jquery';
import smoothState from 'smoothstate';

import about from './about';
require('../styles/main.scss');
 
(function($) {
  'use strict';
  $('#wrapper').smoothState({
    onStart : {        
        // Set the duration of our animation
        duration: 300,
        // Alterations to the page
        render: () => {
          // Quickly toggles a class and restarts css animations
          content.toggleAnimationClass('is-exiting');
          // Scroll user to the top
          $('body, html').animate({ 'scrollTop': 0 });
        }
      }
    }).data('smoothState'); // makes public methods available

    function init() {
      $('header').removeClass('header-transition');
    }
    function mobileNavToggle() {

    }

    init();

    $(window).scroll(() => {
      if ($(window).scrollTop() > 0) {
        if(!$('header').hasClass('header-transition'))
          $('header').delay(200).addClass('header-transition');
      } else {
        $('header').removeClass('header-transition');
      }
    });

    $('.mobile-nav-toggle').on('click', () => {
      $('nav').toggleClass('mobile-nav-down')
    })
})(jQuery);
