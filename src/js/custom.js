import $ from 'jquery';
// import Swiper from 'swiper';
import './lib/jquery.magnific-popup.min.js';

import {
    lazyImageLoad
} from './lazy-image';

import {
    countUp
} from './countUp';

$(function() {
    lazyImageLoad();

    function addMacClasses() {
        var userAgent = window.navigator.userAgent;
        // for mac
        if (window.navigator.userAgent.indexOf("Mac") != -1) {
            $('body').addClass('foundr-mac');
            $('a.btn').addClass('btn-mac');
            $('#clockdiv, #clockdiv-mobile').addClass('timer-mac');
        } else if (/Android/.test(userAgent)) {
            $('body').addClass('foundr-mac');
            $('a.btn').addClass('btn-mac');
            $('#clockdiv, #clockdiv-mobile').addClass('timer-mac');
        } else if (window.navigator.userAgent.indexOf("Linux") != -1) {
            $('body').addClass('foundr-mac');
            $('a.btn').addClass('btn-mac');
            $('#clockdiv, #clockdiv-mobile').addClass('timer-mac');
        }
    }
    addMacClasses();
    
    countUp('.count');

    // Mobile Module Accordion
    var viewpostwidth = $(window).width();
    if (viewpostwidth < 768) {
        $('#mobile-module-accordion li').find('.mobile-module-answer').hide();
        $('#mobile-module-accordion li .mobile-accordion-link').click(function() {
            var parent = $(this).parents('li');
            parent.find('.mobile-module-answer').stop().slideToggle();            
            parent.toggleClass('active');
            parent.siblings().removeClass('active');
            parent.siblings().find('.mobile-module-answer').slideUp();
            
        })
        $('#mobile-module-accordion li').each(function() {
            if ($(this).hasClass('active')) {
                $(this).find('.mobile-module-answer').show();    
            }
        })
    }

    // Vimeo control
    function vimeoControl(vIframe, buttonEl) {
        var playButton = buttonEl;
        var iframe = vIframe;
        var player = new Vimeo.Player(iframe);
        playButton.addEventListener("click", function() {
            player.play();
            playButton.style.display = "none";
        });

        player.on('play', () => {
            playButton.style.display = "none";
        });

        player.on('pause', () => {
            playButton.style.display = "flex";
        });
    }
    var allVideo = document.querySelectorAll('.vimeo-control');
    for(var i = 0; i < allVideo.length; i++){
        var playBtn = allVideo[i].querySelector('.play-btn');
        var vIframe = allVideo[i].querySelector('iframe');
        vimeoControl(vIframe, playBtn);
    }

})