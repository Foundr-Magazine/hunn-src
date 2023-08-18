import $ from 'jquery';
import Cookies from "js-cookie"

$(function(){
        var $window = $(window);
        var $videoWrap = $('.floating-video-wrapper');
        var $video = $('.floating-video-wrapper .video-content');
        var videoHeight = $video.outerHeight();

        $window.on('scroll',  function() {
                var isMainVideoOff = Cookies.get('igdom-amc-varc-sp-is-main-video-off1')

                if ( 'undefined'!==typeof isMainVideoOff && 'true' == isMainVideoOff ) {
                        return false
                }
                var windowScrollTop = $window.scrollTop();
                var videoBottom = videoHeight + $videoWrap.offset().top;
                if (windowScrollTop > videoBottom) {
                        $videoWrap.height(videoHeight);
                        $video.addClass('floating-stick-video');
                } else {
                        $videoWrap.height('auto');
                        $video.removeClass('floating-stick-video');
                }
        });

        $videoWrap.find('.floating-video-close').on('click', function(){
                $('#popUp').removeClass('floating-stick-video');
                Cookies.set('igdom-amc-varc-sp-is-main-video-off1', true );
        });
})